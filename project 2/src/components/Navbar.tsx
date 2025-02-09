import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            RuralGuard
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-md ${
                location.pathname === '/dashboard'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/doctor"
              className={`px-3 py-2 rounded-md ${
                location.pathname === '/doctor'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Doctor Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}