import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Droplets, 
  Eye, 
  Thermometer,
  MapPin,
  RefreshCw
} from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
  feelsLike: number;
  pressure: number;
}

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
  precipitation: number;
}

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 28,
    condition: 'Partly Cloudy',
    icon: 'partly-cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    uvIndex: 6,
    feelsLike: 32,
    pressure: 1013
  });

  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('New Delhi');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const locations = [
    'New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 
    'Jaipur', 'Goa', 'Kerala', 'Agra', 'Udaipur'
  ];

  useEffect(() => {
    generateForecast();
  }, [selectedLocation]);

  const generateForecast = () => {
    const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Clear'];
    const icons = ['sunny', 'partly-cloudy', 'cloudy', 'rainy', 'clear'];
    
    const newForecast: ForecastDay[] = days.map((day, index) => ({
      day,
      high: Math.floor(Math.random() * 15) + 25, // 25-40°C
      low: Math.floor(Math.random() * 10) + 15,  // 15-25°C
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      icon: icons[Math.floor(Math.random() * icons.length)],
      precipitation: Math.floor(Math.random() * 30) // 0-30%
    }));
    
    setForecast(newForecast);
  };

  const refreshWeather = async () => {
    setIsRefreshing(true);
    
    // Simulate API call
    setTimeout(() => {
      const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Clear', 'Light Rain'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      setWeatherData(prev => ({
        ...prev,
        temperature: Math.floor(Math.random() * 20) + 20, // 20-40°C
        condition: randomCondition,
        humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
        windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
        feelsLike: Math.floor(Math.random() * 25) + 25, // 25-50°C
        uvIndex: Math.floor(Math.random() * 11) + 1 // 1-11
      }));
      
      generateForecast();
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1500);
  };

  const getWeatherIcon = (iconType: string) => {
    switch (iconType) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'partly-cloudy':
        return <Cloud className="w-8 h-8 text-gray-400" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getUVLevel = (uvIndex: number) => {
    if (uvIndex <= 2) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-100' };
    if (uvIndex <= 5) return { level: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (uvIndex <= 7) return { level: 'High', color: 'text-orange-600', bg: 'bg-orange-100' };
    if (uvIndex <= 10) return { level: 'Very High', color: 'text-red-600', bg: 'bg-red-100' };
    return { level: 'Extreme', color: 'text-purple-600', bg: 'bg-purple-100' };
  };

  const uvLevel = getUVLevel(weatherData.uvIndex);

  return (
    <div className="space-y-6">
      {/* Location Selector */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[var(--saffron)]" />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-transparent border-none text-lg font-semibold text-[var(--foreground)] focus:outline-none"
          >
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={refreshWeather}
          disabled={isRefreshing}
          className="border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white"
        >
          {isRefreshing ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Current Weather */}
        <Card className="border-[var(--gold)]/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-[var(--gold)]" />
                  Current Weather
                </CardTitle>
                <CardDescription>
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </CardDescription>
              </div>
              {getWeatherIcon(weatherData.icon)}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-light text-[var(--gold)] mb-2">{weatherData.temperature}°</div>
              <div className="text-lg text-muted-foreground">{weatherData.condition}</div>
              <div className="text-sm text-muted-foreground">Feels like {weatherData.feelsLike}°C</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Humidity</div>
                  <div className="font-semibold">{weatherData.humidity}%</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-gray-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Wind</div>
                  <div className="font-semibold">{weatherData.windSpeed} km/h</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-indigo-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Visibility</div>
                  <div className="font-semibold">{weatherData.visibility} km</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-gray-600" />
                <div>
                  <div className="text-sm text-muted-foreground">Pressure</div>
                  <div className="font-semibold">{weatherData.pressure} mb</div>
                </div>
              </div>
            </div>

            {/* UV Index */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">UV Index</div>
                  <div className="font-semibold">{weatherData.uvIndex}</div>
                </div>
                <Badge className={`${uvLevel.bg} ${uvLevel.color} border-none`}>
                  {uvLevel.level}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7-Day Forecast */}
        <Card className="border-[var(--peacock-blue)]/20">
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
            <CardDescription>Weather outlook for {selectedLocation}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {forecast.map((day, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    {getWeatherIcon(day.icon)}
                    <div>
                      <div className="font-medium">{day.day}</div>
                      <div className="text-sm text-muted-foreground">{day.condition}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{day.high}°/{day.low}°</div>
                    <div className="text-sm text-blue-500">{day.precipitation}% rain</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weather Alerts */}
      <Card className="border-yellow-500/20 bg-yellow-50/50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <h4 className="font-medium text-yellow-800">Weather Advisory</h4>
              <p className="text-sm text-yellow-700 mt-1">
                High UV levels expected today. Use sunscreen and stay hydrated when outdoors.
                {weatherData.temperature > 35 && " Extreme heat warning - avoid outdoor activities during peak hours (11 AM - 4 PM)."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}