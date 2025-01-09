import React, { useState, useEffect } from 'react';
import { 
  Sunrise, Moon, Heart, Users, Timer, ArrowRight,
  Wind, Flower2, Sun, Cloud
} from 'lucide-react';

interface CoursesProps {
  isDarkMode: boolean;
}

export const Courses: React.FC<CoursesProps> = ({ isDarkMode }) => {
  const [selectedStyle, setSelectedStyle] = useState('Alle');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [blobs, setBlobs] = useState([
    { x: 20, y: 10, scale: 1, rotation: 0 },
    { x: 60, y: 40, scale: 1, rotation: 0 },
    { x: 40, y: 60, scale: 1, rotation: 0 }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBlobClick = (index: number) => {
    setBlobs(prevBlobs => {
      const newBlobs = [...prevBlobs];
      newBlobs[index] = {
        ...newBlobs[index],
        scale: newBlobs[index].scale === 1 ? 1.2 : 1,
        rotation: newBlobs[index].rotation + 45
      };
      return newBlobs;
    });
  };

  const styles = [
    { id: 'Alle', icon: Flower2 },    // Universal symbol
    { id: 'Vinyasa', icon: Wind },    // Represents flow
    { id: 'Yin', icon: Moon },        // Represents calm
    { id: 'Meditation', icon: Cloud }  // Represents peace
  ];

  const courses = [
    {
      id: 1,
      name: "Sunrise Vinyasa",
      style: "Vinyasa",
      level: "Alle Level",
      duration: "75 min",
      description: "Energetischer Start in den Tag mit fließenden Bewegungen und Atemübungen",
      focus: "Bewegung • Atmung • Energie",
      image: "/src/assets/sunrise.webp",
      accent: "from-amber-500 via-orange-500 to-rose-500"
    },
    {
      id: 2,
      name: "Yin & Restore",
      style: "Yin",
      level: "Alle Level",
      duration: "90 min",
      description: "Tiefenentspannung und sanfte Dehnung für Körper und Geist",
      focus: "Entspannung • Dehnung • Ruhe",
      image: "/src/assets/yinrestore.webp",
      accent: "from-blue-500 via-indigo-500 to-violet-500"
    },
    {
      id: 3,
      name: "Deep Meditation",
      style: "Meditation",
      level: "Alle Level",
      duration: "45 min",
      description: "Geführte Meditationen für innere Ruhe und mentale Klarheit",
      focus: "Stille • Präsenz • Bewusstsein",
      image: "/src/assets/deepmeditation.webp",
      accent: "from-cyan-500 via-blue-500 to-indigo-500"
    }
  ];

  const filteredCourses = courses.filter(
    course => selectedStyle === 'Alle' || course.style === selectedStyle
  );

  return (
    <section className={`relative min-h-screen py-32 overflow-hidden transition-colors duration-700
      ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-700 ${isDarkMode ? 'opacity-30' : 'opacity-10'}`}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              onClick={() => handleBlobClick(i)}
              className="cursor-pointer"
            >
              <div 
                className={`absolute w-[800px] h-[800px] rounded-full filter blur-3xl transition-all duration-700 ease-out
                  bg-gradient-to-r ${courses[i]?.accent || 'from-blue-500 to-purple-500'}
                  ${isVisible ? 'opacity-50' : 'opacity-0'}`}
                style={{
                  transform: `translate(${blobs[i].x}%, ${blobs[i].y}%) scale(${blobs[i].scale}) rotate(${blobs[i].rotation}deg)`,
                  cursor: 'pointer'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative text-center mb-24">
          <h2 className={`text-7xl font-serif mb-8 transition-all duration-1000
            ${isDarkMode ? 'text-white' : 'text-gray-900'}
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Yoga Styles
          </h2>
          
          {/* Style Navigation */}
          <div className={`flex justify-center gap-8 mb-16 transition-all duration-1000 delay-300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`group flex flex-col items-center transition-all duration-300 
                  ${selectedStyle === style.id 
                    ? (isDarkMode ? 'text-green-400' : 'text-green-600')
                    : (isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-500 hover:text-green-600')}`}
              >
                <div className={`p-4 rounded-2xl mb-2 transition-all duration-300
                  ${selectedStyle === style.id 
                    ? (isDarkMode ? 'bg-green-950/50' : 'bg-green-50') 
                    : (isDarkMode ? 'bg-slate-800' : 'bg-gray-100')}`}>
                  <style.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">{style.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`group transition-all duration-1000 transform
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(course.id)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`relative rounded-2xl overflow-hidden transition-all duration-500
                ${isDarkMode ? 'bg-slate-800' : 'bg-white'}
                ${activeIndex === course.id ? 'shadow-2xl -translate-y-2' : 'shadow-lg'}`}>
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 transition-all duration-500
                    bg-gradient-to-br ${course.accent}
                    ${activeIndex === course.id ? 'opacity-90' : 'opacity-75'}`} />
                  <img
                    src={course.image}
                    alt={course.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay 
                      transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {course.duration}
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {course.level}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-2">{course.name}</h3>
                      <p className="text-sm text-white/90">{course.focus}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className={`text-sm mb-6 transition-colors duration-500
                    ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {course.description}
                  </p>

                  <button className={`w-full group/btn flex items-center justify-center space-x-2 
                    px-6 py-3 rounded-xl font-medium transition-all duration-300 
                    ${isDarkMode 
                      ? 'bg-slate-700 hover:bg-slate-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                    <span>Details & Anmeldung</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 
                      group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {[
            {
              icon: Users,
              title: "Kleine Gruppen",
              description: "Maximale Aufmerksamkeit durch begrenzte Teilnehmerzahl"
            },
            {
              icon: Heart,
              title: "Individuelle Betreuung",
              description: "Anpassung der Praxis an deine Bedürfnisse"
            },
            {
              icon: Timer,
              title: "Flexible Zeiten",
              description: "Kurse von früh morgens bis spät abends"
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-2xl transition-all duration-500
                ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-50 hover:bg-white'}`}
            >
              <div className={`p-4 rounded-2xl inline-block mb-4 transition-colors duration-500
                ${isDarkMode ? 'bg-slate-700 group-hover:bg-slate-600' : 'bg-white group-hover:bg-gray-50'}`}>
                <feature.icon className={`w-6 h-6 transition-colors duration-500
                  ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <h3 className={`text-xl font-medium mb-2 transition-colors duration-500
                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm transition-colors duration-500
                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;