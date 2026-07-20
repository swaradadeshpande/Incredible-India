import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { TrendingUp, Users, MapPin, Star, Calendar, Globe, Award } from 'lucide-react';

// --------------------
// Weather widget (kept inline so this file is drop-in)
// --------------------
function WeatherDashboard() {
  // Simple mock weather data to keep the component self-contained and error-free.
  const cities = [
    { name: 'New Delhi', temp: 26, condition: 'Partly Cloudy' },
    { name: 'Mumbai', temp: 29, condition: 'Sunny' },
    { name: 'Kolkata', temp: 28, condition: 'Humid' },
    { name: 'Bengaluru', temp: 23, condition: 'Clear' }
  ];

  return (
    <div className="w-full bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold">Weather Snapshot</h4>
        <Badge className="bg-[#1e7a8c]/10 text-[#1e7a8c]">Real-time</Badge>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {cities.map((c) => (
          <div key={c.name} className="p-3 rounded-md bg-muted/30">
            <div className="text-sm font-medium">{c.name}</div>
            <div className="mt-1 text-xl font-semibold">{c.temp}°C</div>
            <div className="text-xs text-muted-foreground mt-1">{c.condition}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --------------------
// Main Dashboard
// --------------------
export default function DashboardPage(): JSX.Element {
  const monthlyVisitors = [
    { month: 'Jan', visitors: 4200, bookings: 850 },
    { month: 'Feb', visitors: 3800, bookings: 720 },
    { month: 'Mar', visitors: 5100, bookings: 980 },
    { month: 'Apr', visitors: 4500, bookings: 890 },
    { month: 'May', visitors: 3200, bookings: 640 },
    { month: 'Jun', visitors: 2800, bookings: 520 },
    { month: 'Jul', visitors: 2500, bookings: 480 },
    { month: 'Aug', visitors: 2900, bookings: 550 },
    { month: 'Sep', visitors: 3600, bookings: 680 },
    { month: 'Oct', visitors: 5800, bookings: 1120 },
    { month: 'Nov', visitors: 6200, bookings: 1280 },
    { month: 'Dec', visitors: 5900, bookings: 1150 }
  ];

  const topDestinations = [
    { name: 'Goa', percentage: 22, value: 2200, color: '#ff6b35' },
    { name: 'Rajasthan', percentage: 18, value: 1800, color: '#1e7a8c' },
    { name: 'Kerala', percentage: 15, value: 1500, color: '#d4af37' },
    { name: 'Himalayas', percentage: 14, value: 1400, color: '#8b2635' },
    { name: 'Golden Triangle', percentage: 20, value: 2000, color: '#cd7f32' },
    { name: 'Others', percentage: 11, value: 1100, color: '#e5e7eb' }
  ];

  const travelStyleData = [
    { style: 'Cultural', count: 3500 },
    { style: 'Adventure', count: 2800 },
    { style: 'Beach', count: 3200 },
    { style: 'Spiritual', count: 2100 },
    { style: 'Luxury', count: 1900 }
  ];

  const stats = [
    {
      label: 'Total Travelers',
      value: '50,243',
      change: '+12.5%',
      icon: Users,
      colorClass: 'text-[#ff6b35]',
      bgClass: 'bg-[#ff6b35]/10'
    },
    {
      label: 'Active Destinations',
      value: '1,247',
      change: '+8.2%',
      icon: MapPin,
      colorClass: 'text-[#1e7a8c]',
      bgClass: 'bg-[#1e7a8c]/10'
    },
    {
      label: 'Avg. Rating',
      value: '4.8/5',
      change: '+0.3',
      icon: Star,
      colorClass: 'text-[#d4af37]',
      bgClass: 'bg-[#d4af37]/10'
    },
    {
      label: 'Bookings This Month',
      value: '1,280',
      change: '+18.4%',
      icon: Calendar,
      colorClass: 'text-[#8b2635]',
      bgClass: 'bg-[#8b2635]/10'
    }
  ];

  return (
    <section className="pt-20 pb-12 min-h-screen bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <Badge className="mb-3 bg-[#1e7a8c]/10 text-[#1e7a8c]">Travel Analytics</Badge>
            <h1 className="text-2xl sm:text-3xl font-semibold">India Travel <span className="text-[#ff6b35]">Dashboard</span></h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">Real-time insights into travel trends, popular destinations and city-level weather across India.</p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted-foreground">Period</div>
              <select className="rounded-md border px-2 py-1 text-sm bg-white/70">
                <option>Last 12 months</option>
                <option>Last 6 months</option>
                <option>Year to Date</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card key={i} className="p-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${s.bgClass}`}>
                      <Icon className={`w-5 h-5 ${s.colorClass}`} />
                    </div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-semibold">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.change}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">View</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#ff6b35]" />
                  Visitor & Bookings Trends
                </CardTitle>
                <CardDescription>Monthly visitors and bookings (last 12 months)</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ width: '100%', height: 320 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyVisitors}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b5b4f" />
                      <YAxis stroke="#6b5b4f" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', borderRadius: 8 }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="visitors" stroke="#ff6b35" strokeWidth={2} dot={{ r: 3 }} name="Visitors" />
                      <Line type="monotone" dataKey="bookings" stroke="#1e7a8c" strokeWidth={2} dot={{ r: 3 }} name="Bookings" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#1e7a8c]" />
                  Travel Style Preferences
                </CardTitle>
                <CardDescription>Distribution of traveler types</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ width: '100%', height: 260 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={travelStyleData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="style" stroke="#6b5b4f" />
                      <YAxis stroke="#6b5b4f" />
                      <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: 8 }} />
                      <Bar dataKey="uv" fill="#8884d8" />

                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#ff6b35]" />
                  Popular Destinations
                </CardTitle>
                <CardDescription>Top destinations by share</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ width: '100%', height: 240 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={topDestinations} dataKey="value" cx="50%" cy="50%" outerRadius={80} label={({ name, percentage }) => `${name}`}>
                        {topDestinations.map((entry, idx) => (
                          <Cell key={`cell-${idx}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: 8 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {topDestinations.map((d) => (
                    <div key={d.name} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: d.color }} />
                      <div className="text-sm">{d.name} <span className="text-xs text-muted-foreground">{d.percentage}%</span></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8b2635]" />
                  Seasonal Insights
                </CardTitle>
                <CardDescription>Seasonal satisfaction & bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">Winter (Oct-Mar)</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-[#8b2635] h-2 rounded-full" style={{ width: '90%' }} />
                  </div>
                  <div className="text-sm text-muted-foreground">Monsoon (Jul-Sep)</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-[#d4af37] h-2 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weather</CardTitle>
                <CardDescription>City level snapshot</CardDescription>
              </CardHeader>
              <CardContent>
                <WeatherDashboard />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li>Book Golden Triangle tours 2-3 months in advance.</li>
                  <li>Check mountain weather before planning Himalayan trips.</li>
                  <li>Monsoon is perfect for Kerala backwaters (pack rain gear).</li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
