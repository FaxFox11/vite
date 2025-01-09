import React, { useState, useEffect } from 'react';
import { 
  Circle, Heart, Moon, Sun, 
  Wind, Flower2, Star, ArrowRight 
} from 'lucide-react';

interface PhilosophyProps {
  isDarkMode: boolean;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ isDarkMode }) => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phases = [
    {
      id: 1,
      title: "आत्म",
      subtitle: "Der Beginn",
      description: "Der erste Schritt auf dem Weg des Yoga ist die Begegnung mit dir selbst.",
      detail: "Hier beginnt deine Reise zur Selbsterkenntnis. In der Stille der Praxis findest du einen Raum, in dem du dich selbst neu entdecken kannst.",
      icon: Moon,
      accent: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "प्राण",
      subtitle: "Die Energie",
      description: "Durch den Atem verbindest du dich mit deiner inneren Kraft.",
      detail: "Der Atem ist die Brücke zwischen Körper und Geist. In der bewussten Atmung liegt der Schlüssel zur Transformation.",
      icon: Wind,
      accent: "from-blue-500 via-teal-500 to-emerald-500"
    },
    {
      id: 3,
      title: "शक्ति",
      subtitle: "Die Kraft",
      description: "In der Bewegung entdeckst du deine wahre Stärke.",
      detail: "Körperliche Praxis wird zum Ausdruck innerer Kraft. Jede Haltung ist ein Tor zu tieferem Verständnis.",
      icon: Sun,
      accent: "from-amber-500 via-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "शांति",
      subtitle: "Der Frieden",
      description: "Im Loslassen findest du innere Ruhe und Klarheit.",
      detail: "Meditation führt dich zu einem Ort der Stille, wo du Frieden und Gelassenheit erfährst.",
      icon: Star,
      accent: "from-rose-500 via-pink-500 to-fuchsia-500"
    }
  ];

  return (
    <section className={`relative min-h-screen py-32 overflow-hidden transition-colors duration-700
      ${isDarkMode ? 'bg-slate-900' : 'bg-zinc-100'}`}>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-700 ${isDarkMode ? 'opacity-30' : 'opacity-10'}`}>
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`absolute transition-all duration-1000
                ${activePhase === phase.id ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}
              style={{
                top: `${25 * index}%`,
                left: `${25 * index}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`w-[800px] h-[800px] rounded-full filter blur-3xl bg-gradient-to-r ${phase.accent}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-24">
            <div className={`inline-flex mb-6 transition-all duration-700 transform
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Flower2 className={`w-12 h-12 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <h2 className={`text-6xl font-serif mb-8 transition-all duration-700 transform
              ${isDarkMode ? 'text-white' : 'text-gray-900'}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Der Weg des Yoga
            </h2>
          </div>

          {/* Phases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`group transition-all duration-1000 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActivePhase(phase.id)}
                onMouseLeave={() => setActivePhase(null)}
              >
                <div className={`relative h-full p-12 rounded-3xl overflow-hidden transition-all duration-500
                  ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'}
                  backdrop-blur-lg
                  ${activePhase === phase.id ? 'scale-105' : ''}`}>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <h3 className={`text-4xl font-serif mb-2 transition-colors duration-500
                          ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {phase.title}
                        </h3>
                        <p className={`text-lg font-light transition-colors duration-500
                          ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {phase.subtitle}
                        </p>
                      </div>
                      <div className={`p-4 rounded-2xl transition-all duration-500
                        ${isDarkMode 
                          ? 'bg-slate-700/50 group-hover:bg-slate-700' 
                          : 'bg-gray-100 group-hover:bg-white'}`}>
                        <phase.icon className={`w-8 h-8 transition-all duration-500
                          ${isDarkMode ? 'text-green-400' : 'text-green-600'}
                          ${activePhase === phase.id ? 'rotate-12 scale-110' : ''}`} />
                      </div>
                    </div>

                    <div className={`space-y-6 transition-all duration-500 transform
                      ${activePhase === phase.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-60'}`}>
                      <p className={`text-xl transition-colors duration-500
                        ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {phase.description}
                      </p>
                      <p className={`text-sm transition-colors duration-500
                        ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {phase.detail}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-64 h-64 transition-all duration-700 transform
                    ${activePhase === phase.id ? 'rotate-45 scale-110' : 'rotate-0 scale-100'}
                    ${isDarkMode ? 'opacity-10' : 'opacity-5'}`}>
                    <div className="w-full h-full border-2 border-current rounded-3xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <blockquote className="relative">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <Heart className={`w-12 h-12 transition-colors duration-500
                  ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <p className={`text-2xl font-serif italic mb-6 transition-colors duration-500
                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                "Der Weg des Yoga ist eine Reise zu dir selbst. 
                Jeder Atemzug, jede Bewegung ist ein Schritt auf diesem Weg."
              </p>
              <div className={`inline-flex items-center space-x-2 text-sm
                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span>Zen Garden</span>
                <Circle className="w-1 h-1" />
                <span>Philosophie</span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;