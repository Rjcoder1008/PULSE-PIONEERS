import { useState } from 'react';
import SymptomChecker from '../components/SymptomChecker';
import ChatBot from '../components/ChatBot';

export default function Dashboard() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <SymptomChecker />
        <div className="relative">
          <button
            onClick={() => setShowChat(!showChat)}
            className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {showChat ? 'Close Chat' : 'Open Chat'}
          </button>
          {showChat && <ChatBot />}
        </div>
      </div>
    </div>
  );
}