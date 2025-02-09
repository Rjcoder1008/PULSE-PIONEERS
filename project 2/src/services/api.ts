import axios from 'axios';

export const sendMessage = async (message: string) => {
  // Simulated AI response
  const responses = {
    'hello': 'Hello! How can I help you with your health concerns today?',
    'hi': 'Hi! I\'m your healthcare assistant. What symptoms are you experiencing?',
    'default': 'I understand your concern. Could you please describe your symptoms in more detail?'
  };

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    message: responses[message.toLowerCase() as keyof typeof responses] || responses.default
  };
};

export const checkSymptoms = async (symptoms: string) => {
  // Simulated symptom checking logic
  const isEmergency = symptoms.toLowerCase().includes('chest pain');
  const isMedium = symptoms.toLowerCase().includes('fever');

  return {
    severity: isEmergency ? 'high' : isMedium ? 'medium' : 'low',
    recommendation: isEmergency 
      ? 'URGENT: Please seek immediate medical attention'
      : 'Monitor your symptoms and rest',
    isEmergency,
    aiAnalysis: `AI Analysis: ${symptoms}`
  };
};