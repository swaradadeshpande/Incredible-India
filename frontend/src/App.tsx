import { useState } from 'react';
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import PreArrivalPage from "./components/pages/PreArrivalPage";
import PostArrivalPage from "./components/pages/PostArrivalPage";
import CommunityPage from "./components/pages/CommunityPage";
import DestinationsPage from "./components/pages/DestinationsPage";
import DashboardPage from "./components/pages/DashboardPage";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState(100); // Font size percentage

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} onLogin={setIsLoggedIn} />;
      case 'pre-arrival':
        return <PreArrivalPage />;
      case 'post-arrival':
        return <PostArrivalPage />;
      case 'community':
        return <CommunityPage />;
      case 'destinations':
        return <DestinationsPage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} onLogin={setIsLoggedIn} />;
    }
  };

  return (
    <div className="min-h-screen bg-background" style={{ fontSize: `${fontSize}%` }}>
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isLoggedIn={isLoggedIn}
        onLogin={setIsLoggedIn}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
      <Toaster position="top-right" richColors />
    </div>
  );
}
