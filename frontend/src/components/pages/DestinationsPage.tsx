import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MapPin, Calendar, Star, Thermometer, Users } from 'lucide-react';

export default function DestinationsPage() {
  const destinations = [
    {
      id: 1,
      name: 'Taj Mahal, Agra',
      region: 'North India',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc1OTA1OTA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'October - March',
      description: 'One of the Seven Wonders of the World, an iconic symbol of love and Mughal architecture',
      highlights: ['UNESCO World Heritage', 'Mughal Architecture', 'Sunrise Views'],
      rating: 4.9,
      visitors: '7-8 million/year'
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      region: 'South India',
      image: 'https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzU4OTkxNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'September - March',
      description: 'Serene network of lagoons and lakes, perfect for houseboat experiences and ayurvedic retreats',
      highlights: ['Houseboat Stays', 'Ayurveda Spas', 'Traditional Cuisine'],
      rating: 4.8,
      visitors: '2-3 million/year'
    },
    {
      id: 3,
      name: 'Rajasthan Palaces',
      region: 'North India',
      image: 'https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NTkwNTkwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'November - February',
      description: 'Royal heritage with majestic forts, palaces, and vibrant cultural traditions',
      highlights: ['Royal Heritage', 'Desert Safari', 'Folk Performances'],
      rating: 4.7,
      visitors: '5-6 million/year'
    },
    {
      id: 4,
      name: 'Goa Beaches',
      region: 'West India',
      image: 'https://images.unsplash.com/photo-1668262120979-a1af71765107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc1OTU5Mjg0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'November - February',
      description: 'Sun, sand, and sea with Portuguese heritage, vibrant nightlife, and water sports',
      highlights: ['Beach Activities', 'Water Sports', 'Nightlife'],
      rating: 4.6,
      visitors: '8-9 million/year'
    },
    {
      id: 5,
      name: 'Himalayas',
      region: 'North India',
      image: 'https://images.unsplash.com/photo-1631377954462-3e5477c674d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YXMlMjBtb3VudGFpbnMlMjBpbmRpYXxlbnwxfHx8fDE3NTk2NDE4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'March - June',
      description: 'Majestic mountain ranges perfect for trekking, adventure sports, and spiritual retreats',
      highlights: ['Trekking', 'Mountain Views', 'Buddhist Monasteries'],
      rating: 4.9,
      visitors: '3-4 million/year'
    },
    {
      id: 6,
      name: 'Varanasi',
      region: 'North India',
      image: 'https://images.unsplash.com/photo-1661771402987-9dc9db2cbb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGluZGlhJTIwdGVtcGxlfGVufDF8fHx8MTc1OTY0MTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'October - March',
      description: 'Ancient spiritual city on the Ganges, one of the oldest inhabited cities in the world',
      highlights: ['Ganga Aarti', 'Spiritual Experience', 'Ancient Temples'],
      rating: 4.7,
      visitors: '4-5 million/year'
    },
    {
      id: 7,
      name: 'Mumbai',
      region: 'West India',
      image: 'https://images.unsplash.com/photo-1598434192043-71111c1b3f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBjaXR5JTIwaW5kaWF8ZW58MXx8fHwxNzU5NjQxODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'November - February',
      description: 'The City of Dreams, India\'s financial capital with colonial architecture and Bollywood',
      highlights: ['Gateway of India', 'Marine Drive', 'Bollywood Tours'],
      rating: 4.5,
      visitors: '10+ million/year'
    },
    {
      id: 8,
      name: 'Kolkata',
      region: 'East India',
      image: 'https://images.unsplash.com/photo-1561047692-74d9802df671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2xrYXRhJTIwaW5kaWElMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTk2NDE4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'October - March',
      description: 'The City of Joy with rich cultural heritage, colonial architecture, and literary traditions',
      highlights: ['Victoria Memorial', 'Howrah Bridge', 'Cultural Festivals'],
      rating: 4.6,
      visitors: '6-7 million/year'
    },
    {
      id: 9,
      name: 'Golden Triangle',
      region: 'North India',
      image: 'https://images.unsplash.com/photo-1524473994769-c1bbbf30e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1vbnVtZW50c3xlbnwxfHx8fDE3NTk2NDE4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bestSeason: 'October - March',
      description: 'Classic circuit covering Delhi, Agra, and Jaipur - the perfect introduction to India',
      highlights: ['Historical Monuments', 'Cultural Heritage', 'Royal Architecture'],
      rating: 4.8,
      visitors: '15+ million/year'
    }
  ];

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-white to-[var(--muted)]/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[var(--saffron)]/10 text-[var(--saffron)] hover:bg-[var(--saffron)]/20">
            Explore India
          </Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-[var(--foreground)]">
            Discover <span className="text-[var(--saffron)]">Amazing</span> Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From ancient temples to pristine beaches, from majestic mountains to vibrant cities - 
            explore India's diverse destinations and find your perfect journey.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden border-border/50 hover:border-[var(--saffron)] transition-all duration-300 hover:shadow-xl cursor-pointer group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-[var(--foreground)]">
                    {destination.region}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Star className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                    <span>{destination.rating}</span>
                    <span className="text-white/60">•</span>
                    <Users className="w-4 h-4" />
                    <span className="text-xs">{destination.visitors}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm">
                  {destination.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-[var(--peacock-blue)]" />
                  <span className="font-medium text-[var(--peacock-blue)]">Best Season:</span>
                  <span className="text-muted-foreground">{destination.bestSeason}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-[var(--saffron)]/30 text-[var(--saffron)] bg-[var(--saffron)]/5"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weather Tip */}
        <div className="mt-16 bg-gradient-to-r from-[var(--peacock-blue)]/10 to-[var(--saffron)]/10 rounded-2xl p-8 border border-[var(--peacock-blue)]/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[var(--peacock-blue)] rounded-full flex items-center justify-center flex-shrink-0">
              <Thermometer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl mb-2">Planning Your Visit?</h3>
              <p className="text-muted-foreground mb-4">
                India's climate varies greatly by region and season. The best time to visit most destinations is during the cooler months (October to March). 
                However, summer (March to June) is ideal for hill stations and the Himalayas, while monsoon (June to September) brings lush greenery to the south.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-[var(--peacock-blue)]">Pro Tip:</span> Check our Dashboard page for real-time weather updates for all major cities and plan your itinerary accordingly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
