import { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim() || !email.includes('@')) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
      setIsSubscribing(false);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1500);
  };
  return (
    <footer className="bg-gradient-to-br from-[var(--foreground)] via-[var(--maroon)] to-[var(--foreground)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--saffron)] to-[var(--gold)] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-[var(--saffron)]">IncredibleIndia</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your intelligent companion for exploring India's rich heritage, diverse cultures, 
              and breathtaking landscapes. From planning to memories, we make every journey extraordinary.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <button 
                  key={idx}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--saffron)] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[var(--gold)]">Explore</h3>
            <ul className="space-y-3">
              {[
                'Popular Destinations',
                'Cultural Experiences',
                'Adventure Tours',
                'Spiritual Journeys',
                'Food & Cuisine',
                'Festivals & Events',
                'Wildlife & Nature',
                'Heritage Sites'
              ].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-[var(--saffron)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[var(--gold)]">Services</h3>
            <ul className="space-y-3">
              {[
                'Trip Planning',
                'Hotel Booking',
                'Transport Booking',
                'Travel Insurance',
                'Visa Assistance',
                'Local Guides',
                '24/7 Support',
                'Emergency Help'
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-[var(--saffron)] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[var(--gold)]">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[var(--saffron)]" />
                  <span className="text-gray-300">+91 1800-123-INDIA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[var(--saffron)]" />
                  <span className="text-gray-300">hello@incredibleindia.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--saffron)] mt-1" />
                  <span className="text-gray-300">
                    Ministry of Tourism, Govt. of India<br />
                    New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[var(--gold)]">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-3">
                Get travel tips, destination updates, and exclusive offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[var(--saffron)]"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubscribe();
                    }
                  }}
                />
                <Button 
                  size="sm" 
                  className="bg-[var(--saffron)] hover:bg-[var(--gold)] text-white min-w-[100px]"
                  onClick={handleSubscribe}
                  disabled={isSubscribing || !email.trim() || !email.includes('@')}
                >
                  {isSubscribing ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Information Banner */}
        <div className="py-6 border-y border-white/20">
          <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-200 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Emergency Contacts in India
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-red-100">
              <div>
                <span className="font-medium">Police:</span> 100
              </div>
              <div>
                <span className="font-medium">Fire:</span> 101
              </div>
              <div>
                <span className="font-medium">Medical:</span> 102
              </div>
              <div>
                <span className="font-medium">Tourist Helpline:</span> 1363
              </div>
              <div>
                <span className="font-medium">Women's Helpline:</span> 1091
              </div>
              <div>
                <span className="font-medium">Universal Emergency:</span> 112
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2024 IncredibleIndia Tourism Platform. All rights reserved. | A initiative to promote India's heritage and culture.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[var(--saffron)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--saffron)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--saffron)] transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--saffron)] transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* Cultural Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--saffron)] via-[var(--gold)] via-[var(--peacock-blue)] to-[var(--maroon)] opacity-60"></div>
      </div>
    </footer>
  );
}