import express from 'express';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { Twilio } from 'twilio';

const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const twilio = new Twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

const SymptomSchema = z.object({
  symptoms: z.string(),
});

app.post('/api/check-symptoms', async (req, res) => {
  try {
    const { symptoms } = SymptomSchema.parse(req.body);
    
    // Simple symptom checking logic (replace with actual AI model)
    const emergencyKeywords = ['chest pain', 'difficulty breathing', 'unconscious'];
    const isEmergency = emergencyKeywords.some(keyword => 
      symptoms.toLowerCase().includes(keyword)
    );

    const result = {
      severity: isEmergency ? 'high' : 'low',
      recommendation: isEmergency 
        ? 'Please seek immediate medical attention'
        : 'Monitor your symptoms and rest',
      isEmergency
    };

    // Store the check in database
    await supabase.from('symptom_checks').insert({
      symptoms,
      result,
      user_id: req.headers['x-user-id']
    });

    if (isEmergency) {
      // Send SMS alert
      await twilio.messages.create({
        body: `Emergency Alert: Patient needs immediate assistance. Symptoms: ${symptoms}`,
        to: process.env.EMERGENCY_PHONE_NUMBER!,
        from: process.env.TWILIO_PHONE_NUMBER!
      });
    }

    res.json(result);
  } catch (error) {
    console.error('Error processing symptoms:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});