import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Heart, Home, Leaf, Calendar, User, LayoutDashboard, MessageCircle } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [breatheAnimation, setBreatheAnimation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'kurse', label: 'Kurse', icon: LayoutDashboard },
    { id: 'kursplan', label: 'Kursplan', icon: Calendar },
    { id: 'lehrer', label: 'Lehrer', icon: User },
    { id: 'philosophie', label: 'Philosophie', icon: Leaf },
    { id: 'kontakt', label: 'Kontakt', icon: MessageCircle },
  ];

  // Breathing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBreatheAnimation(true);
      setTimeout(() => setBreatheAnimation(false), 3000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Scroll handling 
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow and background opacity when scrolled
      setIsScrolled(window.scrollY > 20);

      // Find active section based on scroll position
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(menuItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 112; // Banner (32px) + Navbar (80px)
      const targetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700
      ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className={`mx-auto px-4 sm:px-6 lg:px-8 py-4 transition-all duration-500
        ${isDarkMode 
          ? `bg-slate-900${isScrolled ? '' : '/90'}` 
          : `bg-white${isScrolled ? '' : '/90'}`} 
        backdrop-blur-lg`}>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 ${isDarkMode ? 'opacity-30' : 'opacity-10'}`}>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply 
              filter blur-3xl animate-drift" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply 
              filter blur-3xl animate-drift-slow" />
          </div>
        </div>

        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center space-x-3">
              <div className={`relative transition-all duration-500 ${breatheAnimation ? 'scale-110' : 'scale-100'}`}>
                <Leaf 
                  className={`w-8 h-8 ${isDarkMode ? 'text-green-300' : 'text-green-600'} 
                    transition-all duration-500`}
                />
              </div>
              <span className={`text-xl font-serif ${isDarkMode ? 'text-white' : 'text-gray-800'}
                transition-colors duration-500`}>
                Zen Garden
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group px-4 py-2 rounded-full transition-all duration-300 
                  ${activeSection === item.id 
                    ? (isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-50 text-green-700')
                    : (isDarkMode ? 'text-gray-300 hover:text-green-300' : 'text-gray-600 hover:text-green-700')}
                  flex items-center space-x-2`}
              >
                <item.icon className={`w-4 h-4 transition-transform duration-300 
                  group-hover:rotate-12 ${breatheAnimation ? 'scale-110' : 'scale-100'}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors duration-300
                ${isDarkMode 
                  ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 transition-transform hover:rotate-90 duration-500" />
              ) : (
                <Moon className="w-5 h-5 transition-transform hover:-rotate-12 duration-500" />
              )}
            </button>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('kontakt')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-500
                ${isDarkMode 
                  ? 'bg-green-600 text-white hover:bg-green-500' 
                  : 'bg-green-600 text-white hover:bg-green-700'}
                group relative overflow-hidden`}>
              <span className="relative z-10 flex items-center">
                Kostenlose Probestunde
                <Heart className="w-4 h-4 ml-2 transition-transform duration-300 
                  group-hover:scale-125" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 
                group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300
                ${isDarkMode ? 'text-white hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-fade-in-down">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 
                  ${activeSection === item.id
                    ? (isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-50 text-green-700')
                    : (isDarkMode ? 'text-gray-300' : 'text-gray-600')}
                  flex items-center space-x-3`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('kontakt')}
                className={`w-full px-4 py-3 rounded-lg font-medium 
                  ${isDarkMode 
                    ? 'bg-green-600 text-white hover:bg-green-500' 
                    : 'bg-green-600 text-white hover:bg-green-700'}
                  transition-colors duration-300 flex items-center justify-center space-x-2`}>
                <span>Kostenlose Probestunde</span>
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;