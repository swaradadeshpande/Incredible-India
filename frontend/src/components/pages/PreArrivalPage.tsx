import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ItineraryBuilder from '../ItineraryBuilder';
import BookingFlow from '../BookingFlow';
import { 
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

export default function PreArrivalPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistItems = [
    { id: 'passport', text: 'Valid Passport (6+ months)', category: 'documents' },
    { id: 'visa', text: 'Tourist Visa / e-Visa', category: 'documents' },
    { id: 'vaccination', text: 'Vaccination Certificate', category: 'health' },
    { id: 'insurance', text: 'Travel Insurance', category: 'safety' },
    { id: 'currency', text: 'Indian Rupees / Cards', category: 'finance' },
    { id: 'adapter', text: 'Power Adapter (Type D/M)', category: 'essentials' },
    { id: 'medicines', text: 'Personal Medications', category: 'health' },
    { id: 'booking', text: 'Hotel Confirmations', category: 'bookings' }
  ];

  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = (completedItems / checklistItems.length) * 100;

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-white to-[var(--muted)]/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[var(--peacock-blue)]/10 text-[var(--peacock-blue)] hover:bg-[var(--peacock-blue)]/20">
            Pre-Arrival Planning
          </Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-[var(--foreground)]">
            Plan Your Perfect <span className="text-[var(--saffron)]">Indian Adventure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From personalized itineraries to smart bookings, we help you prepare for an unforgettable journey 
            through India's rich heritage and diverse landscapes.
          </p>
        </div>

        <Tabs defaultValue="itinerary" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-border">
            <TabsTrigger value="itinerary" className="flex items-center gap-2 data-[state=active]:bg-[var(--saffron)] data-[state=active]:text-white">
              <MapPin className="w-4 h-4" />
              Itinerary
            </TabsTrigger>
            <TabsTrigger value="booking" className="flex items-center gap-2 data-[state=active]:bg-[var(--saffron)] data-[state=active]:text-white">
              <Calendar className="w-4 h-4" />
              Booking
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-2 data-[state=active]:bg-[var(--saffron)] data-[state=active]:text-white">
              <CheckCircle className="w-4 h-4" />
              Checklist
            </TabsTrigger>
          </TabsList>

          {/* Itinerary Planning */}
          <TabsContent value="itinerary" className="space-y-6">
            <ItineraryBuilder />
          </TabsContent>

          {/* Booking Flow */}
          <TabsContent value="booking" className="space-y-6">
            <BookingFlow />
          </TabsContent>

          {/* Travel Checklist */}
          <TabsContent value="checklist" className="space-y-6">
            <Card className="border-[var(--gold)]/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--gold)]" />
                      Smart Travel Checklist
                    </CardTitle>
                    <CardDescription>
                      Complete your pre-departure preparations
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-[var(--gold)]">{completedItems}/{checklistItems.length}</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                </div>
                <Progress value={progressPercentage} className="w-full h-2" />
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {checklistItems.map((item) => (
                    <div 
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                        checkedItems[item.id] 
                          ? 'bg-[var(--gold)]/10 border-[var(--gold)]/30' 
                          : 'border-border hover:border-[var(--gold)]/50'
                      }`}
                      onClick={() => toggleCheck(item.id)}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        checkedItems[item.id] 
                          ? 'bg-[var(--gold)] border-[var(--gold)]' 
                          : 'border-border'
                      }`}>
                        {checkedItems[item.id] && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className={checkedItems[item.id] ? 'line-through text-muted-foreground' : ''}>
                        {item.text}
                      </span>
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
