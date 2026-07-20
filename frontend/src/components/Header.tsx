import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Menu, 
  X, 
  MapPin, 
  Bell,
  User,
  Plus,
  Minus
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  onLogin: (loggedIn: boolean) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
}

export default function Header({ currentPage, onNavigate, isLoggedIn, onLogin, fontSize, setFontSize }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'pre-arrival', label: 'Pre-Arrival' },
    { id: 'post-arrival', label: 'Post-Arrival' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'community', label: 'Community' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    setShowLoginDialog(true);
  };

  const handleLogin = () => {
    onLogin(true);
    setShowLoginDialog(false);
  };

  const handleLogout = () => {
    onLogin(false);
  };

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--saffron)] to-[var(--gold)] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-[var(--saffron)]">IncredibleIndia</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors ${
                    currentPage === item.id
                      ? 'text-[var(--saffron)]'
                      : 'text-foreground hover:text-[var(--saffron)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Font Size Controls */}
              <div className="flex items-center gap-1 border border-border rounded-md">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  className="h-8 w-8 p-0"
                  title="Decrease font size"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <div className="text-xs px-2 border-x border-border">{fontSize}%</div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  className="h-8 w-8 p-0"
                  title="Increase font size"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center bg-[var(--saffron)] text-white text-xs">
                  3
                </Badge>
              </Button>
              
              {isLoggedIn ? (
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <User className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={handleLoginClick}>
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left transition-colors ${
                      currentPage === item.id
                        ? 'text-[var(--saffron)]'
                        : 'text-foreground hover:text-[var(--saffron)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Font Size Controls Mobile */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-sm">Font Size:</span>
                  <div className="flex items-center gap-1 border border-border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={decreaseFontSize}
                      disabled={fontSize <= 80}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <div className="text-xs px-2 border-x border-border">{fontSize}%</div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={increaseFontSize}
                      disabled={fontSize >= 150}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  {isLoggedIn ? (
                    <Button variant="outline" size="sm" className="w-full" onClick={handleLogout}>
                      Logout
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full" onClick={handleLoginClick}>
                      Login
                    </Button>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Welcome to IncredibleIndia</DialogTitle>
            <DialogDescription>
              Login or create an account to start your journey
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
                onClick={handleLogin}
              >
                Login
              </Button>
            </TabsContent>
            <TabsContent value="signup" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-signup">Email</Label>
                <Input id="email-signup" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signup">Password</Label>
                <Input id="password-signup" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full bg-[var(--saffron)] hover:bg-[var(--maroon)] text-white"
                onClick={handleLogin}
              >
                Create Account
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
