import React, { useEffect, useState } from 'react';
import { Flower2, Clock, Calendar, Heart } from 'lucide-react';
import heroImage from '../assets/hero.webp';

export const Hero = ({ isDarkMode = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: Clock, text: "Flexible Kurszeiten" },
    { icon: Heart, text: "Erfahrene Lehrer" },
    { icon: Calendar, text: "7 Tage die Woche" },
  ];

  return (
    <div className={`relative min-h-screen pt-20 overflow-hidden transition-all duration-700
      ${isDarkMode 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-green-50 to-white'}`}>
      
      {/* Background Image with ultra-low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={heroImage}
          alt=""
          className={`w-full h-full object-cover ${isDarkMode ? 'opacity-[0.07]' : 'opacity-[0.2]'}`}
        />
        <div className={`absolute inset-0 
          ${isDarkMode 
            ? 'bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900' 
            : 'bg-gradient-to-b from-transparent via-green-50/50 to-green-50'}`} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24">
        <div className="text-center space-y-12">
          {/* Main Heading with Decorative Elements */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-12">
              <Flower2 
                className={`w-12 h-12 transform transition-all duration-1000 
                  ${isDarkMode ? 'text-green-400' : 'text-green-600'}
                  ${isVisible ? 'rotate-180 scale-100' : 'rotate-0 scale-0'}`}
              />
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-light
              transition-all duration-1000 transform
              ${isDarkMode ? 'text-white' : 'text-gray-900'}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Finde deine innere
              <span className={`block mt-2 font-normal
                ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                Harmonie & Balance
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`max-w-2xl mx-auto text-lg sm:text-xl
            transition-all duration-1000 delay-300
            ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Entdecke die transformative Kraft des Yoga in unserem modernen Studio. 
            Egal ob Anfänger oder Fortgeschrittener – bei uns findest du deinen Weg zur inneren Ruhe.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6
            transition-all duration-1000 delay-500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className={`px-8 py-4 rounded-full font-medium transform hover:scale-105 
              transition-all duration-300 shadow-lg hover:shadow-xl group
              ${isDarkMode 
                ? 'bg-green-500 text-white hover:bg-green-400 hover:shadow-green-500/20' 
                : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-green-600/20'}`}>
              <span className="flex items-center">
                Kostenlose Probestunde
                <Heart className="w-5 h-5 ml-2 transition-transform duration-300 
                  group-hover:scale-125" />
              </span>
            </button>
            <button className={`px-8 py-4 border-2 rounded-full font-medium
              transform hover:scale-105 transition-all duration-300
              ${isDarkMode 
                ? 'border-green-400 text-green-400 hover:bg-green-950/50' 
                : 'border-green-600 text-green-600 hover:bg-green-50'}`}>
              Kursplan ansehen
            </button>
          </div>

          {/* Benefits Section */}
          <div className={`pt-12 transition-all duration-1000 delay-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex flex-col items-center space-y-3 p-6 rounded-2xl
                  transition-colors duration-300 group
                  ${isDarkMode 
                    ? 'hover:bg-white/5' 
                    : 'hover:bg-white/50'}`}>
                  <div className={`p-3 rounded-xl transition-colors duration-300
                    ${isDarkMode 
                      ? 'bg-green-950/50 group-hover:bg-green-900/50' 
                      : 'bg-green-50 group-hover:bg-green-100'}`}>
                    <benefit.icon className={`w-6 h-6 
                      ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <span className={`font-medium
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Hero;