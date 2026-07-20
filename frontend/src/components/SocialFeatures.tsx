import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Star,
  Heart,
  MessageCircle,
  Share2,
  Camera,
  Upload,
  Download,
  CheckCircle,
  Plane,
  ShoppingBag,
  MapPin,
  Clock,
  User,
  ThumbsUp,
  Image as ImageIcon
} from 'lucide-react';

export default function SocialFeatures() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState<any[]>([]);

  const recentReviews = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face',
      location: 'Taj Mahal, Agra',
      rating: 5,
      text: 'Absolutely breathtaking! The early morning visit was magical with fewer crowds.',
      date: '2 hours ago',
      likes: 23,
      helpful: 15
    },
    {
      id: 2,
      user: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      location: 'Kerala Backwaters',
      rating: 5,
      text: 'The houseboat experience exceeded expectations. Perfect for relaxation and nature lovers.',
      date: '5 hours ago',
      likes: 18,
      helpful: 12
    },
    {
      id: 3,
      user: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      location: 'Jaipur City Palace',
      rating: 4,
      text: 'Rich history and stunning architecture. The audio guide was very informative.',
      date: '1 day ago',
      likes: 31,
      helpful: 22
    }
  ];

  const memoryAlbums = [
    {
      id: 1,
      title: 'Golden Triangle Adventure',
      photos: 45,
      created: '3 days ago',
      cover: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop',
      shared: true
    },
    {
      id: 2,
      title: 'Kerala Nature Escape',
      photos: 28,
      created: '1 week ago',
      cover: 'https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?w=300&h=200&fit=crop',
      shared: false
    },
    {
      id: 3,
      title: 'Rajasthan Royal Journey',
      photos: 62,
      created: '2 weeks ago',
      cover: 'https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?w=300&h=200&fit=crop',
      shared: true
    }
  ];

  const [departureChecklist, setDepartureChecklist] = useState([
    { id: 'souvenirs', text: 'Purchase souvenirs and gifts', category: 'shopping', completed: false },
    { id: 'photos', text: 'Backup photos and memories', category: 'memories', completed: true },
    { id: 'feedback', text: 'Leave reviews for visited places', category: 'social', completed: false },
    { id: 'transport', text: 'Book airport transfer', category: 'transport', completed: true },
    { id: 'checkin', text: 'Online flight check-in', category: 'travel', completed: false },
    { id: 'currency', text: 'Exchange remaining INR', category: 'finance', completed: false },
    { id: 'medications', text: 'Pack prescription medicines', category: 'health', completed: true },
    { id: 'customs', text: 'Check customs regulations', category: 'legal', completed: false }
  ]);

  const souvenirSuggestions = [
    {
      name: 'Handwoven Pashmina Shawls',
      shop: 'Kashmir Craft Center',
      price: '₹2,500 - ₹8,000',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=200&h=150&fit=crop'
    },
    {
      name: 'Blue Pottery Items',
      shop: 'Jaipur Handicrafts',
      price: '₹500 - ₹3,000',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=200&h=150&fit=crop'
    },
    {
      name: 'Darjeeling Tea Collection',
      shop: 'Tea Heritage Store',
      price: '₹800 - ₹2,200',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=150&fit=crop'
    }
  ];

  const renderStarRating = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'fill-[var(--gold)] text-[var(--gold)]' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-[var(--gold)]' : ''}`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-white to-[var(--muted)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[var(--maroon)]/10 text-[var(--maroon)] hover:bg-[var(--maroon)]/20">
            Social & Community
          </Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-[var(--foreground)]">
            Share Your <span className="text-[var(--saffron)]">Journey</span> & Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Document memories, share experiences, and help fellow travelers discover the magic of India 
            through your authentic reviews and photos.
          </p>
        </div>

        <Tabs defaultValue="reviews" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white border border-border">
            <TabsTrigger value="reviews" className="data-[state=active]:bg-[var(--maroon)] data-[state=active]:text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Reviews
            </TabsTrigger>
            <TabsTrigger value="memories" className="data-[state=active]:bg-[var(--maroon)] data-[state=active]:text-white">
              <Camera className="w-4 h-4 mr-2" />
              Memories
            </TabsTrigger>
            <TabsTrigger value="feedback" className="data-[state=active]:bg-[var(--maroon)] data-[state=active]:text-white">
              <Star className="w-4 h-4 mr-2" />
              Feedback
            </TabsTrigger>
            <TabsTrigger value="departure" className="data-[state=active]:bg-[var(--maroon)] data-[state=active]:text-white">
              <Plane className="w-4 h-4 mr-2" />
              Departure
            </TabsTrigger>
          </TabsList>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Reviews */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Recent Traveler Reviews</h3>
                {[...submittedReviews, ...recentReviews].map((review) => (
                  <Card key={review.id} className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <ImageWithFallback
                          src={review.avatar}
                          alt={review.user}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">{review.user}</h4>
                              <p className="text-sm text-[var(--saffron)]">{review.location}</p>
                            </div>
                            <div className="text-right">
                              {renderStarRating(review.rating)}
                              <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.text}</p>
                          <div className="flex items-center gap-4 pt-2">
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-[var(--maroon)]">
                              <ThumbsUp className="w-4 h-4" />
                              {review.likes}
                            </button>
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-[var(--maroon)]">
                              <MessageCircle className="w-4 h-4" />
                              Reply
                            </button>
                            <span className="text-sm text-muted-foreground">
                              {review.helpful} found this helpful
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Review Form */}
              <Card className="border-[var(--saffron)]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[var(--saffron)]" />
                    Share Your Experience
                  </CardTitle>
                  <CardDescription>
                    Help fellow travelers with your insights
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Rate your experience</label>
                    <div className="mt-1">
                      {renderStarRating(selectedRating, true, setSelectedRating)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location/Attraction</label>
                    <Input
                      placeholder="e.g., Taj Mahal, Agra"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Write a review</label>
                    <Textarea
                      placeholder="Share what made your experience special..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Camera className="w-4 h-4 mr-1" />
                      Add Photos
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
                      disabled={!selectedRating || !reviewText.trim() || !selectedLocation.trim() || isSubmittingReview}
                      onClick={async () => {
                        setIsSubmittingReview(true);
                        
                        // Simulate API call
                        setTimeout(() => {
                          const newReview = {
                            id: Date.now(),
                            user: 'You',
                            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
                            location: selectedLocation,
                            rating: selectedRating,
                            text: reviewText,
                            date: 'Just now',
                            likes: 0,
                            helpful: 0
                          };
                          
                          setSubmittedReviews(prev => [newReview, ...prev]);
                          setSelectedRating(0);
                          setReviewText('');
                          setSelectedLocation('');
                          setIsSubmittingReview(false);
                        }, 1500);
                      }}
                    >
                      {isSubmittingReview ? 'Posting...' : 'Post Review'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Memory Albums Tab */}
          <TabsContent value="memories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Your Memory Albums</h3>
              <Button className="bg-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)]/80 text-white">
                <Camera className="w-4 h-4 mr-2" />
                Create New Album
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memoryAlbums.map((album) => (
                <Card key={album.id} className="overflow-hidden border-border/50 hover:border-[var(--peacock-blue)] transition-colors cursor-pointer">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-black/60 text-white border-none">
                        {album.photos} photos
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{album.title}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Created {album.created}</span>
                      <div className="flex items-center gap-2">
                        {album.shared && (
                          <Badge variant="outline" className="text-xs border-[var(--peacock-blue)] text-[var(--peacock-blue)]">
                            Shared
                          </Badge>
                        )}
                        <Button variant="ghost" size="sm" className="p-1 h-auto">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Upload className="w-3 h-3 mr-1" />
                        Add Photos
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <Card className="border-[var(--gold)]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[var(--gold)]" />
                  Platform Feedback
                </CardTitle>
                <CardDescription>
                  Help us improve your travel experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Overall Platform Experience</label>
                      <div className="mt-1">
                        {renderStarRating(4, true)}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Feature Usefulness</label>
                      <div className="space-y-2 mt-2">
                        {[
                          { feature: 'Itinerary Planning', rating: 5 },
                          { feature: 'Real-time Alerts', rating: 4 },
                          { feature: 'Local Recommendations', rating: 5 },
                          { feature: 'Language Assistance', rating: 3 }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-sm">{item.feature}</span>
                            {renderStarRating(item.rating)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Suggestions for Improvement</label>
                      <Textarea
                        placeholder="What features would you like to see added or improved?"
                        className="mt-1"
                        rows={6}
                      />
                    </div>
                    <Button className="w-full bg-[var(--gold)] hover:bg-[var(--gold)]/80 text-white">
                      Submit Feedback
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Departure Checklist Tab */}
          <TabsContent value="departure" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Departure Checklist */}
              <Card className="border-[var(--maroon)]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--maroon)]" />
                    Departure Checklist
                  </CardTitle>
                  <CardDescription>
                    Complete these tasks before leaving India
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {departureChecklist.map((item) => (
                    <div 
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                        item.completed 
                          ? 'bg-green-50/50 border-green-200' 
                          : 'border-border hover:border-[var(--maroon)]/50'
                      }`}
                      onClick={() => {
                        setDepartureChecklist(prev => 
                          prev.map(checklistItem => 
                            checklistItem.id === item.id 
                              ? { ...checklistItem, completed: !checklistItem.completed }
                              : checklistItem
                          )
                        );
                      }}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        item.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-border'
                      }`}>
                        {item.completed && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className={item.completed ? 'line-through text-muted-foreground' : ''}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Souvenir Suggestions */}
              <Card className="border-[var(--gold)]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[var(--gold)]" />
                    Last-Minute Souvenir Ideas
                  </CardTitle>
                  <CardDescription>
                    Perfect gifts to take home from India
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {souvenirSuggestions.map((item, idx) => (
                    <div key={idx} className="flex gap-3 p-3 border border-border rounded-lg hover:border-[var(--gold)] transition-colors">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.shop}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-[var(--gold)] font-medium">{item.price}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[var(--gold)] text-[var(--gold)]" />
                            <span className="text-xs">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Nearby Shops
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Transport Suggestions */}
            <Card className="border-[var(--peacock-blue)]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[var(--peacock-blue)]" />
                  Departure Transport Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { type: 'Airport Express', time: '45 mins', price: '₹150', recommended: true },
                    { type: 'Pre-paid Taxi', time: '60 mins', price: '₹800', recommended: false },
                    { type: 'App Cab (Uber/Ola)', time: '50 mins', price: '₹600', recommended: true }
                  ].map((option, idx) => (
                    <div key={idx} className={`p-4 border rounded-lg ${
                      option.recommended 
                        ? 'border-[var(--peacock-blue)] bg-[var(--peacock-blue)]/5' 
                        : 'border-border'
                    }`}>
                      {option.recommended && (
                        <Badge className="mb-2 bg-[var(--peacock-blue)] text-white">
                          Recommended
                        </Badge>
                      )}
                      <h4 className="font-medium">{option.type}</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {option.time}
                        </div>
                        <div className="text-[var(--peacock-blue)] font-medium">{option.price}</div>
                      </div>
                      <Button 
                        size="sm" 
                        variant={option.recommended ? "default" : "outline"}
                        className={`w-full mt-2 ${
                          option.recommended 
                            ? 'bg-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)]/80 text-white'
                            : ''
                        }`}
                      >
                        Book Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}