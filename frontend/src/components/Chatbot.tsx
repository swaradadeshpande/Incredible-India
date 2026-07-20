import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your IncredibleIndia travel assistant. I can help you with:\n\n• Planning your itinerary\n• Booking flights and hotels\n• Finding destinations\n• Weather information\n• Travel tips and guidance\n\nHow can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Pre-arrival related questions
    if (lowerMessage.includes('itinerary') || lowerMessage.includes('plan')) {
      return "To create a personalized itinerary:\n\n1. Go to the Pre-Arrival page\n2. Select your travel style, budget, and group size\n3. Choose your travel dates\n4. I'll suggest popular destinations based on your preferences\n5. Select 1-4 places you'd like to visit\n6. Choose your trip duration\n7. Click 'Generate Itinerary' to get your customized plan!\n\nWould you like help with anything else?";
    }

    if (lowerMessage.includes('booking') || lowerMessage.includes('flight') || lowerMessage.includes('hotel')) {
      return "For bookings, visit the Pre-Arrival page and click on the 'Booking' tab. You can:\n\n• Search and book flights\n• Find and reserve hotels\n• Arrange local transport\n\nAll bookings come with 24/7 support. Need help with specific dates or destinations?";
    }

    // Post-arrival questions
    if (lowerMessage.includes('post') || lowerMessage.includes('after arrival') || lowerMessage.includes('location')) {
      return "Our Post-Arrival page provides:\n\n• Real-time location-based recommendations\n• Nearby attractions and restaurants\n• Emergency contacts and services\n• Language translation assistance\n• Local weather updates\n\nYou can access it from the navigation menu. What specific information do you need?";
    }

    // Destinations
    if (lowerMessage.includes('destination') || lowerMessage.includes('place') || lowerMessage.includes('visit') || lowerMessage.includes('where')) {
      return "India has incredible destinations! Check out our Destinations page to explore:\n\n• Taj Mahal, Agra - Best: Oct-Mar\n• Kerala Backwaters - Best: Sep-Mar\n• Rajasthan Palaces - Best: Nov-Feb\n• Goa Beaches - Best: Nov-Feb\n• Himalayan Hills - Best: Mar-Jun\n• And many more!\n\nEach destination includes the best season to visit, activities, and travel tips. Which region interests you?";
    }

    // Weather
    if (lowerMessage.includes('weather') || lowerMessage.includes('temperature') || lowerMessage.includes('climate')) {
      return "Check the Dashboard page for real-time weather information for all major Indian cities. You can see:\n\n• Current temperature\n• 5-day forecast\n• Best time to visit recommendations\n• Seasonal travel tips\n\nWhich city's weather would you like to know about?";
    }

    // Community
    if (lowerMessage.includes('review') || lowerMessage.includes('community') || lowerMessage.includes('share')) {
      return "Join our travel community!\n\n• Share reviews and experiences\n• Upload travel photos\n• Read authentic traveler reviews\n• Get local recommendations\n• Provide feedback\n\nVisit the Community page to connect with fellow travelers. Have you visited any places you'd like to review?";
    }

    // Dashboard/Analytics
    if (lowerMessage.includes('dashboard') || lowerMessage.includes('analytics') || lowerMessage.includes('statistics')) {
      return "The Dashboard shows comprehensive travel analytics:\n\n• Real-time weather for Indian cities\n• Popular destination trends\n• Seasonal travel patterns\n• User reviews and ratings\n• Tourism statistics\n\nClick on 'Explore Dashboard' from the home page or navigation menu to view all analytics!";
    }

    // General travel tips
    if (lowerMessage.includes('tip') || lowerMessage.includes('advice') || lowerMessage.includes('help')) {
      return "Here are some essential India travel tips:\n\n• Best time to visit: October to March\n• Visa: Get e-Visa before arrival\n• Currency: Indian Rupee (₹)\n• Power: 220V, Type D/M plugs\n• Stay hydrated and try local cuisine!\n• Respect local customs and traditions\n\nWhat specific aspect would you like more information about?";
    }

    // Visa information
    if (lowerMessage.includes('visa') || lowerMessage.includes('passport')) {
      return "For traveling to India:\n\n• Valid passport (6+ months validity)\n• Tourist e-Visa available for 169 countries\n• Apply online 4-7 days before travel\n• Vaccination certificate (if applicable)\n• Travel insurance recommended\n\nCheck the Pre-Arrival checklist for complete requirements. Need help with the application process?";
    }

    // Budget
    if (lowerMessage.includes('budget') || lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('expensive')) {
      return "India offers options for every budget:\n\n• Budget: ₹2,000-5,000/day (hostels, local food, public transport)\n• Mid-range: ₹5,000-15,000/day (hotels, restaurants, private transport)\n• Luxury: ₹15,000+/day (5-star hotels, fine dining, premium experiences)\n\nYou can select your budget range when creating your itinerary. What type of experience are you looking for?";
    }

    // Default responses
    const defaultResponses = [
      "I'm here to help with your India travel plans! You can ask me about:\n\n• Creating itineraries\n• Booking services\n• Destination information\n• Weather updates\n• Travel tips\n• Visa requirements\n\nWhat would you like to know?",
      "I can help you navigate our platform and answer travel questions. Try asking about destinations, bookings, weather, or travel tips!",
      "That's an interesting question! For the most accurate information, you can:\n\n• Browse our Destinations page\n• Check the Dashboard for real-time data\n• Visit the Community page for traveler insights\n\nWhat specific information are you looking for?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white shadow-lg z-50 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col border-[var(--saffron)]">
          <CardHeader className="bg-gradient-to-r from-[var(--saffron)] to-[var(--maroon)] text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-white">Travel Assistant</CardTitle>
                  <p className="text-xs text-white/80">Always here to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--muted)]/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-[var(--saffron)] text-white'
                      : 'bg-white border border-border'
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-border rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[var(--saffron)] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[var(--saffron)] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[var(--saffron)] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t border-border bg-white">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about India travel..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
