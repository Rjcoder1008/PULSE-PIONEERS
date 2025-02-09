import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl max-w-2xl mx-4 border border-indigo-500/20">
        <h1 className="text-4xl font-bold text-indigo-300 mb-4">
          Welcome to Healthcare Portal
        </h1>
        <p className="text-xl text-indigo-400 mb-8">
          Efficient Patient Management System
        </p>
        <button
          onClick={() => navigate('/doctor')}
          className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Enter Doctor Portal
        </button>
      </div>
    </div>
  );
}