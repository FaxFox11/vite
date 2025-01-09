import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, 
  Instagram, Facebook, ArrowRight,
  MessageCircle, Flower2
} from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'Probestunde'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      id: 'location',
      icon: MapPin,
      title: 'Besuche uns',
      content: 'Yogastraße 42\n10115 Berlin',
      detail: 'Zentral gelegen, nur 5 Minuten vom U-Bahnhof'
    },
    {
      id: 'hours',
      icon: Clock,
      title: 'Öffnungszeiten',
      content: 'Mo-Fr: 7:00 - 21:00\nSa-So: 9:00 - 19:00',
      detail: 'Feiertags gelten besondere Öffnungszeiten'
    },
    {
      id: 'contact',
      icon: MessageCircle,
      title: 'Kontaktiere uns',
      content: 'Tel: +49 30 1234567\nMail: info@zengarden.de',
      detail: 'Wir antworten innerhalb von 24 Stunden'
    }
  ];

  return (
    <section className={`relative py-24 transition-colors duration-700
      ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-700 
          ${isDarkMode ? 'opacity-30' : 'opacity-10'}`}>
          <div className="absolute -top-1/4 right-0 w-96 h-96 bg-green-200 rounded-full 
            mix-blend-multiply filter blur-3xl animate-drift" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full 
            mix-blend-multiply filter blur-3xl animate-drift-slow" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-6">
            <Flower2 className={`w-12 h-12 transition-colors duration-700
              ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <h2 className={`text-4xl font-serif mb-6 transition-colors duration-700
            ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Verbinde dich mit uns
          </h2>
          <p className={`text-lg transition-colors duration-700
            ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ob Fragen, Anregungen oder der Wunsch nach einer Probestunde – 
            wir sind für dich da.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`p-8 rounded-2xl transition-all duration-500
            ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Dein Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-colors duration-300
                      ${isDarkMode 
                        ? 'bg-slate-700 text-white placeholder-gray-400 border-slate-600' 
                        : 'bg-white text-gray-900 placeholder-gray-400 border-gray-200'}
                      border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-colors duration-300
                      ${isDarkMode 
                        ? 'bg-slate-700 text-white placeholder-gray-400 border-slate-600' 
                        : 'bg-white text-gray-900 placeholder-gray-400 border-gray-200'}
                      border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="max@example.com"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-colors duration-300
                      ${isDarkMode 
                        ? 'bg-slate-700 text-white placeholder-gray-400 border-slate-600' 
                        : 'bg-white text-gray-900 placeholder-gray-400 border-gray-200'}
                      border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="+49 123 45678900"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Ich interessiere mich für
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-colors duration-300
                      ${isDarkMode 
                        ? 'bg-slate-700 text-white border-slate-600' 
                        : 'bg-white text-gray-900 border-gray-200'}
                      border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  >
                    <option value="Probestunde">Kostenlose Probestunde</option>
                    <option value="Mitgliedschaft">Mitgliedschaft</option>
                    <option value="Einzelstunde">Einzelstunde</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Andere">Andere Anfrage</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Deine Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl transition-colors duration-300
                      ${isDarkMode 
                        ? 'bg-slate-700 text-white placeholder-gray-400 border-slate-600' 
                        : 'bg-white text-gray-900 placeholder-gray-400 border-gray-200'}
                      border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="Deine Nachricht an uns..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full group flex items-center justify-center space-x-2 px-6 py-3 
                  rounded-xl font-medium transition-all duration-300
                  ${isDarkMode 
                    ? 'bg-green-500 hover:bg-green-400 text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'}`}
              >
                <span>Nachricht senden</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 
                  group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="group"
                onMouseEnter={() => setActiveInfo(info.id)}
                onMouseLeave={() => setActiveInfo(null)}
              >
                <div className={`p-6 rounded-2xl transition-all duration-500
                  ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-50 hover:bg-white'}
                  ${activeInfo === info.id ? 'shadow-lg' : ''}`}>
                  
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl transition-colors duration-500
                      ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
                      <info.icon className={`w-6 h-6 transition-colors duration-500
                        ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-medium mb-2 transition-colors duration-500
                        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {info.title}
                      </h3>
                      <p className={`whitespace-pre-line mb-2 transition-colors duration-500
                        ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {info.content}
                      </p>
                      <p className={`text-sm transition-colors duration-500
                        ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {info.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className={`p-6 rounded-2xl transition-colors duration-500
              ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
              <h3 className={`text-lg font-medium mb-4 transition-colors duration-500
                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Folge uns
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Facebook, label: 'Facebook' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`p-3 rounded-xl transition-colors duration-300
                      ${isDarkMode 
                        ? 'bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-green-400' 
                        : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-green-600'}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;