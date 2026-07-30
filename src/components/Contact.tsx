import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message body is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Post request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Trigger canvas confetti success animation
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#a78bfa', '#f472b6', '#67e8f9']
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success notification after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const contactDetails = [
    {
      icon: <Mail className="text-purple-400" size={20} />,
      label: 'Email Me',
      value: 'shaikroohi147@gmail.com',
      href: 'mailto:shaikroohi147@gmail.com',
    },
    {
      icon: <Phone className="text-pink-400" size={20} />,
      label: 'Call Me',
      value: '+91 88854 73205',
      href: 'tel:+918885473205',
    },
    {
      icon: <MapPin className="text-cyan-400" size={20} />,
      label: 'Location',
      value: 'Chittoor, Andhra Pradesh, India',
      href: 'https://maps.google.com/?q=Chittoor,AndhraPradesh',
    },
  ];

  return (
    <section id="contact" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">Get In Touch</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Connect With Me
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Details Panel (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-white tracking-wide">
              Let\'s discuss your next project!
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I am open to M.Tech placements, internship partnerships, and research engineering projects. Send a message, connect on LinkedIn, or drop an email!
            </p>

            <div className="space-y-4 pt-4">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center space-x-4 border-glow text-left"
                >
                  <div className="p-2.5 bg-slate-950/60 rounded-xl border border-white/5 shadow-inner shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">{detail.label}</h4>
                    <p className="text-white text-sm font-semibold mt-0.5 font-sans break-all">{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Grid */}
            <div className="flex space-x-3 pt-6">
              <a
                href="https://github.com/roohi147"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/15 transition-all duration-300 shadow-md cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/shaikroohinaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/15 transition-all duration-300 shadow-md cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form Panel (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-glow">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-950/75 border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-0 focus:border-purple-500 transition-colors text-sm font-medium ${
                      errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-slate-800'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                      <AlertTriangle size={11} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-950/75 border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-0 focus:border-purple-500 transition-colors text-sm font-medium ${
                      errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-slate-800'
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                      <AlertTriangle size={11} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-950/75 border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-0 focus:border-purple-500 transition-colors text-sm font-medium ${
                      errors.subject ? 'border-red-500/70 focus:border-red-500' : 'border-slate-800'
                    }`}
                    placeholder="Project Inquiry / Job Placement Opportunity"
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                      <AlertTriangle size={11} /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-950/75 border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-0 focus:border-purple-500 transition-colors text-sm font-medium ${
                      errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-slate-800'
                    }`}
                    placeholder="Tell me more about your requirements..."
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs font-mono mt-1 flex items-center gap-1">
                      <AlertTriangle size={11} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Success Message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    <span>Thank you! Your message has been sent successfully. ✨</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-50 cursor-pointer border border-white/10"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
