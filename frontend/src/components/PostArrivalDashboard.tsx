import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import WeatherDashboard from './WeatherDashboard';
import { 
  Cloud,
  MapPin,
  Shield,
  Users,
  Navigation,
  MessageCircle,
  Ticket,
  AlertTriangle,
  Sun,
  Droplets,
  Wind,
  Eye,
  Calendar,
  Camera,
  Phone,
  Accessibility
} from 'lucide-react';

export default function PostArrivalDashboard() {
  const [selectedLocation, setSelectedLocation] = useState('New Delhi');
  
  const weatherData = {
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    uvIndex: 6
  };

  const safetyAlerts = [
    { type: 'info', message: 'Traffic is heavy near India Gate - allow extra time', time: '10 mins ago' },
    { type: 'warning', message: 'Monsoon alert: Heavy rainfall expected tonight', time: '30 mins ago' },
    { type: 'success', message: 'All metro lines operating normally', time: '1 hour ago' }
  ];

  const nearbyRecommendations = [
    { name: 'Red Fort', distance: '2.3 km', rating: 4.5, category: 'Historical', crowdLevel: 'Moderate' },
    { name: 'Chandni Chowk', distance: '1.8 km', rating: 4.2, category: 'Shopping', crowdLevel: 'High' },
    { name: 'Lotus Temple', distance: '12 km', rating: 4.6, category: 'Spiritual', crowdLevel: 'Low' },
    { name: 'Humayun\'s Tomb', distance: '8.5 km', rating: 4.4, category: 'Historical', crowdLevel: 'Low' }
  ];

  const upcomingEvents = [
    { name: 'Classical Music Concert', venue: 'Kamani Auditorium', time: 'Tonight 7:00 PM', price: '₹500' },
    { name: 'Food Festival', venue: 'Connaught Place', time: 'Tomorrow 6:00 PM', price: 'Free' },
    { name: 'Art Exhibition', venue: 'National Gallery', time: 'This Weekend', price: '₹200' }
  ];

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-[var(--muted)]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[var(--gold)]/10 text-[var(--gold)] hover:bg-[var(--gold)]/20">
            Smart Travel Dashboard
          </Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-[var(--foreground)]">
            Your <span className="text-[var(--peacock-blue)]">Intelligent</span> Travel Companion
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-time insights, personalized recommendations, and instant assistance 
            to make your Indian journey seamless and memorable.
          </p>
        </div>

        {/* Current Location Header */}
        <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-xl border border-[var(--saffron)]/20 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--saffron)]/10 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[var(--saffron)]" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">Currently in {selectedLocation}</h3>
              <p className="text-sm text-muted-foreground">Welcome to India's capital city</p>
            </div>
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-1 border border-[var(--saffron)] text-[var(--saffron)] rounded-md bg-background hover:bg-[var(--saffron)] hover:text-white transition-colors"
          >
            <option value="New Delhi">New Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Goa">Goa</option>
            <option value="Kerala">Kerala</option>
            <option value="Agra">Agra</option>
            <option value="Udaipur">Udaipur</option>
          </select>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-white border border-border">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[var(--peacock-blue)] data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="weather" className="data-[state=active]:bg-[var(--peacock-blue)] data-[state=active]:text-white">
              Weather
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="data-[state=active]:bg-[var(--peacock-blue)] data-[state=active]:text-white">
              Nearby
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-[var(--peacock-blue)] data-[state=active]:text-white">
              Events
            </TabsTrigger>
            <TabsTrigger value="assistance" className="data-[state=active]:bg-[var(--peacock-blue)] data-[state=active]:text-white">
              Help
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sun, label: 'Weather', value: `${weatherData.temperature}°C`, desc: weatherData.condition, color: 'var(--gold)' },
                { icon: Shield, label: 'Safety', value: 'Safe', desc: 'Low risk area', color: 'var(--peacock-blue)' },
                { icon: Users, label: 'Crowd Level', value: 'Moderate', desc: 'At nearby attractions', color: 'var(--saffron)' },
                { icon: Navigation, label: 'Transport', value: 'Good', desc: 'All services running', color: 'var(--maroon)' }
              ].map((stat, idx) => (
                <Card key={idx} className="text-center border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                      <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    <h3 className="font-semibold text-lg">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Safety Alerts */}
            <Card className="border-[var(--maroon)]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--maroon)]" />
                  Safety & Travel Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {safetyAlerts.map((alert, idx) => (
                  <Alert key={idx} className={`border-l-4 ${
                    alert.type === 'info' ? 'border-l-blue-500 bg-blue-50/50' :
                    alert.type === 'warning' ? 'border-l-yellow-500 bg-yellow-50/50' :
                    'border-l-green-500 bg-green-50/50'
                  }`}>
                    <AlertTriangle className="w-4 h-4" />
                    <AlertDescription className="flex justify-between items-center">
                      <span>{alert.message}</span>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </AlertDescription>
                  </Alert>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weather Tab */}
          <TabsContent value="weather" className="space-y-6">
            <WeatherDashboard />
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card className="border-[var(--saffron)]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--saffron)]" />
                  Nearby Recommendations
                </CardTitle>
                <CardDescription>
                  Personalized suggestions based on your location and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {nearbyRecommendations.map((place, idx) => (
                    <div key={idx} className="p-4 border border-border rounded-lg hover:border-[var(--saffron)] transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-[var(--foreground)]">{place.name}</h3>
                        <Badge variant="outline" className={`text-xs ${
                          place.crowdLevel === 'High' ? 'border-red-500 text-red-500' :
                          place.crowdLevel === 'Moderate' ? 'border-yellow-500 text-yellow-500' :
                          'border-green-500 text-green-500'
                        }`}>
                          {place.crowdLevel}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{place.distance}</span>
                        <span>★ {place.rating}</span>
                        <span>{place.category}</span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Navigation className="w-3 h-3 mr-1" />
                          Navigate
                        </Button>
                        <Button size="sm" variant="outline">
                          <Camera className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card className="border-[var(--gold)]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[var(--gold)]" />
                  Live Events & Bookings
                </CardTitle>
                <CardDescription>
                  Discover and book events happening around you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-[var(--gold)] transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[var(--foreground)]">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">{event.venue} • {event.time}</p>
                        <p className="text-sm font-medium text-[var(--gold)]">{event.price}</p>
                      </div>
                      <Button size="sm" className="bg-[var(--gold)] hover:bg-[var(--gold)]/80 text-white">
                        <Ticket className="w-3 h-3 mr-1" />
                        Book
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assistance Tab */}
          <TabsContent value="assistance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-[var(--maroon)]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[var(--maroon)]" />
                    Emergency & Language Assistance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-red-600 hover:bg-red-700 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Helpline: 112
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-[var(--maroon)] text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with Local Guide
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Language Translator
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Quick Phrases</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Hello</span>
                        <span className="text-[var(--saffron)]">Namaste</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thank you</span>
                        <span className="text-[var(--saffron)]">Dhanyawad</span>
                      </div>
                      <div className="flex justify-between">
                        <span>How much?</span>
                        <span className="text-[var(--saffron)]">Kitna paisa?</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[var(--peacock-blue)]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Accessibility className="w-5 h-5 text-[var(--peacock-blue)]" />
                    Accessibility Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Wheelchair accessible routes',
                      'Audio guides available',
                      'Sign language interpreters',
                      'Large print materials',
                      'Hearing loop facilities'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 border border-border rounded">
                        <div className="w-2 h-2 bg-[var(--peacock-blue)] rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full border-[var(--peacock-blue)] text-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)] hover:text-white">
                    Request Accessibility Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}