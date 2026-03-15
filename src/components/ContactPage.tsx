import { motion } from 'motion/react';
import { ArrowLeft, Mail, MapPin, Phone, Send, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContactPageProps {
  onBack: () => void;
  onServicesClick?: () => void;
}

export function ContactPage({ onBack, onServicesClick }: ContactPageProps) {
  useEffect(() => {
    // Add any side effects here if needed
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'uneschakroun@gmail.com',
      link: 'mailto:uneschakroun@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+212 707227263',
      link: 'tel:+212707227263'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Worldwide Working from Morocco',
      link: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-16 sm:pt-20 pb-16 sm:pb-32"
    >
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-8 sm:mb-12 group min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider text-sm sm:text-base">Back to Home</span>
        </button>

        <div className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-[0.3em] mb-3 sm:mb-4 block">04.</span>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] uppercase">
              Contact Me
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Let's collaborate and create something extraordinary together. 
              Reach out to discuss your next project.
            </p>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24"
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/30 active:border-[#c1ff72]/30 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredCard === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
                <div className="relative z-10">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/30 mb-4 sm:mb-6 group-hover:text-[#c1ff72] transition-colors" />
                  <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mb-2 font-bold">
                    {info.label}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-base sm:text-lg hover:text-white/80 transition-colors block break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-base sm:text-lg break-words">{info.value}</div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border border-white/10 p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 uppercase tracking-tight">
            Start a Project
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs sm:text-sm uppercase tracking-wider text-white/60 block font-bold">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 px-3 sm:px-4 py-3 sm:py-3.5 focus:border-[#c1ff72] focus:outline-none transition-colors uppercase tracking-wide text-sm sm:text-base min-h-[44px]"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm uppercase tracking-wider text-white/60 block font-bold">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 px-3 sm:px-4 py-3 sm:py-3.5 focus:border-[#c1ff72] focus:outline-none transition-colors uppercase tracking-wide text-sm sm:text-base min-h-[44px]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-xs sm:text-sm uppercase tracking-wider text-white/60 block font-bold">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-3 sm:px-4 py-3 sm:py-3.5 focus:border-[#c1ff72] focus:outline-none transition-colors uppercase tracking-wide text-sm sm:text-base min-h-[44px]"
                placeholder="Your Company"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs sm:text-sm uppercase tracking-wider text-white/60 block font-bold">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border border-white/20 px-3 sm:px-4 py-3 sm:py-3.5 focus:border-[#c1ff72] focus:outline-none transition-colors resize-none uppercase tracking-wide text-sm sm:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-wider font-bold group text-sm sm:text-base min-h-[44px]"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-white/40 uppercase tracking-wider text-xs sm:text-sm">
            Available for freelance opportunities
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}