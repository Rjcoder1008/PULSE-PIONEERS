import { useState } from 'react';

interface Patient {
  id: string;
  name: string;
  symptoms: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
  status: 'pending' | 'approved' | 'rejected';
  vitals?: {
    heartRate: string;
    bloodPressure: string;
    temperature: string;
  };
}

export default function DoctorPortal() {
  const [patients] = useState<Patient[]>([
    {
      id: '1',
      name: 'John Doe',
      symptoms: 'Severe chest pain and difficulty breathing',
      severity: 'high',
      timestamp: new Date().toISOString(),
      status: 'pending',
      vitals: {
        heartRate: '110 bpm',
        bloodPressure: '140/90',
        temperature: '38.5°C'
      }
    },
    {
      id: '2',
      name: 'Jane Smith',
      symptoms: 'Mild fever and cough',
      severity: 'low',
      timestamp: new Date().toISOString(),
      status: 'pending',
      vitals: {
        heartRate: '75 bpm',
        bloodPressure: '120/80',
        temperature: '37.8°C'
      }
    }
  ]);

  const handleApprove = (patientId: string) => {
    alert('Patient approved');
  };

  const handleReject = (patientId: string) => {
    alert('Patient rejected');
  };

  const handleSOS = (patientId: string) => {
    alert('Emergency services notified!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-indigo-500/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-indigo-300">Doctor Portal</h1>
              <p className="text-indigo-400 mt-2">Patient Management Dashboard</p>
            </div>
            <div className="bg-gray-700 px-4 py-2 rounded-lg border border-indigo-500/20">
              <p className="text-indigo-300 font-semibold">Active Cases: {patients.length}</p>
            </div>
          </div>

          <div className="grid gap-6">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className={`rounded-xl p-6 transition-all duration-300 hover:shadow-lg bg-gray-700/50 border-l-4 ${
                  patient.severity === 'high' ? 'border-red-500' :
                  patient.severity === 'medium' ? 'border-yellow-500' :
                  'border-green-500'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-100">{patient.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Reported: {new Date(patient.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    patient.severity === 'high' ? 'bg-red-900/50 text-red-300 border border-red-500/50' :
                    patient.severity === 'medium' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/50' :
                    'bg-green-900/50 text-green-300 border border-green-500/50'
                  }`}>
                    {patient.severity.toUpperCase()}
                  </span>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 mb-4 border border-indigo-500/10">
                  <h4 className="font-semibold text-gray-300 mb-2">Symptoms</h4>
                  <p className="text-gray-400">{patient.symptoms}</p>
                </div>

                {patient.vitals && (
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-indigo-500/10">
                      <p className="text-sm text-gray-400">Heart Rate</p>
                      <p className="font-semibold text-gray-300">{patient.vitals.heartRate}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-indigo-500/10">
                      <p className="text-sm text-gray-400">Blood Pressure</p>
                      <p className="font-semibold text-gray-300">{patient.vitals.bloodPressure}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-indigo-500/10">
                      <p className="text-sm text-gray-400">Temperature</p>
                      <p className="font-semibold text-gray-300">{patient.vitals.temperature}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3">
                  {patient.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(patient.id)}
                        className="flex-1 bg-gradient-to-r from-green-700 to-green-900 text-white px-4 py-2 rounded-lg hover:from-green-800 hover:to-green-950 transition-all duration-300 shadow-md hover:shadow-lg border border-green-500/20"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(patient.id)}
                        className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg hover:from-gray-800 hover:to-gray-950 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-500/20"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {patient.severity === 'high' && (
                    <button
                      onClick={() => handleSOS(patient.id)}
                      className="flex-1 bg-gradient-to-r from-red-700 to-red-900 text-white px-4 py-2 rounded-lg hover:from-red-800 hover:to-red-950 transition-all duration-300 shadow-md hover:shadow-lg border border-red-500/20"
                    >
                      SOS
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}