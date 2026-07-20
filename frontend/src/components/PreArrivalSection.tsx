import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import ItineraryBuilder from './ItineraryBuilder';
import BookingFlow from './BookingFlow';
import { 
  Calendar,
  MapPin,
  CheckCircle,
  Clock,
  FileText,
  Bell,
  Plane,
  Hotel,
  Car,
  Camera,
  Shield,
  Mail,
  Smartphone
} from 'lucide-react';

export default function PreArrivalSection() {
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

  const upcomingReminders = [
    { id: 1, title: 'Visa Application Deadline', date: '3 days left', type: 'urgent' },
    { id: 2, title: 'Flight Check-in Opens', date: '24 hours', type: 'info' },
    { id: 3, title: 'Travel Insurance Renewal', date: '1 week', type: 'warning' }
  ];

  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = (completedItems / checklistItems.length) * 100;

  return (
    <section id="planning" className="py-20 bg-gradient-to-b from-white to-[var(--muted)]/30">
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
            From personalized itineraries to smart reminders, we help you prepare for an unforgettable journey 
            through India's rich heritage and diverse landscapes.
          </p>
        </div>

        <Tabs defaultValue="itinerary" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white border border-border">
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
            <TabsTrigger value="reminders" className="flex items-center gap-2 data-[state=active]:bg-[var(--saffron)] data-[state=active]:text-white">
              <Bell className="w-4 h-4" />
              Reminders
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

          {/* Reminders & Notifications */}
          <TabsContent value="reminders" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-[var(--maroon)]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-[var(--maroon)]" />
                    Upcoming Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingReminders.map((reminder) => (
                    <div key={reminder.id} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        reminder.type === 'urgent' ? 'bg-red-500' :
                        reminder.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="font-medium">{reminder.title}</div>
                        <div className="text-sm text-muted-foreground">{reminder.date}</div>
                      </div>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-[var(--peacock-blue)]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[var(--peacock-blue)]" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email Notifications', enabled: true },
                    { icon: Smartphone, label: 'SMS Alerts', enabled: true },
                    { icon: Bell, label: 'Push Notifications', enabled: false }
                  ].map((pref, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <pref.icon className="w-4 h-4 text-[var(--peacock-blue)]" />
                        <span>{pref.label}</span>
                      </div>
                      <div className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                        pref.enabled ? 'bg-[var(--peacock-blue)]' : 'bg-gray-300'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          pref.enabled ? 'translate-x-6' : 'translate-x-0'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}