import React, { useState } from 'react';

interface SymptomResult {
  severity: 'low' | 'medium' | 'high';
  recommendation: string;
  isEmergency: boolean;
  aiAnalysis: string;
}

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState<SymptomResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulated AI analysis response
      const response = {
        severity: symptoms.toLowerCase().includes('chest pain') ? 'high' :
                 symptoms.toLowerCase().includes('fever') ? 'medium' : 'low',
        recommendation: symptoms.toLowerCase().includes('chest pain') ?
          'URGENT: Please seek immediate medical attention. A doctor will be notified.' :
          'Based on your symptoms, we recommend rest and monitoring your condition.',
        isEmergency: symptoms.toLowerCase().includes('chest pain'),
        aiAnalysis: `Based on our AI analysis:
          ${symptoms.toLowerCase().includes('chest pain') ?
            '- Potential cardiac issue detected\n- Emergency response recommended' :
            '- Common symptoms detected\n- No immediate emergency care needed'}`
      } as SymptomResult;
      
      setResult(response);
    } catch (error) {
      console.error('Error checking symptoms:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">AI Symptom Checker</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Describe your symptoms in detail..."
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Analyzing Symptoms...' : 'Check Symptoms'}
        </button>
      </form>

      {result && (
        <div className={`mt-6 p-4 rounded-lg ${
          result.severity === 'high' ? 'bg-red-50' :
          result.severity === 'medium' ? 'bg-yellow-50' :
          'bg-green-50'
        }`}>
          <h3 className="font-bold mb-2">AI Assessment Results:</h3>
          <div className="mb-2">
            <span className={`inline-block px-2 py-1 rounded text-sm ${
              result.severity === 'high' ? 'bg-red-200 text-red-800' :
              result.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
              'bg-green-200 text-green-800'
            }`}>
              Severity: {result.severity.toUpperCase()}
            </span>
          </div>
          <p className="mb-4 whitespace-pre-line">{result.aiAnalysis}</p>
          <p className="mb-4 font-medium">{result.recommendation}</p>
          {result.isEmergency && (
            <button
              onClick={() => alert('Emergency alert sent to available doctors')}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Send Emergency Alert
            </button>
          )}
        </div>
      )}
    </div>
  );
}