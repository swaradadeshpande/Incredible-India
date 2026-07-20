import { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Star,
  ArrowRight,
  Globe,
  Shield,
  Smartphone,
  Users,
  MapPin,
  TrendingUp,
  Calendar,
  Heart,
  Compass,
  Award,
  Plane,
  Home as HomeIcon
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface HomePageProps {
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  onLogin: (loggedIn: boolean) => void;
}

export default function HomePage({ onNavigate, isLoggedIn, onLogin }: HomePageProps) {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showJourneyDialog, setShowJourneyDialog] = useState(false);

  const handleStartJourney = () => {
    if (!isLoggedIn) {
      setShowLoginDialog(true);
    } else {
      setShowJourneyDialog(true);
    }
  };

  const handleLogin = () => {
    onLogin(true);
    setShowLoginDialog(false);
    setShowJourneyDialog(true);
  };

  const handleJourneySelect = (type: string) => {
    setShowJourneyDialog(false);
    onNavigate(type);
  };

  const destinations = [
    {
      name: 'Taj Mahal, Agra',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc1OTA1OTA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Iconic symbol of love',
      category: 'Heritage'
    },
    {
      name: 'Kerala Backwaters',
      image: 'https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzU4OTkxNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Serene waterways',
      category: 'Nature'
    },
    {
      name: 'Rajasthan Palaces',
      image: 'https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NTkwNTkwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Royal architecture',
      category: 'Culture'
    },
    {
      name: 'Goa Beaches',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc1OTA1OTA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Sun, sand & sea',
      category: 'Beach'
    },
    {
      name: 'Himalayan Treks',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YXMlMjBpbmRpYXxlbnwxfHx8fDE3NTkwNTkwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Mountain adventures',
      category: 'Adventure'
    },
    {
      name: 'Varanasi Ghats',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGluZGlhfGVufDF8fHx8MTc1OTA1OTA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Spiritual experience',
      category: 'Spiritual'
    }
  ];

  const analyticsStats = [
    { label: 'Total Travelers', value: '50,243', icon: Users, color: '#ff6b35' },
    { label: 'Active Destinations', value: '1,247', icon: MapPin, color: '#1e7a8c' },
    { label: 'Average Rating', value: '4.8/5', icon: Star, color: '#d4af37' },
    { label: 'Bookings This Month', value: '1,280', icon: Calendar, color: '#8b2635' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf7f2] via-white to-[#f0ece5]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="inline-flex items-center gap-2 bg-[#ff6b35]/10 text-[#ff6b35] hover:bg-[#ff6b35]/20">
                  <Star className="w-4 h-4 fill-current" />
                  India's #1 Smart Tourism Platform
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl text-foreground leading-tight">
                  Discover
                  <span className="text-[#ff6b35]"> Incredible </span>
                  India
                  <span className="text-[#1e7a8c]"> Intelligently</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                  From planning to memories, experience India with our AI-powered platform. 
                  Smart itineraries, real-time assistance, and cultural immersion await.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[#ff6b35]/20">
                  <Globe className="w-4 h-4 text-[#1e7a8c]" />
                  <span className="text-sm">Pre-arrival Planning</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[#ff6b35]/20">
                  <Smartphone className="w-4 h-4 text-[#ff6b35]" />
                  <span className="text-sm">Smart Dashboard</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[#ff6b35]/20">
                  <Shield className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm">24/7 Assistance</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#ff6b35] hover:bg-[#8b2635] text-white px-8 py-3 text-lg group"
                  onClick={handleStartJourney}
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#1e7a8c] text-[#1e7a8c] hover:bg-[#1e7a8c] hover:text-white px-8 py-3 text-lg"
                  onClick={() => onNavigate('dashboard')}
                >
                  Explore Dashboard
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl text-[#ff6b35]">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-[#1e7a8c]">1000+</div>
                  <div className="text-sm text-muted-foreground">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-[#d4af37]">24/7</div>
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
                      src="https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc1OTA1OTA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
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
                      src="https://images.unsplash.com/photo-1653379316270-49c7b3d70110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGljZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzU5MDU5MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                      src="https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzU4OTkxNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                      src="https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NTkwNTkwODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#ff6b35] rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#1e7a8c]/10 text-[#1e7a8c] hover:bg-[#1e7a8c]/20">
              Popular Destinations
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Explore <span className="text-[#ff6b35]">Iconic</span> Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover India's most breathtaking locations, from ancient monuments to pristine beaches and majestic mountains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {destinations.map((destination, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <ImageWithFallback 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-2 bg-[#ff6b35] text-white">
                    {destination.category}
                  </Badge>
                  <h3 className="text-xl text-white mb-1">{destination.name}</h3>
                  <p className="text-sm text-white/80">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white"
              onClick={() => onNavigate('destinations')}
            >
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Analytics Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f0ece5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#d4af37]/10 text-[#d4af37] hover:bg-[#d4af37]/20">
              Travel Analytics
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              India Travel <span className="text-[#ff6b35]">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time data and trends from thousands of travelers exploring India's diverse landscapes.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {analyticsStats.map((stat, idx) => (
              <Card key={idx} className="border-border/50 hover:border-[#ff6b35] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                      <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl mb-2" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Insights */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-[#ff6b35]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#ff6b35]">
                  <TrendingUp className="w-5 h-5" />
                  Top Trending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Himalayan destinations seeing 45% increase in bookings this season for winter sports and snow activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#1e7a8c]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1e7a8c]">
                  <Heart className="w-5 h-5" />
                  Best Rated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kerala backwaters maintain highest satisfaction rating (4.9/5) among all destinations this month.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#d4af37]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#d4af37]">
                  <Compass className="w-5 h-5" />
                  Hidden Gems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Northeast India emerging as popular choice for offbeat travelers seeking authentic experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-[#1e7a8c] hover:bg-[#1e7a8c]/80 text-white"
              onClick={() => onNavigate('dashboard')}
            >
              View Full Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#8b2635]/10 text-[#8b2635] hover:bg-[#8b2635]/20">
                About Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Your Trusted Companion for 
                <span className="text-[#ff6b35]"> Indian Adventures</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're revolutionizing how travelers experience India. Our AI-powered platform combines cutting-edge technology with deep local knowledge to create personalized journeys that respect India's rich cultural heritage.
              </p>
              <p className="text-muted-foreground mb-6">
                From the snow-capped Himalayas to tropical beaches, bustling cities to serene villages, we help you discover India's incredible diversity while ensuring your safety, comfort, and cultural immersion every step of the way.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#ff6b35]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Award Winning</h4>
                    <p className="text-sm text-muted-foreground">Recognized as India's top tourism platform</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#1e7a8c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#1e7a8c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Safe & Secure</h4>
                    <p className="text-sm text-muted-foreground">24/7 support and emergency assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered</h4>
                    <p className="text-sm text-muted-foreground">Smart recommendations tailored to you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#8b2635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-[#8b2635]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community Driven</h4>
                    <p className="text-sm text-muted-foreground">Real reviews from real travelers</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-[#ff6b35] hover:bg-[#8b2635] text-white"
                onClick={() => onNavigate('community')}
              >
                Join Our Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                      alt="Indian culture"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                      alt="Happy travelers"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                      alt="Indian food"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                      alt="Indian landscape"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Welcome to IncredibleIndia</DialogTitle>
            <DialogDescription>
              Login or create an account to start your journey
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full bg-[#ff6b35] hover:bg-[#8b2635] text-white"
                onClick={handleLogin}
              >
                Login
              </Button>
            </TabsContent>
            <TabsContent value="signup" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-signup">Email</Label>
                <Input id="email-signup" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signup">Password</Label>
                <Input id="password-signup" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full bg-[#ff6b35] hover:bg-[#8b2635] text-white"
                onClick={handleLogin}
              >
                Create Account
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Journey Selection Dialog */}
      <Dialog open={showJourneyDialog} onOpenChange={setShowJourneyDialog}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Choose Your Journey Type</DialogTitle>
            <DialogDescription>
              Select whether you're planning your trip or already in India
            </DialogDescription>
          </DialogHeader>
          <div className="grid sm:grid-cols-2 gap-4 py-4">
            <Card 
              className="cursor-pointer hover:border-[#ff6b35] transition-all hover:shadow-lg"
              onClick={() => handleJourneySelect('pre-arrival')}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-[#ff6b35]/10 rounded-full flex items-center justify-center mx-auto">
                  <Plane className="w-8 h-8 text-[#ff6b35]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Pre-Arrival Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Plan your trip with itinerary builder, bookings, and travel checklist
                  </p>
                </div>
                <Button className="w-full bg-[#ff6b35] hover:bg-[#8b2635] text-white">
                  Plan My Trip
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:border-[#1e7a8c] transition-all hover:shadow-lg"
              onClick={() => handleJourneySelect('post-arrival')}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-[#1e7a8c]/10 rounded-full flex items-center justify-center mx-auto">
                  <HomeIcon className="w-8 h-8 text-[#1e7a8c]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Post-Arrival Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Get real-time help with location-based recommendations and local assistance
                  </p>
                </div>
                <Button className="w-full bg-[#1e7a8c] hover:bg-[#1e7a8c]/80 text-white">
                  I'm in India
                </Button>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
