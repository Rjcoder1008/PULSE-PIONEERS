  import React, { useState } from 'react';
import {
  Heart,
  SignalHigh,
  Stethoscope,
  MessageSquare,
  Languages,
  Wifi,
  MapPin,
  PlusCircle,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { SymptomChecker } from './components/SymptomChecker';

function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="feature-card-hover bg-white p-8 rounded-2xl shadow-lg">
      <div className="h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 animate-float">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
      <div className="text-4xl font-bold gradient-text mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showSymptomChecker, setShowSymptomChecker] = useState(false);

  if (showSymptomChecker) {
    return <SymptomChecker />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold gradient-text">RuralGuard</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
              >
                <option>English</option>
                <option>हिंदी</option>
                <option>తెలుగు</option>
                <option>தமிழ்</option>
              </select>
              <button 
                onClick={() => setShowSymptomChecker(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center"
              >
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-pattern container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-50"></div>
              <Heart className="h-16 w-16 text-indigo-600 relative animate-float" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">Healthcare</span> for Every Village
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            AI-powered healthcare assistance for rural communities, working seamlessly even without internet connectivity.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setShowSymptomChecker(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center text-lg"
            >
              Start Using RuralGuard <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard number="10,000+" label="Rural Lives Impacted" />
          <StatCard number="24/7" label="Emergency Support" />
          <StatCard number="15+" label="Regional Languages" />
          <StatCard number="98%" label="Response Rate" />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Key Features</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Empowering rural communities with accessible healthcare solutions that work anywhere, anytime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={Stethoscope}
            title="AI Health Assistant"
            description="Get instant health assessments offline using our advanced AI system powered by TensorFlow Lite."
          />
          <FeatureCard
            icon={MessageSquare}
            title="Emergency SOS Alerts"
            description="Automatic SMS alerts to healthcare providers when urgent medical attention is needed."
          />
          <FeatureCard
            icon={MapPin}
            title="Location Tracking"
            description="Precise location sharing via SMS for quick emergency response in rural areas."
          />
          <FeatureCard
            icon={PlusCircle}
            title="Medical Resources"
            description="Access essential first aid information and connect with local pharmacies for medicine delivery."
          />
          <FeatureCard
            icon={Languages}
            title="Multi-language Support"
            description="Available in regional languages to serve diverse rural communities across India."
          />
          <FeatureCard
            icon={Wifi}
            title="Offline First"
            description="Fully functional without internet, ensuring healthcare access in low-connectivity areas."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How RuralGuard Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-lg">
                <SignalHigh className="h-16 w-16 mx-auto mb-6 text-indigo-300" />
                <h3 className="text-2xl font-semibold mb-4">1. Check Symptoms</h3>
                <p className="text-indigo-100">Enter your symptoms into our AI-powered system for instant assessment</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-lg">
                <MessageSquare className="h-16 w-16 mx-auto mb-6 text-indigo-300" />
                <h3 className="text-2xl font-semibold mb-4">2. Get Assessment</h3>
                <p className="text-indigo-100">Receive immediate health recommendations and emergency alerts if needed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-lg">
                <Stethoscope className="h-16 w-16 mx-auto mb-6 text-indigo-300" />
                <h3 className="text-2xl font-semibold mb-4">3. Connect to Care</h3>
                <p className="text-indigo-100">Get connected with nearby healthcare providers and emergency services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <span>+91 1800-RURAL-GUARD</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <span>support@ruralguard.org</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Emergency Support</h3>
              <p className="text-gray-600 mb-4">24/7 Emergency Helpline:</p>
              <div className="text-2xl font-bold text-indigo-600">108</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 backdrop-blur-xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-white/90">Join us in bringing healthcare access to rural communities.</p>
            <button 
              onClick={() => setShowSymptomChecker(true)}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-lg"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Heart className="h-8 w-8 text-indigo-400" />
            <span className="text-2xl font-bold">RuralGuard</span>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-6">Empowering rural communities with accessible healthcare solutions.</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            </div>
            <p className="text-gray-500">© 2025 RuralGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;