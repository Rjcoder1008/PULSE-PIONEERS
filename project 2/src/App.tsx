import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoctorPortal from './pages/DoctorPortal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<DoctorPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;