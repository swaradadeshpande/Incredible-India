import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Plane, 
  Hotel, 
  Car, 
  MapPin, 
  Calendar, 
  Users, 
  Star,
  Filter,
  Search,
  Clock,
  Wifi,
  Coffee,
  Parking
} from 'lucide-react';

interface BookingItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  features: string[];
  description: string;
}

export default function BookingFlow() {
  const [activeTab, setActiveTab] = useState('flights');
  const [searchResults, setSearchResults] = useState<BookingItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: '',
    rating: '',
    amenities: [] as string[]
  });

  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1'
  });

  const mockFlights: BookingItem[] = [
    {
      id: 'f1',
      name: 'Air India Express - Non-stop',
      price: '₹12,500',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop',
      features: ['2h 15m', 'Non-stop', 'Meal included'],
      description: 'Delhi to Mumbai direct flight'
    },
    {
      id: 'f2',
      name: 'IndiGo - Economy',
      price: '₹8,900',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop',
      features: ['2h 30m', 'Non-stop', 'Baggage 15kg'],
      description: 'Delhi to Mumbai affordable option'
    }
  ];

  const mockHotels: BookingItem[] = [
    {
      id: 'h1',
      name: 'The Taj Mahal Palace',
      price: '₹25,000/night',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop',
      features: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'],
      description: 'Luxury heritage hotel in Mumbai'
    },
    {
      id: 'h2',
      name: 'Hotel Rajputana Palace',
      price: '₹8,500/night',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop',
      features: ['Free WiFi', 'Restaurant', 'Parking'],
      description: 'Heritage hotel in the heart of Jaipur'
    }
  ];

  const mockTransport: BookingItem[] = [
    {
      id: 't1',
      name: 'Private AC Car with Driver',
      price: '₹3,500/day',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop',
      features: ['AC Vehicle', 'English speaking driver', 'Fuel included'],
      description: 'Comfortable private transport for sightseeing'
    },
    {
      id: 't2',
      name: 'Tempo Traveller (12-seater)',
      price: '₹5,500/day',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop',
      features: ['Group travel', 'AC Vehicle', 'Luggage space'],
      description: 'Perfect for group travel and family trips'
    }
  ];

  const handleSearch = () => {
    setIsSearching(true);
    
    setTimeout(() => {
      if (activeTab === 'flights') {
        setSearchResults(mockFlights);
      } else if (activeTab === 'hotels') {
        setSearchResults(mockHotels);
      } else {
        setSearchResults(mockTransport);
      }
      setIsSearching(false);
    }, 1500);
  };

  const renderSearchForm = () => {
    if (activeTab === 'flights') {
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>From</Label>
            <Input 
              placeholder="Delhi (DEL)"
              value={searchForm.from}
              onChange={(e) => setSearchForm(prev => ({ ...prev, from: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>To</Label>
            <Input 
              placeholder="Mumbai (BOM)"
              value={searchForm.to}
              onChange={(e) => setSearchForm(prev => ({ ...prev, to: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Departure</Label>
            <Input 
              type="date"
              value={searchForm.checkIn}
              onChange={(e) => setSearchForm(prev => ({ ...prev, checkIn: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Passengers</Label>
            <Input 
              type="number"
              min="1"
              value={searchForm.guests}
              onChange={(e) => setSearchForm(prev => ({ ...prev, guests: e.target.value }))}
            />
          </div>
        </div>
      );
    } else if (activeTab === 'hotels') {
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>City/Location</Label>
            <Input 
              placeholder="Mumbai, Maharashtra"
              value={searchForm.to}
              onChange={(e) => setSearchForm(prev => ({ ...prev, to: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Check-in</Label>
            <Input 
              type="date"
              value={searchForm.checkIn}
              onChange={(e) => setSearchForm(prev => ({ ...prev, checkIn: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Check-out</Label>
            <Input 
              type="date"
              value={searchForm.checkOut}
              onChange={(e) => setSearchForm(prev => ({ ...prev, checkOut: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Rooms & Guests</Label>
            <Input 
              placeholder="1 room, 2 guests"
              value={`${searchForm.rooms} room, ${searchForm.guests} guests`}
              readOnly
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Pickup Location</Label>
            <Input 
              placeholder="Delhi Airport"
              value={searchForm.from}
              onChange={(e) => setSearchForm(prev => ({ ...prev, from: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Drop Location</Label>
            <Input 
              placeholder="Hotel/Destination"
              value={searchForm.to}
              onChange={(e) => setSearchForm(prev => ({ ...prev, to: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Travel Date</Label>
            <Input 
              type="date"
              value={searchForm.checkIn}
              onChange={(e) => setSearchForm(prev => ({ ...prev, checkIn: e.target.value }))}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 bg-white border border-border">
          <TabsTrigger value="flights" className="flex items-center gap-2 data-[state=active]:bg-[var(--saffron)] data-[state=active]:text-white">
            <Plane className="w-4 h-4" />
            Flights
          </TabsTrigger>
          <TabsTrigger value="hotels" className="flex items-center gap-2 data-[state=active]:bg-[var(--saffron)] data-[state=active]:text-white">
            <Hotel className="w-4 h-4" />
            Hotels
          </TabsTrigger>
          <TabsTrigger value="transport" className="flex items-center gap-2 data-[state=active]:bg-[var(--saffron)] data-[state=active]:text-white">
            <Car className="w-4 h-4" />
            Transport
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-6">
          {/* Search Form */}
          <Card className="border-[var(--saffron)]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {activeTab === 'flights' && <Plane className="w-5 h-5 text-[var(--saffron)]" />}
                {activeTab === 'hotels' && <Hotel className="w-5 h-5 text-[var(--saffron)]" />}
                {activeTab === 'transport' && <Car className="w-5 h-5 text-[var(--saffron)]" />}
                Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {renderSearchForm()}
              
              <div className="flex gap-3">
                <Button 
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
                >
                  {isSearching ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </>
                  )}
                </Button>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <Card className="border-[var(--peacock-blue)]/20">
              <CardHeader>
                <CardTitle>Search Results</CardTitle>
                <CardDescription>
                  {searchResults.length} options found for your search
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {searchResults.map((item) => (
                    <Card key={item.id} className="border-border/50 hover:border-[var(--saffron)] transition-colors">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-[var(--foreground)]">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold text-[var(--saffron)]">{item.price}</div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                                  <span className="text-sm">{item.rating}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {item.features.map((feature, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex gap-2 pt-2">
                              <Button 
                                size="sm" 
                                className="bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
                              >
                                Book Now
                              </Button>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="outline" size="sm">
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}