import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { 
  MapPin,
  Cloud,
  Sun,
  Droplets,
  Wind,
  Eye,
  Thermometer,
  Star,
  Navigation,
  Camera,
  Calendar,
  PartyPopper,
  Phone,
  MessageCircle,
  Info,
  UtensilsCrossed,
  Coffee,
  LifeBuoy
} from 'lucide-react';

export default function PostArrivalPage() {
  const [selectedLocation, setSelectedLocation] = useState('New Delhi');

  const locations = [
    { value: 'New Delhi', label: 'New Delhi' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Jaipur', label: 'Jaipur' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Agra', label: 'Agra' },
    { value: 'Udaipur', label: 'Udaipur' },
    { value: 'Varanasi', label: 'Varanasi' },
    { value: 'Amritsar', label: 'Amritsar' }
  ];

  // Mock weather data
  const weatherData = {
    temperature: 28,
    condition: 'Partly Cloudy',
    feelsLike: 32,
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    pressure: 1013,
    uvIndex: 6
  };

  // Mock nearby attractions
  const nearbyAttractions = [
    { 
      name: 'Red Fort', 
      distance: '2.3 km', 
      rating: 4.5, 
      type: 'Historical Monument',
      openHours: '9:30 AM - 4:30 PM',
      crowdLevel: 'Moderate'
    },
    { 
      name: 'India Gate', 
      distance: '3.1 km', 
      rating: 4.6, 
      type: 'War Memorial',
      openHours: 'Open 24/7',
      crowdLevel: 'High'
    },
    { 
      name: 'Lotus Temple', 
      distance: '12 km', 
      rating: 4.7, 
      type: 'Spiritual',
      openHours: '9:00 AM - 6:00 PM',
      crowdLevel: 'Low'
    },
    { 
      name: 'Humayun\'s Tomb', 
      distance: '8.5 km', 
      rating: 4.4, 
      type: 'Historical',
      openHours: 'Sunrise to Sunset',
      crowdLevel: 'Low'
    },
    { 
      name: 'Qutub Minar', 
      distance: '15 km', 
      rating: 4.5, 
      type: 'UNESCO Heritage',
      openHours: '7:00 AM - 5:00 PM',
      crowdLevel: 'Moderate'
    },
    { 
      name: 'Akshardham', 
      distance: '10 km', 
      rating: 4.8, 
      type: 'Temple Complex',
      openHours: '9:30 AM - 6:30 PM',
      crowdLevel: 'High'
    }
  ];

  // Mock festivals and events
  const festivalsAndEvents = [
    {
      name: 'Diwali Festival Celebration',
      date: 'Nov 1, 2025',
      venue: 'Connaught Place',
      type: 'Cultural Festival',
      price: 'Free Entry'
    },
    {
      name: 'Classical Music Concert',
      date: 'Tonight 7:00 PM',
      venue: 'Kamani Auditorium',
      type: 'Music',
      price: '₹500'
    },
    {
      name: 'Street Food Festival',
      date: 'Oct 10-12, 2025',
      venue: 'Nehru Park',
      type: 'Food & Culture',
      price: '₹200'
    },
    {
      name: 'Durga Puja',
      date: 'Oct 8-12, 2025',
      venue: 'CR Park',
      type: 'Religious Festival',
      price: 'Free Entry'
    },
    {
      name: 'Art Exhibition',
      date: 'This Weekend',
      venue: 'National Gallery',
      type: 'Art & Culture',
      price: '₹150'
    }
  ];

  // Mock restaurants and street food
  const foodPlaces = [
    {
      name: 'Karim\'s',
      type: 'Restaurant',
      cuisine: 'Mughlai',
      distance: '1.2 km',
      rating: 4.4,
      priceRange: '₹₹',
      specialty: 'Mutton Korma, Kebabs'
    },
    {
      name: 'Paranthe Wali Gali',
      type: 'Street Food',
      cuisine: 'North Indian',
      distance: '1.5 km',
      rating: 4.3,
      priceRange: '₹',
      specialty: 'Parathas, Chaat'
    },
    {
      name: 'Indian Accent',
      type: 'Fine Dining',
      cuisine: 'Contemporary Indian',
      distance: '5.2 km',
      rating: 4.7,
      priceRange: '₹₹₹₹',
      specialty: 'Modern Indian Cuisine'
    },
    {
      name: 'Kuremal Kulfi Wale',
      type: 'Street Food',
      cuisine: 'Desserts',
      distance: '2.0 km',
      rating: 4.5,
      priceRange: '₹',
      specialty: 'Stuffed Kulfi'
    },
    {
      name: 'Bukhara',
      type: 'Restaurant',
      cuisine: 'North-West Frontier',
      distance: '8.0 km',
      rating: 4.6,
      priceRange: '₹₹₹₹',
      specialty: 'Dal Bukhara, Tandoori'
    },
    {
      name: 'Jama Masjid Food Street',
      type: 'Street Food Area',
      cuisine: 'Varied',
      distance: '1.8 km',
      rating: 4.4,
      priceRange: '₹',
      specialty: 'Kebabs, Nihari, Biryani'
    }
  ];

  const getCrowdLevelColor = (level: string) => {
    switch (level) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-white to-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#ff6b35]/10 text-[#ff6b35] hover:bg-[#ff6b35]/20">
            Post-Arrival Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
            Welcome to <span className="text-[#ff6b35]">India!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get real-time recommendations, weather updates, and local insights to make your Indian experience seamless.
          </p>
        </div>

        {/* Location Selector */}
        <Card className="mb-8 border-[#ff6b35]/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Current Location</h3>
                  <p className="text-sm text-muted-foreground">Select your city for personalized recommendations</p>
                </div>
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border-2 border-[#ff6b35] text-[#ff6b35] rounded-lg bg-background hover:bg-[#ff6b35] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/50"
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="weather" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white border border-border">
            <TabsTrigger value="weather" className="flex items-center gap-2 data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white">
              <Cloud className="w-4 h-4" />
              Weather
            </TabsTrigger>
            <TabsTrigger value="attractions" className="flex items-center gap-2 data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white">
              <Camera className="w-4 h-4" />
              Attractions
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2 data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white">
              <PartyPopper className="w-4 h-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="food" className="flex items-center gap-2 data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white">
              <UtensilsCrossed className="w-4 h-4" />
              Food
            </TabsTrigger>
            <TabsTrigger value="help" className="flex items-center gap-2 data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white">
              <LifeBuoy className="w-4 h-4" />
              Help
            </TabsTrigger>
          </TabsList>

          {/* Weather Tab */}
          <TabsContent value="weather" className="space-y-6">
            <Card className="border-[#1e7a8c]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-[#1e7a8c]" />
                  Current Weather in {selectedLocation}
                </CardTitle>
                <CardDescription>Real-time weather conditions and forecast</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Main Weather */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      <Sun className="w-16 h-16 text-yellow-500" />
                      <div>
                        <div className="text-5xl text-[#1e7a8c]">{weatherData.temperature}°C</div>
                        <div className="text-lg text-muted-foreground">{weatherData.condition}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Feels like {weatherData.feelsLike}°C</p>
                  </div>

                  {/* Weather Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="text-sm text-muted-foreground">Humidity</div>
                        <div className="font-semibold">{weatherData.humidity}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-muted-foreground">Wind</div>
                        <div className="font-semibold">{weatherData.windSpeed} km/h</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-indigo-500" />
                      <div>
                        <div className="text-sm text-muted-foreground">Visibility</div>
                        <div className="font-semibold">{weatherData.visibility} km</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-red-500" />
                      <div>
                        <div className="text-sm text-muted-foreground">Pressure</div>
                        <div className="font-semibold">{weatherData.pressure} mb</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attractions Tab */}
          <TabsContent value="attractions" className="space-y-6">
            <Card className="border-[#d4af37]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-[#d4af37]" />
                  Nearby Attractions
                </CardTitle>
                <CardDescription>Popular places to visit near you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {nearbyAttractions.map((attraction, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 border border-border rounded-lg hover:border-[#d4af37] transition-colors cursor-pointer hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-foreground">{attraction.name}</h4>
                        <Badge className={`text-xs ${getCrowdLevelColor(attraction.crowdLevel)}`}>
                          {attraction.crowdLevel}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground mb-3">
                        <p className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {attraction.distance}
                        </p>
                        <p className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" /> {attraction.rating} • {attraction.type}
                        </p>
                        <p className="text-xs">⏰ {attraction.openHours}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white">
                          <Navigation className="w-3 h-3 mr-1" />
                          Navigate
                        </Button>
                        <Button size="sm" variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white">
                          <Info className="w-3 h-3" />
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
            <Card className="border-[#8b2635]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PartyPopper className="w-5 h-5 text-[#8b2635]" />
                  Festivals & Events
                </CardTitle>
                <CardDescription>Upcoming celebrations and cultural events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {festivalsAndEvents.map((event, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg hover:border-[#8b2635] transition-colors"
                    >
                      <div className="flex-1 mb-3 sm:mb-0">
                        <h4 className="font-semibold text-foreground mb-1">{event.name}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {event.venue}
                          </span>
                          <Badge variant="outline" className="text-xs">{event.type}</Badge>
                        </div>
                        <p className="text-sm font-medium text-[#8b2635] mt-1">{event.price}</p>
                      </div>
                      <Button size="sm" className="bg-[#8b2635] hover:bg-[#8b2635]/80 text-white">
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Food Tab */}
          <TabsContent value="food" className="space-y-6">
            <Card className="border-[#cd7f32]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-[#cd7f32]" />
                  Restaurants & Street Food
                </CardTitle>
                <CardDescription>Discover local culinary delights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {foodPlaces.map((place, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 border border-border rounded-lg hover:border-[#cd7f32] transition-colors cursor-pointer hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          {place.type === 'Street Food' || place.type === 'Street Food Area' ? (
                            <Coffee className="w-5 h-5 text-[#cd7f32]" />
                          ) : (
                            <UtensilsCrossed className="w-5 h-5 text-[#cd7f32]" />
                          )}
                          <h4 className="font-semibold text-foreground">{place.name}</h4>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {place.type}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground mb-3">
                        <p className="flex items-center justify-between">
                          <span>{place.cuisine}</span>
                          <span className="text-[#cd7f32]">{place.priceRange}</span>
                        </p>
                        <p className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {place.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[#cd7f32] text-[#cd7f32]" /> {place.rating}
                          </span>
                        </p>
                        <p className="text-xs font-medium text-foreground">
                          Must Try: {place.specialty}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="w-full border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                        <Navigation className="w-3 h-3 mr-1" />
                        Get Directions
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Help Tab */}
          <TabsContent value="help" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-600/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <Phone className="w-5 h-5" />
                    Emergency Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency: 112
                  </Button>
                  <div className="space-y-2 pt-3">
                    <div className="flex justify-between text-sm">
                      <span>Police</span>
                      <span className="font-medium">100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Fire</span>
                      <span className="font-medium">101</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Ambulance</span>
                      <span className="font-medium">102</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tourist Helpline</span>
                      <span className="font-medium">1363</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1e7a8c]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#1e7a8c]">
                    <MessageCircle className="w-5 h-5" />
                    Support Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-[#1e7a8c] text-[#1e7a8c] hover:bg-[#1e7a8c] hover:text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Local Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Language Translator
                  </Button>
                  <div className="pt-3">
                    <h4 className="font-medium mb-2">Quick Phrases</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Hello</span>
                        <span className="text-[#ff6b35] font-medium">Namaste</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thank you</span>
                        <span className="text-[#ff6b35] font-medium">Dhanyawad</span>
                      </div>
                      <div className="flex justify-between">
                        <span>How much?</span>
                        <span className="text-[#ff6b35] font-medium">Kitna paisa?</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
