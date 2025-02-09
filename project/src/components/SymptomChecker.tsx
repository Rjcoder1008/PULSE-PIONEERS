import React, { useState } from 'react';
import { AlertCircle, Loader, MessageSquare, Send } from 'lucide-react';

interface Symptom {
  id: string;
  name: string;
  severity: 'low' | 'medium' | 'high';
}

const commonSymptoms: Symptom[] = [
  { id: '1', name: 'Fever', severity: 'medium' },
  { id: '2', name: 'Cough', severity: 'low' },
  { id: '3', name: 'Headache', severity: 'low' },
  { id: '4', name: 'Difficulty Breathing', severity: 'high' },
  { id: '5', name: 'Chest Pain', severity: 'high' },
  { id: '6', name: 'Fatigue', severity: 'medium' },
  { id: '7', name: 'Body Ache', severity: 'medium' },
  { id: '8', name: 'Nausea', severity: 'medium' },
];

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSOS, setShowSOS] = useState(false);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const selectedSymptomNames = selectedSymptoms.map(
      id => commonSymptoms.find(s => s.id === id)?.name
    );
    
    const hasSevereSymptoms = selectedSymptoms.some(
      id => commonSymptoms.find(s => s.id === id)?.severity === 'high'
    );

    if (hasSevereSymptoms) {
      setShowSOS(true);
      setDiagnosis(
        "⚠️ URGENT: Based on your symptoms, immediate medical attention is recommended. " +
        "Please use the SOS button to contact emergency services or proceed to the nearest healthcare facility."
      );
    } else {
      setDiagnosis(
        "Based on your symptoms analysis:\n\n" +
        "1. Your condition appears to be mild to moderate.\n" +
        "2. Recommended actions:\n" +
        "   - Rest and stay hydrated\n" +
        "   - Monitor your symptoms\n" +
        "   - Take over-the-counter medication as needed\n\n" +
        "3. Seek medical attention if symptoms worsen or persist beyond 3 days."
      );
    }
    
    setIsLoading(false);
  };

  const handleSOS = () => {
    // In a real implementation, this would integrate with Twilio to send SMS
    alert("Emergency alert sent to nearby healthcare providers. They will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 gradient-text">AI Symptom Checker</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Select Your Symptoms</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {commonSymptoms.map(symptom => (
                  <button
                    key={symptom.id}
                    onClick={() => handleSymptomToggle(symptom.id)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      selectedSymptoms.includes(symptom.id)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <span className="font-medium">{symptom.name}</span>
                    {symptom.severity === 'high' && (
                      <AlertCircle className="inline-block ml-2 h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
              <textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Please provide any additional details about your symptoms..."
                className="w-full h-32 p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handleSubmit}
                disabled={isLoading || selectedSymptoms.length === 0}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin mr-2" />
                    Analyzing Symptoms...
                  </>
                ) : (
                  <>
                    <MessageSquare className="mr-2" />
                    Get AI Assessment
                  </>
                )}
              </button>

              {showSOS && (
                <button
                  onClick={handleSOS}
                  className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center"
                >
                  <AlertCircle className="mr-2" />
                  SOS Emergency
                </button>
              )}
            </div>

            {diagnosis && (
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">AI Assessment</h3>
                <pre className="whitespace-pre-wrap font-sans text-gray-700">
                  {diagnosis}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}