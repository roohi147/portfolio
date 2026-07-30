import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error';
}

export const CodingTerminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'System Initializing... OK', type: 'output' },
    { text: 'Loading roohi147-dev-profile v1.0.0...', type: 'output' },
    { text: 'Type "help" to view all available commands.', type: 'output' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFirstRender = useRef(true);

  // Auto-scroll terminal to bottom on history change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    terminalBodyRef.current?.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = inputVal.trim().toLowerCase();
    if (!command) return;

    const newHistory = [...history, { text: `guest@srn.dev:~$ ${inputVal}`, type: 'input' as const }];
    
    let output: TerminalLine[] = [];

    switch (command) {
      case 'help':
        output = [
          { text: 'Available Commands:', type: 'output' },
          { text: '  about      - Display brief professional background summary', type: 'output' },
          { text: '  skills     - List technical superpowers & domains', type: 'output' },
          { text: '  projects   - Show key portfolio projects details', type: 'output' },
          { text: '  contact    - Print direct emails, phone, and profile links', type: 'output' },
          { text: '  neofetch   - Render technical hardware specifications summary', type: 'output' },
          { text: '  clear      - Clear the console history logs', type: 'output' },
        ];
        break;
      case 'about':
        output = [
          { text: 'SHAIK ROOHI NAAZ', type: 'output' },
          { text: '----------------', type: 'output' },
          { text: '- Integrated M.Tech Software Engineering Student at VIT (CGPA: 9.3/10)', type: 'output' },
          { text: '- Focus areas: Artificial Intelligence, Deep Learning models, Full Stack Web development', type: 'output' },
          { text: '- Passionate about solving real-world challenges with high code cleanliness & clean architecture.', type: 'output' },
        ];
        break;
      case 'skills':
        output = [
          { text: 'Languages   : Python, Java, C, C++, JavaScript (ES6+)', type: 'output' },
          { text: 'AI & ML     : Scikit-learn, XGBoost, LightGBM, Random Forest, SVM, Deep Learning, SHAP', type: 'output' },
          { text: 'Web & DB    : React.js, Node.js, Express.js, SQL, HTML5, CSS3', type: 'output' },
          { text: 'Tools & CS  : Git, GitHub, Jupyter, Google Colab, DSA, OOP, DBMS, Software Engineering', type: 'output' },
        ];
        break;
      case 'projects':
        output = [
          { text: '1. NeuroLearnAI - Study Pattern & Burnout Predictor (XGBoost, SHAP, React)', type: 'output' },
          { text: '2. Crop Yield Prediction Platform (Random Forest, XGBoost, EDA, Pandas)', type: 'output' },
          { text: '3. Breast Cancer Prediction System (SVM, Multilayer Perceptrons, PCA dimension reduction)', type: 'output' },
          { text: '4. Blockchain Industrial Fire System (Solidity Smart Contracts, Web3, Node.js, IoT)', type: 'output' },
        ];
        break;
      case 'contact':
        output = [
          { text: 'Email    : shaikroohi147@gmail.com', type: 'output' },
          { text: 'Phone    : +91 88854 73205', type: 'output' },
          { text: 'GitHub   : github.com/roohi147', type: 'output' },
          { text: 'LinkedIn : linkedin.com/in/shaikroohinaaz (Simulated)', type: 'output' },
          { text: 'Location : Chittoor, Andhra Pradesh, India', type: 'output' },
        ];
        break;
      case 'neofetch':
        output = [
          { text: '               .,-:;//;:=,      guest@srn.dev', type: 'output' },
          { text: '           . :H@@@MM@M#H/.,+%;  -------------', type: 'output' },
          { text: '        ,/X+ +M@@M@MM@@@MS:-    OS: VIT-OS v9.3', type: 'output' },
          { text: '       ,+@M@M@MM@@@@@@@H%:-     Kernel: React-19-TypeScript', type: 'output' },
          { text: '      /*MM@@@@@@@@@@@@M@+--     Uptime: 24/7 Placement Ready', type: 'output' },
          { text: '     /*M@@@@@@@@@@@@@@@@M/      Shell: zsh (interactive)', type: 'output' },
          { text: '     .H@@@@@@@@@@@@@@@@@@X.     Resolution: 3840x2160 UX/UI', type: 'output' },
          { text: '     .M@@@@@@@@@@@@@@@@@@@.     CPU: AI-Enhanced Software Engineer', type: 'output' },
          { text: '      #@@@@@@@@@@@@@@@@@@M      GPU: Deep Learning Tensor Core (SHAP)', type: 'output' },
          { text: '      +X@@@@@@@@@@@@@@@@%       RAM: 16GB-DSA / 100% OOP', type: 'output' },
          { text: '        .H@@@@@@@@@@@@@.        Active Role: Placements Student Coordinator', type: 'output' },
        ];
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        output = [{ text: `bash: command not found: ${command}. Type "help" for a list of commands.`, type: 'error' as const }];
    }

    setHistory([...newHistory, ...output]);
    setInputVal('');
  };

  return (
    <section className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">Interactive</h2>
          <p className="text-heading text-3xl font-extrabold text-white">
            Developer Playground Console
          </p>
        </div>

        {/* Terminal Container */}
        <div
          onClick={handleTerminalClick}
          className="w-full bg-[#050212]/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-slate-300 h-96 flex flex-col cursor-text hover:border-purple-500/30 transition-colors duration-300"
        >
          {/* Mac-like Control Bar */}
          <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-slate-900 shrink-0">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="flex items-center space-x-1 text-slate-500">
              <TerminalIcon size={12} />
              <span className="text-[10px] tracking-wide font-bold">roohi147 -- bash</span>
            </div>
            <div className="flex space-x-2 text-slate-600">
              <Minimize2 size={12} />
              <Maximize2 size={12} />
              <X size={12} />
            </div>
          </div>

          {/* Terminal Screen Outputs */}
          <div ref={terminalBodyRef} className="flex-1 overflow-y-auto p-5 space-y-2.5 scrollbar-thin select-text">
            {history.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.type === 'input'
                    ? 'text-purple-400 font-semibold'
                    : line.type === 'error'
                    ? 'text-red-400'
                    : 'text-slate-300 whitespace-pre-wrap'
                }
              >
                {line.text}
              </div>
            ))}
          </div>

          {/* Input Prompt Area */}
          <form onSubmit={handleCommandSubmit} className="bg-slate-950/50 p-4 border-t border-slate-900 flex items-center shrink-0">
            <span className="text-pink-500 font-bold shrink-0 mr-2">guest@srn.dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs sm:text-sm border-none p-0 focus:ring-0 focus:outline-none"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="Type your command..."
            />
          </form>
        </div>

      </div>
    </section>
  );
};
export default CodingTerminal;
