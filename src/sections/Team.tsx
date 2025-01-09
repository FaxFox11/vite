import React, { useState } from 'react';
import { Flower2 } from 'lucide-react';

interface TeamProps {
  isDarkMode: boolean;
}

export const Team: React.FC<TeamProps> = ({ isDarkMode }) => {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);

  const teachers = [
    {
      id: 1,
      name: "Anna Schmidt",
      title: "Vinyasa & Meditation",
      experience: "12 Jahre Erfahrung",
      philosophy: "Verbindet traditionelles Yoga mit modernem Flow",
      specialties: ["Vinyasa Flow", "Pranayama", "Meditation"],
      schedule: "Morgens & Abends",
      image: "src/assets/anna.webp"
    },
    {
      id: 2,
      name: "Michael Weber",
      title: "Power & Ashtanga Yoga",
      experience: "8 Jahre Erfahrung",
      philosophy: "Fokus auf Präzision und innere Stärke",
      specialties: ["Power Yoga", "Ashtanga", "Inversions"],
      schedule: "Vormittags & Abends", 
      image: "src/assets/michael.webp"
    },
  ];

  return (
    <section className={`py-24 transition-colors duration-700
      ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <Flower2 
              className={`w-12 h-12 transition-colors duration-700
                ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}
            />
          </div>
          <h2 className={`text-4xl sm:text-5xl font-serif mb-6 transition-colors duration-700  
            ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Unsere erfahrenen Lehrer
          </h2>
          <p className={`text-lg transition-colors duration-700
            ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>  
            Lernen Sie unsere engagierten Yogalehrer mit langjähriger Erfahrung kennen.
          </p>
        </div>

        {/* Teacher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="group"  
              onMouseEnter={() => setSelectedTeacher(teacher.id)}
              onMouseLeave={() => setSelectedTeacher(null)}
            >
              <div className="flex flex-col lg:flex-row items-center">
                {/* Image */} 
                <div className="relative w-64 h-64 rounded-full mb-8 lg:mb-0 lg:mr-12">
                  <div className={`absolute inset-0 rounded-full shadow-xl transition-opacity duration-500
                    ${selectedTeacher === teacher.id ? 'opacity-100' : 'opacity-0'}`}  
                  />
                  <img 
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-64 h-64 rounded-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="text-center lg:text-left">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-700 
                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {teacher.name}
                  </h3>
                  <p className={`text-lg uppercase tracking-wider mb-4 transition-colors duration-700
                    ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {teacher.title}  
                  </p>
                  <p className={`text-lg mb-6 transition-colors duration-700
                    ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {teacher.philosophy}
                  </p> 
                  <div className="text-sm mb-6 space-x-2">
                    {teacher.specialties.map((specialty, idx) => (
                      <span key={idx} className={`inline-block px-3 py-1 rounded-full transition-colors duration-300 
                        ${isDarkMode
                          ? 'bg-green-400/20 text-green-400 hover:bg-green-400/30'  
                          : 'bg-green-600/10 text-green-600 hover:bg-green-600/20'}`}>
                        {specialty} 
                      </span>
                    ))}
                  </div>
                  <p className={`text-sm transition-colors duration-700
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                    {teacher.experience} • {teacher.schedule}
                  </p>
                </div>
              </div>
            </div>  
          ))}
        </div>
      </div>
      
    </section>
  );

};

export default Team;