import React, { useState, useEffect } from 'react';
import { Navbar } from './sections/Navbar';
import { Banner } from './sections/Banner';
import { Hero } from './sections/Hero';
import { Kursplan } from './sections/Kursplan';
import { Team } from './sections/Team';
import { Courses } from './sections/Courses';
import { Philosophy } from './sections/Philosophy';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with system theme preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Content Sections */}
      <main className="pb-10"> {/* Added padding to account for banner */}
        <div id="home">
          <Hero isDarkMode={isDarkMode} />
        </div>
        <div id="kurse">
          <Courses isDarkMode={isDarkMode} />
        </div>
        <div id="kursplan">
          <Kursplan isDarkMode={isDarkMode} />
        </div>
        <div id="lehrer">
          <Team isDarkMode={isDarkMode} />
        </div>
        <div id="philosophie">
          <Philosophy isDarkMode={isDarkMode} />
        </div>
        <div id="kontakt">
          <Contact isDarkMode={isDarkMode} />
        </div>
      </main>

      {/* Footer and Banner */}
      <Footer isDarkMode={isDarkMode} />
      <Banner isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;