import React, { useState } from 'react';
import { Calendar, Clock, User, Heart, ArrowRight, Filter } from 'lucide-react';

interface KursplanProps {
  isDarkMode: boolean;
}

export const Kursplan: React.FC<KursplanProps> = ({ isDarkMode }) => {
  const [selectedDay, setSelectedDay] = useState('Montag');
  const [selectedLevel, setSelectedLevel] = useState('Alle');

  const weekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  const levels = ['Alle', 'Anfänger', 'Mittelstufe', 'Fortgeschritten'];

  const courses = [
    // Montag
    {
      time: '07:00 - 08:15',
      name: 'Morgen Flow',
      trainer: 'Anna Schmidt',
      level: 'Anfänger',
      spots: 5,
      day: 'Montag'
    },
    {
      time: '09:30 - 10:45',
      name: 'Vinyasa Yoga',
      trainer: 'Michael Weber',
      level: 'Mittelstufe',
      spots: 3,
      day: 'Montag'
    },
    {
      time: '12:00 - 13:15',
      name: 'Mittagsyoga',
      trainer: 'Lisa Müller',
      level: 'Anfänger',
      spots: 6,
      day: 'Montag'
    },
    {
      time: '17:00 - 18:15',
      name: 'Yin Yoga',
      trainer: 'Sarah Mueller',
      level: 'Anfänger',
      spots: 8,
      day: 'Montag'
    },
    {
      time: '19:00 - 20:30',
      name: 'Ashtanga',
      trainer: 'Thomas Berg',
      level: 'Fortgeschritten',
      spots: 4,
      day: 'Montag'
    },
    // Dienstag
    {
      time: '06:30 - 07:45',
      name: 'Power Yoga',
      trainer: 'Michael Weber',
      level: 'Mittelstufe',
      spots: 7,
      day: 'Dienstag'
    },
    {
      time: '09:00 - 10:15',
      name: 'Gentle Flow',
      trainer: 'Anna Schmidt',
      level: 'Anfänger',
      spots: 4,
      day: 'Dienstag'
    },
    {
      time: '12:30 - 13:45',
      name: 'Lunch Break Yoga',
      trainer: 'Sarah Mueller',
      level: 'Mittelstufe',
      spots: 6,
      day: 'Dienstag'
    },
    {
      time: '18:00 - 19:15',
      name: 'Hatha Yoga',
      trainer: 'Lisa Müller',
      level: 'Anfänger',
      spots: 5,
      day: 'Dienstag'
    },
    // Mittwoch
    {
      time: '07:00 - 08:15',
      name: 'Vinyasa Flow',
      trainer: 'Thomas Berg',
      level: 'Mittelstufe',
      spots: 8,
      day: 'Mittwoch'
    },
    {
      time: '10:00 - 11:15',
      name: 'Yoga für Senioren',
      trainer: 'Lisa Müller',
      level: 'Anfänger',
      spots: 6,
      day: 'Mittwoch'
    },
    {
      time: '17:30 - 18:45',
      name: 'After Work Yoga',
      trainer: 'Anna Schmidt',
      level: 'Mittelstufe',
      spots: 4,
      day: 'Mittwoch'
    },
    {
      time: '19:30 - 21:00',
      name: 'Kundalini Yoga',
      trainer: 'Sarah Mueller',
      level: 'Fortgeschritten',
      spots: 5,
      day: 'Mittwoch'
    },
    // Donnerstag
    {
      time: '08:00 - 09:15',
      name: 'Morning Flow',
      trainer: 'Michael Weber',
      level: 'Anfänger',
      spots: 7,
      day: 'Donnerstag'
    },
    {
      time: '12:00 - 13:15',
      name: 'Power Lunch Yoga',
      trainer: 'Thomas Berg',
      level: 'Mittelstufe',
      spots: 5,
      day: 'Donnerstag'
    },
    {
      time: '16:30 - 17:45',
      name: 'Yin & Yang',
      trainer: 'Lisa Müller',
      level: 'Mittelstufe',
      spots: 6,
      day: 'Donnerstag'
    },
    {
      time: '18:30 - 19:45',
      name: 'Ashtanga Basic',
      trainer: 'Sarah Mueller',
      level: 'Fortgeschritten',
      spots: 4,
      day: 'Donnerstag'
    },
    // Freitag
    {
      time: '07:30 - 08:45',
      name: 'Energizing Flow',
      trainer: 'Anna Schmidt',
      level: 'Mittelstufe',
      spots: 8,
      day: 'Freitag'
    },
    {
      time: '10:00 - 11:15',
      name: 'Gentle Yoga',
      trainer: 'Lisa Müller',
      level: 'Anfänger',
      spots: 6,
      day: 'Freitag'
    },
    {
      time: '13:00 - 14:15',
      name: 'Lunch Flow',
      trainer: 'Michael Weber',
      level: 'Mittelstufe',
      spots: 5,
      day: 'Freitag'
    },
    {
      time: '17:00 - 18:15',
      name: 'Happy Hour Yoga',
      trainer: 'Sarah Mueller',
      level: 'Anfänger',
      spots: 7,
      day: 'Freitag'
    },
    // Samstag
    {
      time: '09:00 - 10:30',
      name: 'Weekend Flow',
      trainer: 'Thomas Berg',
      level: 'Mittelstufe',
      spots: 10,
      day: 'Samstag'
    },
    {
      time: '11:00 - 12:15',
      name: 'Family Yoga',
      trainer: 'Anna Schmidt',
      level: 'Anfänger',
      spots: 8,
      day: 'Samstag'
    },
    {
      time: '14:00 - 15:30',
      name: 'Workshop: Inversions',
      trainer: 'Michael Weber',
      level: 'Fortgeschritten',
      spots: 6,
      day: 'Samstag'
    },
    // Sonntag
    {
      time: '10:00 - 11:30',
      name: 'Sunday Morning Yoga',
      trainer: 'Lisa Müller',
      level: 'Anfänger',
      spots: 12,
      day: 'Sonntag'
    },
    {
      time: '12:00 - 13:15',
      name: 'Meditation & Yoga',
      trainer: 'Sarah Mueller',
      level: 'Mittelstufe',
      spots: 8,
      day: 'Sonntag'
    },
    {
      time: '15:00 - 16:30',
      name: 'Restorative Yoga',
      trainer: 'Anna Schmidt',
      level: 'Anfänger',
      spots: 10,
      day: 'Sonntag'
    }
  ];

  const filteredCourses = courses.filter(course => 
    course.day === selectedDay && 
    (selectedLevel === 'Alle' || course.level === selectedLevel)
  );

  return (
    <section className={`py-24 transition-colors duration-700
      ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-serif mb-4 transition-colors duration-700
            ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Unser Kursplan
          </h2>
          <p className={`max-w-2xl mx-auto text-lg transition-colors duration-700
            ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Finde den perfekten Kurs für deine Yoga-Praxis. 
            Von sanften Einsteigerkursen bis zu fordernden Flows.
          </p>
        </div>

        {/* Day Selection */}
        <div className="mb-8 overflow-x-auto">
          <div className={`inline-flex p-1 rounded-xl transition-colors duration-700
            ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
            {weekDays.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${selectedDay === day 
                    ? (isDarkMode 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-600 text-white')
                    : (isDarkMode 
                      ? 'text-gray-300 hover:text-green-400' 
                      : 'text-gray-600 hover:text-green-600')
                  }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-8">
          <div className={`inline-flex items-center space-x-2 p-1 rounded-lg transition-colors duration-700
            ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
            <Filter className={`w-4 h-4 ml-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1 rounded-md text-sm transition-all duration-300
                  ${selectedLevel === level
                    ? (isDarkMode 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-600 text-white')
                    : (isDarkMode 
                      ? 'text-gray-300 hover:text-green-400' 
                      : 'text-gray-600 hover:text-green-600')
                  }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={`${course.day}-${course.time}-${index}`}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300
                ${isDarkMode 
                  ? 'bg-slate-800 hover:bg-slate-700' 
                  : 'bg-white hover:bg-gray-50'}
                shadow-lg hover:shadow-xl`}
            >
              {/* Background Decoration */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute right-0 top-0 w-64 h-64 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2
                  ${isDarkMode ? 'bg-green-900/20' : 'bg-green-100/60'}`} />
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between">
                {/* Time and Course Info */}
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl transition-colors duration-300
                    ${isDarkMode ? 'bg-slate-700' : 'bg-green-50'}`}>
                    <Clock className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-1 transition-colors duration-300
                      ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      {course.time}
                    </p>
                    <h3 className={`text-lg font-medium mb-2 transition-colors duration-300
                      ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {course.name}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className={`w-4 h-4 mr-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm transition-colors duration-300
                          ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {course.trainer}
                        </span>
                      </div>
                      <div className={`text-sm px-2 py-1 rounded-full transition-colors duration-300
                        ${isDarkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        {course.level}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <div className="mt-4 sm:mt-0">
                  <button className={`group/btn flex items-center space-x-2 px-4 py-2 rounded-full 
                    transition-all duration-300
                    ${isDarkMode 
                      ? 'bg-green-500 hover:bg-green-400 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'}`}>
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      <span>Buchen</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 
                      group-hover/btn:translate-x-1" />
                  </button>
                  <p className={`text-sm mt-2 text-center transition-colors duration-300
                    ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Noch {course.spots} Plätze frei
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

export default Kursplan;