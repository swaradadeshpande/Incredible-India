import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star,
  ArrowRight,
  Globe,
  Shield,
  Smartphone
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--ivory)] via-white to-[var(--muted)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--saffron)]/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="inline-flex items-center gap-2 bg-[var(--saffron)]/10 text-[var(--saffron)] hover:bg-[var(--saffron)]/20">
                <Star className="w-4 h-4 fill-current" />
                India's #1 Smart Tourism Platform
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl text-[var(--foreground)] leading-tight">
                Discover
                <span className="text-[var(--saffron)]"> Incredible </span>
                India
                <span className="text-[var(--peacock-blue)]"> Intelligently</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                From planning to memories, experience India with our AI-powered platform. 
                Smart itineraries, real-time assistance, and cultural immersion await.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[var(--saffron)]/20">
                <Globe className="w-4 h-4 text-[var(--peacock-blue)]" />
                <span className="text-sm">Pre-arrival Planning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[var(--saffron)]/20">
                <Smartphone className="w-4 h-4 text-[var(--saffron)]" />
                <span className="text-sm">Smart Dashboard</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[var(--saffron)]/20">
                <Shield className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-sm">24/7 Assistance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white px-8 py-3 text-lg group"
                onClick={() => {
                  document.getElementById('planning')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[var(--peacock-blue)] text-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)] hover:text-white px-8 py-3 text-lg"
                onClick={() => {
                  document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Dashboard
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl text-[var(--saffron)]">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-[var(--peacock-blue)]">1000+</div>
                <div className="text-sm text-muted-foreground">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-[var(--gold)]">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc1OTA1OTA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Taj Mahal"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm">Agra</div>
                    <div className="text-xs opacity-90">Taj Mahal</div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1653379316270-49c7b3d70110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGljZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzU5MDU5MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Indian Spices Market"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm">Local Markets</div>
                    <div className="text-xs opacity-90">Authentic Experiences</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzU4OTkxNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Kerala Backwaters"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm">Kerala</div>
                    <div className="text-xs opacity-90">Backwaters</div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NTkwNTkwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Rajasthan Palace"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm">Rajasthan</div>
                    <div className="text-xs opacity-90">Royal Palaces</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--gold)] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[var(--saffron)] rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}