import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Progress } from './ui/progress';
import { MapPin, Calendar, Sparkles, Plus, Trash2, X, Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ItineraryDay {
  id: string;
  day: number;
  location: string;
  activities: string[];
}

export default function ItineraryBuilder() {
  // Step 1: Basic preferences
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    travelStyle: '',
    budget: '',
    groupSize: '',
    startDate: ''
  });
  
  // Step 2: Suggested places
  const [suggestedPlaces, setSuggestedPlaces] = useState<string[]>([]);
  
  // Step 3: Selected places (1-4 places required)
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>(['']);
  
  // Step 4: Duration
  const [duration, setDuration] = useState('');
  
  // Generated itinerary
  const [generatedItinerary, setGeneratedItinerary] = useState<ItineraryDay[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isExportingPDF, setIsExportingPDF] = useState(false);

  // Available destinations based on preferences
  const getDestinationsForPreferences = () => {
    const allDestinations = [
      'Delhi', 'Agra', 'Jaipur', 'Mumbai', 'Goa', 
      'Kerala', 'Varanasi', 'Udaipur', 'Rishikesh', 'Manali',
      'Bangalore', 'Mysore', 'Hampi', 'Khajuraho', 'Ajanta Caves',
      'Darjeeling', 'Shimla', 'Amritsar', 'Kolkata', 'Chennai'
    ];
    
    // Filter based on travel style
    if (formData.travelStyle === 'cultural') {
      return ['Delhi', 'Agra', 'Jaipur', 'Varanasi', 'Khajuraho', 'Ajanta Caves', 'Hampi', 'Mysore'];
    } else if (formData.travelStyle === 'adventure') {
      return ['Rishikesh', 'Manali', 'Goa', 'Darjeeling', 'Shimla', 'Kerala'];
    } else if (formData.travelStyle === 'spiritual') {
      return ['Varanasi', 'Rishikesh', 'Amritsar', 'Haridwar', 'Bodh Gaya'];
    } else if (formData.travelStyle === 'beach') {
      return ['Goa', 'Kerala', 'Andaman', 'Gokarna', 'Pondicherry'];
    } else if (formData.travelStyle === 'luxury') {
      return ['Udaipur', 'Jaipur', 'Agra', 'Mumbai', 'Kerala', 'Goa'];
    }
    
    return allDestinations;
  };

  const handleGenerateSuggestions = () => {
    if (!formData.travelStyle || !formData.budget || !formData.groupSize || !formData.startDate) {
      return;
    }
    
    const suggestions = getDestinationsForPreferences().slice(0, 8);
    setSuggestedPlaces(suggestions);
    setStep(2);
  };

  const addPlaceSelector = () => {
    if (selectedPlaces.length < 4) {
      setSelectedPlaces([...selectedPlaces, '']);
    }
  };

  const removePlaceSelector = (index: number) => {
    if (selectedPlaces.length > 1) {
      setSelectedPlaces(selectedPlaces.filter((_, i) => i !== index));
    }
  };

  const updateSelectedPlace = (index: number, value: string) => {
    const newPlaces = [...selectedPlaces];
    newPlaces[index] = value;
    setSelectedPlaces(newPlaces);
  };

  const handleProceedToDuration = () => {
    const validPlaces = selectedPlaces.filter(p => p.trim() !== '');
    if (validPlaces.length === 0) return;
    setStep(3);
  };

  const generateItinerary = async () => {
    if (!duration) return;
    
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 200);
    
    // Simulate API call
    setTimeout(() => {
      const days = parseInt(duration);
      const validPlaces = selectedPlaces.filter(p => p.trim() !== '');
      const daysPerLocation = Math.floor(days / validPlaces.length);
      
      const mockItinerary: ItineraryDay[] = [];
      let currentDay = 1;
      
      validPlaces.forEach((place, placeIndex) => {
        const locationDays = placeIndex === validPlaces.length - 1 
          ? days - currentDay + 1 
          : daysPerLocation;
        
        for (let i = 0; i < locationDays; i++) {
          const activities = [];
          
          if (i === 0) {
            activities.push(`Arrival in ${place} and hotel check-in`);
            activities.push(`Explore local markets and ${formData.travelStyle} attractions`);
          } else {
            if (formData.travelStyle === 'cultural') {
              activities.push(`Morning: Visit historical monuments and museums`);
              activities.push(`Afternoon: Local cuisine tasting tour`);
              activities.push(`Evening: Cultural performance or heritage walk`);
            } else if (formData.travelStyle === 'adventure') {
              activities.push(`Morning: Adventure sports and outdoor activities`);
              activities.push(`Afternoon: Trekking or water sports`);
              activities.push(`Evening: Campfire and local interactions`);
            } else if (formData.travelStyle === 'spiritual') {
              activities.push(`Morning: Temple visit and meditation session`);
              activities.push(`Afternoon: Yoga and spiritual discourse`);
              activities.push(`Evening: Ganga Aarti or prayer ceremony`);
            } else if (formData.travelStyle === 'beach') {
              activities.push(`Morning: Beach activities and water sports`);
              activities.push(`Afternoon: Beachside relaxation`);
              activities.push(`Evening: Sunset cruise and seafood dinner`);
            } else {
              activities.push(`Morning: ${place} sightseeing tour`);
              activities.push(`Afternoon: Shopping and local experiences`);
              activities.push(`Evening: Fine dining and entertainment`);
            }
          }
          
          mockItinerary.push({
            id: `day-${currentDay}`,
            day: currentDay,
            location: place,
            activities: activities
          });
          
          currentDay++;
        }
      });
      
      clearInterval(progressInterval);
      setGenerationProgress(100);
      
      setTimeout(() => {
        setGeneratedItinerary(mockItinerary);
        setIsGenerating(false);
        setGenerationProgress(0);
        setStep(4);
        toast.success('Itinerary generated successfully!');
      }, 500);
    }, 2000);
  };

  const addActivity = (dayId: string) => {
    setGeneratedItinerary(prev => 
      prev.map(day => 
        day.id === dayId 
          ? { ...day, activities: [...day.activities, 'New custom activity'] }
          : day
      )
    );
  };

  const removeActivity = (dayId: string, activityIndex: number) => {
    setGeneratedItinerary(prev => 
      prev.map(day => 
        day.id === dayId 
          ? { ...day, activities: day.activities.filter((_, i) => i !== activityIndex) }
          : day
      )
    );
  };

  const resetBuilder = () => {
    setStep(1);
    setFormData({ travelStyle: '', budget: '', groupSize: '', startDate: '' });
    setSuggestedPlaces([]);
    setSelectedPlaces(['']);
    setDuration('');
    setGeneratedItinerary([]);
  };

  const exportToPDF = async () => {
    setIsExportingPDF(true);
    
    try {
      // Dynamic import of jsPDF
      const { default: jsPDF } = await import('jspdf');
      
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      let yPosition = margin;
      
      // Title
      doc.setFontSize(20);
      doc.setTextColor(255, 107, 53); // Saffron color
      doc.text('Your India Travel Itinerary', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 15;
      
      // Trip Summary
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text('Trip Details:', margin, yPosition);
      yPosition += 8;
      
      doc.setFontSize(10);
      doc.text(`Travel Style: ${formData.travelStyle}`, margin, yPosition);
      yPosition += 6;
      doc.text(`Budget: ${formData.budget}`, margin, yPosition);
      yPosition += 6;
      doc.text(`Group: ${formData.groupSize}`, margin, yPosition);
      yPosition += 6;
      doc.text(`Start Date: ${formData.startDate}`, margin, yPosition);
      yPosition += 6;
      doc.text(`Duration: ${duration} days`, margin, yPosition);
      yPosition += 10;
      
      // Line separator
      doc.setDrawColor(255, 107, 53);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;
      
      // Itinerary days
      generatedItinerary.forEach((day, index) => {
        // Check if we need a new page
        if (yPosition > pageHeight - 40) {
          doc.addPage();
          yPosition = margin;
        }
        
        // Day header
        doc.setFontSize(14);
        doc.setTextColor(30, 122, 140); // Peacock blue
        doc.text(`Day ${day.day} - ${day.location}`, margin, yPosition);
        yPosition += 8;
        
        // Activities
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        day.activities.forEach((activity, actIndex) => {
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = margin;
          }
          
          const lines = doc.splitTextToSize(`• ${activity}`, pageWidth - margin * 2 - 5);
          lines.forEach((line: string) => {
            doc.text(line, margin + 5, yPosition);
            yPosition += 5;
          });
        });
        
        yPosition += 8;
      });
      
      // Footer
      const totalPages = doc.internal.pages.length - 1;
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text(
          `Generated by IncredibleIndia - Page ${i} of ${totalPages}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: 'center' }
        );
      }
      
      // Save the PDF
      doc.save(`India-Trip-Itinerary-${formData.startDate}.pdf`);
      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to export PDF. Please try again.');
    } finally {
      setIsExportingPDF(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Step 1: Basic Preferences */}
      {step === 1 && (
        <Card className="border-[var(--saffron)]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--saffron)]" />
              Step 1: Travel Preferences
            </CardTitle>
            <CardDescription>
              Tell us about your travel style and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="travelStyle">Travel Style</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, travelStyle: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cultural">Cultural Heritage</SelectItem>
                    <SelectItem value="adventure">Adventure Sports</SelectItem>
                    <SelectItem value="spiritual">Spiritual Journey</SelectItem>
                    <SelectItem value="beach">Beach & Relaxation</SelectItem>
                    <SelectItem value="luxury">Luxury Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget (₹2,000-5,000/day)</SelectItem>
                    <SelectItem value="mid">Mid-range (₹5,000-15,000/day)</SelectItem>
                    <SelectItem value="luxury">Luxury (₹15,000+/day)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="groupSize">Group Size</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo Traveler</SelectItem>
                    <SelectItem value="couple">Couple</SelectItem>
                    <SelectItem value="family">Family (3-5)</SelectItem>
                    <SelectItem value="group">Group (6+)</SelectItem>
                    <SelectItem value="elderly">Elderly Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  type="date"
                  id="startDate"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                />
              </div>
            </div>

            <Button 
              onClick={handleGenerateSuggestions}
              disabled={!formData.travelStyle || !formData.budget || !formData.groupSize || !formData.startDate}
              className="w-full bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Personalized Destination Suggestions
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Select Places */}
      {step === 2 && (
        <Card className="border-[var(--peacock-blue)]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--peacock-blue)]" />
              Step 2: Suggested Destinations
            </CardTitle>
            <CardDescription>
              Based on your preferences, we recommend these places. Select 1-4 destinations for your trip.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Suggested Places Display */}
            <div>
              <Label className="mb-3 block">Recommended Places for You:</Label>
              <div className="flex flex-wrap gap-2 mb-6">
                {suggestedPlaces.map((place) => (
                  <Badge
                    key={place}
                    className="bg-[var(--peacock-blue)]/10 text-[var(--peacock-blue)] border border-[var(--peacock-blue)]/30 px-4 py-2"
                  >
                    {place}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Place Selectors */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Select Your Destinations (1-4 places required):</Label>
                {selectedPlaces.length < 4 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addPlaceSelector}
                    className="text-[var(--peacock-blue)]"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Place
                  </Button>
                )}
              </div>

              {selectedPlaces.map((place, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <div className="flex-1">
                    <Select 
                      value={place} 
                      onValueChange={(value) => updateSelectedPlace(index, value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={`Select destination ${index + 1}${index === 0 ? ' (required)' : ''}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {suggestedPlaces.map((destination) => (
                          <SelectItem 
                            key={destination} 
                            value={destination}
                            disabled={selectedPlaces.includes(destination) && selectedPlaces[index] !== destination}
                          >
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {selectedPlaces.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removePlaceSelector(index)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button 
                onClick={handleProceedToDuration}
                disabled={selectedPlaces.filter(p => p.trim() !== '').length === 0}
                className="flex-1 bg-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)]/80 text-white"
              >
                Continue to Duration
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Duration */}
      {step === 3 && (
        <Card className="border-[var(--gold)]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--gold)]" />
              Step 3: Trip Duration
            </CardTitle>
            <CardDescription>
              How many days do you want to travel?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select onValueChange={setDuration} value={duration}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 days</SelectItem>
                  <SelectItem value="5">5 days</SelectItem>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="10">10 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="21">21 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-[var(--muted)] p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Your Trip Summary:</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Travel Style:</span> {formData.travelStyle}</p>
                <p><span className="text-muted-foreground">Budget:</span> {formData.budget}</p>
                <p><span className="text-muted-foreground">Group:</span> {formData.groupSize}</p>
                <p><span className="text-muted-foreground">Start Date:</span> {formData.startDate}</p>
                <p><span className="text-muted-foreground">Destinations:</span> {selectedPlaces.filter(p => p).join(', ')}</p>
              </div>
            </div>

            {/* Progress Indicator */}
            {isGenerating && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Generating your itinerary...</span>
                  <span className="font-semibold text-[var(--saffron)]">{generationProgress}%</span>
                </div>
                <Progress value={generationProgress} className="h-2" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin text-[var(--saffron)]" />
                  <span>Creating personalized activities for each day...</span>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button 
                variant="outline"
                onClick={() => setStep(2)}
                disabled={isGenerating}
              >
                Back
              </Button>
              <Button 
                onClick={generateItinerary}
                disabled={!duration || isGenerating}
                className="flex-1 bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Your Perfect Itinerary...
                  </>
                ) : (
                  'Generate AI Itinerary'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Generated Itinerary */}
      {step === 4 && generatedItinerary.length > 0 && (
        <Card className="border-[var(--peacock-blue)]/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[var(--peacock-blue)]" />
                  Your Personalized {duration}-Day Itinerary
                </CardTitle>
                <CardDescription>
                  Customize and modify your generated itinerary
                </CardDescription>
              </div>
              <Button
                variant="outline"
                onClick={resetBuilder}
                size="sm"
              >
                Create New Itinerary
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {generatedItinerary.map((day) => (
                <Card key={day.id} className="border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Day {day.day} - {day.location}</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addActivity(day.id)}
                        className="text-[var(--peacock-blue)] border-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)] hover:text-white"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add Activity
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {day.activities.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border border-border rounded-lg">
                          <span className="flex-1">{activity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeActivity(day.id, index)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button className="bg-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)]/80 text-white">
                Save Itinerary
              </Button>
              <Button variant="outline">
                Share Itinerary
              </Button>
              <Button 
                variant="outline"
                onClick={exportToPDF}
                disabled={isExportingPDF}
              >
                {isExportingPDF ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Exporting...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Export to PDF
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
