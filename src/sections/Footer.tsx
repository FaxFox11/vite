import React from 'react';
import { 
  Flower2, Heart, Instagram, Facebook, 
  ArrowRight, Mail, MapPin, Phone 
} from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    hauptmenu: [
      { name: 'Home', href: '#' },
      { name: 'Kurse', href: '#' },
      { name: 'Kursplan', href: '#' },
      { name: 'Lehrer', href: '#' },
      { name: 'Philosophie', href: '#' },
      { name: 'Kontakt', href: '#' }
    ],
    kurse: [
      { name: 'Vinyasa Flow', href: '#' },
      { name: 'Yin Yoga', href: '#' },
      { name: 'Ashtanga', href: '#' },
      { name: 'Kundalini', href: '#' },
      { name: 'Meditation', href: '#' }
    ],
    info: [
      { name: 'Preise & Pakete', href: '#' },
      { name: 'Probestunde', href: '#' },
      { name: 'Workshops', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    rechtliches: [
      { name: 'Impressum', href: '#' },
      { name: 'Datenschutz', href: '#' },
      { name: 'AGB', href: '#' }
    ]
  };

  return (
    <footer className={`transition-colors duration-700
      ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Flower2 className={`w-8 h-8 transition-colors duration-500
                ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`text-xl font-serif transition-colors duration-500
                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Zen Garden
              </span>
            </div>
            <p className={`text-sm transition-colors duration-500
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Dein Raum für Yoga, Meditation und inneres Wachstum im Herzen Berlins.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Mail, label: 'Email' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`p-2 rounded-xl transition-colors duration-300
                    ${isDarkMode 
                      ? 'text-gray-400 hover:text-green-400 hover:bg-slate-800' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-100'}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {[
            { title: 'Hauptmenü', items: navigation.hauptmenu },
            { title: 'Kurse', items: navigation.kurse },
            { title: 'Info', items: navigation.info }
          ].map((group, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className={`text-sm font-medium transition-colors duration-500
                ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      className={`text-sm transition-colors duration-300
                        ${isDarkMode 
                          ? 'text-gray-400 hover:text-green-400' 
                          : 'text-gray-600 hover:text-green-600'}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className={`mt-16 pt-8 border-t transition-colors duration-500
          ${isDarkMode ? 'border-slate-800' : 'border-gray-200'}`}>
          <div className="max-w-md">
            <h3 className={`text-sm font-medium mb-4 transition-colors duration-500
              ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Newsletter
            </h3>
            <p className={`text-sm mb-4 transition-colors duration-500
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Erhalte Inspirationen, News und Specials direkt in dein Postfach.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Deine E-Mail Adresse"
                className={`flex-1 px-4 py-2 rounded-xl text-sm transition-colors duration-300
                  ${isDarkMode 
                    ? 'bg-slate-800 text-white placeholder-gray-400 border-slate-700' 
                    : 'bg-white text-gray-900 placeholder-gray-400 border-gray-200'}
                  border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />
              <button
                type="submit"
                className={`group flex items-center space-x-2 px-4 py-2 rounded-xl 
                  text-sm font-medium transition-colors duration-300
                  ${isDarkMode 
                    ? 'bg-green-500 hover:bg-green-400 text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'}`}
              >
                <span>Anmelden</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 
                  group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t transition-colors duration-500
        ${isDarkMode ? 'border-slate-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`text-sm transition-colors duration-500
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} Zen Garden. Alle Rechte vorbehalten.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {navigation.rechtliches.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`text-sm transition-colors duration-300
                    ${isDarkMode 
                      ? 'text-gray-400 hover:text-green-400' 
                      : 'text-gray-600 hover:text-green-600'}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2">
              <span className={`text-sm transition-colors duration-500
                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Made with
              </span>
              <Heart className={`w-4 h-4 transition-colors duration-500
                ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`text-sm transition-colors duration-500
                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                in Berlin
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;