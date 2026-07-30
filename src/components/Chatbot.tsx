import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  text: string;
  sender: 'bot' | 'user';
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: 'Hi! I am Roohi\'s AI assistant. Ask me anything about her skills, experience, projects, or grades!', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);

  const quickPrompts = [
    'What is her CGPA?',
    'Tell me about NeuroLearnAI',
    'List her ML skills',
    'How do I hire her?',
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { text, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulate AI response logic
    setTimeout(() => {
      let replyText = '';
      const query = text.toLowerCase();

      if (query.includes('cgpa') || query.includes('grades') || query.includes('gpa') || query.includes('marks')) {
        replyText = 'Shaik Roohi Naaz has an outstanding CGPA of 9.3/10 at VIT (Vellore Institute of Technology) in her Integrated M.Tech Software Engineering course.';
      } else if (query.includes('neuro') || query.includes('burnout') || query.includes('study')) {
        replyText = 'NeuroLearnAI is an AI-based system designed by Roohi to predict student academic burnout. It utilizes XGBoost & LightGBM classifiers combined with SHAP values to explain the key fatigue drivers.';
      } else if (query.includes('skill') || query.includes('languages') || query.includes('technologies')) {
        replyText = 'Roohi is highly skilled in: \n- Programming: Python, Java, C++, JS\n- AI/ML: Scikit-learn, XGBoost, LightGBM, SVM, Deep Learning, SHAP\n- Web: React.js, Node.js, Express.js, SQL\n- Concepts: DSA, OOP, DBMS';
      } else if (query.includes('hire') || query.includes('contact') || query.includes('phone') || query.includes('email')) {
        replyText = 'You can reach Roohi directly via:\n- Email: shaikroohi147@gmail.com\n- Phone: +91 88854 73205\n- Or submit the Contact form at the bottom of the page!';
      } else if (query.includes('project') || query.includes('blockchain') || query.includes('cancer')) {
        replyText = 'Roohi has built several advanced projects:\n1. NeuroLearnAI (Burnout Predictor)\n2. Crop Yield Predictor Platform\n3. Breast Cancer Prediction Model\n4. Blockchain-based Industrial Hazard Monitor (Ethereum + Solidity)';
      } else if (query.includes('coordinator') || query.includes('placement') || query.includes('experience') || query.includes('intern') || query.includes('cognifyz') || query.includes('saiket')) {
        replyText = 'Roohi has professional experience in:\n- Machine Learning Intern at Saiket Systems (June - July 2026): Designed, trained, and optimized predictive models and workflows.\n- Web Development Intern at Cognifyz IT Solutions (June - July 2026): Designed, implemented, and deployed responsive and interactive web interfaces.\n- Placement Student Coordinator at VIT (July 2026 - Present): Managed student-recruiter pipelines, drive coordination, and corporate relations.';
      } else if (query.includes('cert') || query.includes('oracle') || query.includes('google') || query.includes('deloitte') || query.includes('tata') || query.includes('forage')) {
        replyText = 'Roohi holds several professional credentials and certifications, including:\n- Tata Cybersecurity Analyst Job Simulation (Feb 2026) via Forage\n- Deloitte Cyber Job Simulation (Jan 2026) via Forage\n- Deloitte Technology Job Simulation (Dec 2025) via Forage\n- Oracle Cloud Infrastructure (OCI) AI Foundations Associate\n- Google AI Essentials & Google Prompting Essentials\n- Yuva AI for All (NASSCOM FutureSkills Prime)';
      } else if (query.includes('patent') || query.includes('publication') || query.includes('paper') || query.includes('research')) {
        replyText = 'Yes! Roohi has a published patent:\n- Title: Collaborative Edge-Intelligent Micro-Green Point Tokenization System for Privacy-Preserving Ghost Load Management in Residential Buildings\n- Application/Publication Number: 202641075271\n- Publication Date: June 26, 2026\n- Co-inventor: Dr. R. Charanya';
      } else {
        replyText = 'I am programmed with local details about Roohi! You can ask about her "CGPA", "NeuroLearnAI", "ML skills", "patent", "certifications", "experience", or "contact details".';
      }

      setMessages((prev) => [...prev, { text: replyText, sender: 'bot' }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Trigger Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.55)] cursor-pointer text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <MessageSquare size={22} className="animate-pulse" />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[460px] bg-[#050212] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900 shrink-0">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold tracking-wide">Roohi\'s AI Agent</h4>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                  <span className="text-[10px] text-slate-400 font-mono">ONLINE</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Container */}
          <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-950/20 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2.5 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                {/* Profile Icon */}
                <div className={`p-1.5 rounded-lg text-xs shrink-0 ${
                  msg.sender === 'bot' 
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/15' 
                    : 'bg-pink-500/10 text-pink-400 border border-pink-500/15'
                }`}>
                  {msg.sender === 'bot' ? <Bot size={13} /> : <User size={13} />}
                </div>

                {/* Msg text bubble */}
                <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-purple-600 text-white rounded-tr-none'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts Helper */}
          <div className="px-4 py-2 bg-slate-950/30 flex flex-wrap gap-1.5 shrink-0 border-t border-slate-900/60 max-h-[85px] overflow-y-auto">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="text-[10px] font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 px-2 py-1 rounded-lg cursor-pointer transition-colors duration-200"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            className="p-3 border-t border-slate-900 bg-slate-950 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-900/70 text-slate-100 rounded-xl px-3 py-2 border border-slate-800 outline-none text-xs focus:border-purple-500/80 transition-colors focus:ring-0 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <Send size={13} />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
export default Chatbot;
