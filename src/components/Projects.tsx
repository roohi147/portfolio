import React, { useState } from 'react';
import { Search, Code2, ArrowRight } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  category: 'AI/ML' | 'Blockchain/IoT' | 'WebDev';
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  problemStatement: string;
  architecture: string;
  workflow: string[];
  futureImprovements: string[];
  overview: string;
}

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projectsData: Project[] = [
    {
      id: 'neurolearn',
      name: 'NeuroLearnAI – Study Pattern & Burnout Prediction',
      category: 'AI/ML',
      description: 'An intelligent AI-based system designed to predict student academic burnout and analyze cognitive studying patterns using machine learning and Explainable AI (SHAP).',
      techStack: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'React.js', 'Flask'],
      features: [
        'Real-time behavioral and academic workload questionnaire evaluator.',
        'Burnout prediction model utilizing high-precision gradient boosted trees.',
        'Interpretability logs using SHAP to display feature impact weights for each user.',
        'Intelligent study session recommendations based on student focus peaks.'
      ],
      githubUrl: 'https://github.com/roohi147/NeuroLearnAI',
      problemStatement: 'Academic pressure and unstructured studying habits cause severe burnout in university cohorts. Standard systems do not provide clear individual explanations of why a student is fatiguing.',
      architecture: 'User interface captures student logs -> Flask REST API runs pre-trained XGBoost and LightGBM model pipelines -> SHAP explainer extracts feature weights -> JSON payload renders detailed graph dashboards in React.',
      workflow: [
        'User completes study logging session',
        'Data undergoes feature extraction and PCA dimensionality reduction',
        'Model predicts burnout probability index',
        'SHAP values are calculated to identify main fatigue drivers',
        'Results and recommendations are displayed'
      ],
      futureImprovements: [
        'Integration of wearable biosensors to track heart-rate variability (HRV) for bio-feedback.',
        'Federated learning integration to support cross-university data training while securing privacy.'
      ],
      overview: 'NeuroLearnAI transforms student counseling by providing transparent, ML-driven stress metrics. Instead of black-box numbers, it shows students which features (e.g. screen time, night study hours) are contributing most to their stress index.'
    },
    {
      id: 'cropyield',
      name: 'Crop Yield Prediction Platform',
      category: 'AI/ML',
      description: 'A data-driven machine learning application that predicts regional agricultural yields based on soil configurations, environmental metrics, and crop rotations.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'LightGBM', 'MLP Regressor', 'SVR', 'EDA', 'Feature Engineering'],
      features: [
        'Advanced Feature Engineering (Yield per Area, Production per Rainfall, Rainfall Deviation).',
        'Multicollinearity & Variance Thresholding feature selection pipelines.',
        'Proximity analytics using Euclidean, Manhattan, and Cosine similarity metrics.',
        'Comparative evaluation of 7 Regressors (Random Forest, XGBoost, LightGBM, SVR, Neural Networks).'
      ],
      githubUrl: 'https://github.com/roohi147/Crop-Yield-Prediction',
      problemStatement: 'Predicting agricultural yield accurately is challenging due to complex interactions between local rainfall deviation, pesticide/fertilizer usage efficiency, and regional crop variations.',
      architecture: 'Crop Yield Dataset -> Outlier Removal & Feature Engineering -> Correlation & Variance Threshold Selection -> Proximity (Cosine/Euclidean/Manhattan) & Chi-Square Analysis -> Multi-Regressor Modeling (Tree Ensembles, MLP Neural Nets, SVR) -> Evaluation Metrics (MSE, MAE, R²).',
      workflow: [
        'Perform Exploratory Data Analysis (EDA) and clean missing/duplicate records',
        'Remove outliers using Interquartile Range (IQR) box plots on key yield-relative features',
        'Perform feature engineering to extract soil/meteorological efficiency indices',
        'Filter features using a correlation matrix and variance thresholding',
        'Assess categorical dependencies with Chi-Square contingency testing',
        'Train and compare 7 different regressors, from linear models to deep neural nets (MLP)'
      ],
      futureImprovements: [
        'Implement hyperparameter optimization (GridSearchCV/Optuna) for ensemble models.',
        'Integrate deep learning LSTM architectures for temporal crop yield forecasting.',
        'Deploy the best-performing model (Random Forest/LightGBM) using FastAPI and Docker.'
      ],
      overview: 'An advanced crop yield analytics pipeline that leverages machine learning to predict agricultural yield. The project features rigorous data mining processes, including IQR outlier cleansing, similarity analysis (Euclidean, Cosine, Manhattan), and statistical testing. It evaluates seven machine learning models, achieving top performance with Random Forest, XGBoost, and LightGBM models (R² score up to 0.96).'
    },
    {
      id: 'breastcancer',
      name: 'Breast Cancer Prediction System',
      category: 'AI/ML',
      description: 'A clinical decision support model trained on gene expression profiles and cytological attributes to assist oncologists in classifying breast tumors.',
      techStack: ['Python', 'Scikit-learn', 'SVM', 'Neural Networks', 'PCA', 'Feature Selection'],
      features: [
        'Binary benign vs malignant tissue classification.',
        'Dimensionality reduction via Principal Component Analysis (PCA) for cleaner processing.',
        'Comparative analytics table detailing accuracy, precision, and recall across SVM & MLPs.',
        'Receiver Operating Characteristic (ROC) curve visual reports.'
      ],
      githubUrl: 'https://github.com/roohi147/Breast-Cancer-Prediction',
      problemStatement: 'Manual histopathological inspection of cell nuclei is time-consuming and prone to human diagnostic variations in early-stage breast cancer screening.',
      architecture: 'Fine Needle Aspirate (FNA) diagnostic dataset -> Principal component mapping -> Support Vector Classification with Radial Basis Function kernel -> Flask API.',
      workflow: [
        'Input nuclear morphometric descriptors',
        'Normalize values to standard scalar ranges',
        'Transform multidimensional attributes using PCA components',
        'Classify tissue sample (Benign / Malignant)',
        'Display classification confidence matrix'
      ],
      futureImprovements: [
        'Connecting multi-modal diagnostic data (both histology images and genomic sequences).',
        'Exporting report logs automatically into hospital electronic health records (EHR) databases.'
      ],
      overview: 'By analyzing cytological features, this system acts as a verification checkpoint for oncologists. It isolates the most important feature vectors, reducing diagnostic lag and false alarms.'
    },
    {
      id: 'blockchainfire',
      name: 'Blockchain IoT Fire & Chemical Leak System',
      category: 'Blockchain/IoT',
      description: 'An IoT-enabled industrial hazard monitoring application with a Node.js backend and Ethereum blockchain smart contracts for secure, tamper-proof logs.',
      techStack: ['Node.js', 'Express.js', 'Ethereum Blockchain', 'Solidity Smart Contracts', 'IoT Sensors', 'REST APIs'],
      features: [
        'Real-time MQ-2 smoke and combustible gas sensor monitoring simulations.',
        'Immutable event logging to an Ethereum private testnet to prevent logs tampering.',
        'Automated Solidity smart contract alerts triggered on hazardous levels thresholds.',
        'Secure dashboard presenting sensor telemetry history.'
      ],
      githubUrl: 'https://github.com/roohi147/Blockchain-Industrial-Monitoring',
      problemStatement: 'Industrial incident logs can be manipulated post-accident to bypass regulatory fines. A secure, automated, and tamper-resistant hazard logging system is required.',
      architecture: 'IoT Node MCU captures telemetry -> Node.js Express server receives REST logs -> Web3.js pushes event state changes to Solidity Smart Contract -> Logs saved permanently on blockchain ledger.',
      workflow: [
        'Smoke/gas sensor threshold breach occurs',
        'Backend server receives notification payload',
        'Smart contract executes logIncidence method',
        'Transaction mining logs incident hash index',
        'Alarm status updates on dashboard dynamically'
      ],
      futureImprovements: [
        'Transitioning to Polygon or Arbitrum networks to decrease gas fees for high-frequency logs.',
        'Integrating IPFS storage solutions for sensor video evidence logs.'
      ],
      overview: 'This project secures industrial workspaces by ensuring incident reports are mathematically locked into a blockchain database, creating a permanent audit trail for security regulators.'
    }
  ];

  const categories = ['All', 'AI/ML', 'Blockchain/IoT'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'All' || 
      project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="absolute left-1/4 top-1/3 w-[400px] h-[400px] bg-purple-600/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">My Work</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Projects Portfolio
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          {/* Category tabs */}
          <div className="flex bg-slate-900/55 p-1 rounded-xl border border-slate-800/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search by name or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950/65 rounded-xl border border-slate-800/90 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500/80 transition-colors text-sm font-medium"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="perspective-1000 h-[380px] w-full group relative"
            >
              {/* Card Inner Wrapper */}
              <div className="w-full h-full transform-style-3d transition-transform duration-700 ease-out group-hover:rotate-y-180 relative cursor-pointer">
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-glow">
                  <div className="space-y-4">
                    {/* Category Label */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md uppercase">
                        {project.category}
                      </span>
                      <Code2 size={18} className="text-slate-500" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-wide leading-snug">
                      {project.name}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-4 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack & info button */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4 max-h-[75px] overflow-hidden">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-pink-400 font-bold">
                          +{project.techStack.length - 5} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-xs font-mono font-bold text-pink-400 tracking-wider uppercase group-hover:text-white transition-colors duration-300">
                      <span>Hover to View Details</span>
                      <ArrowRight size={12} className="ml-1 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.15)] bg-slate-950/95">
                  <div className="space-y-4">
                    <h4 className="text-lg font-heading font-extrabold text-white border-b border-white/5 pb-2">
                      Key Highlights
                    </h4>
                    
                    <ul className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="text-slate-300 text-xs leading-relaxed flex items-start space-x-2">
                          <span className="text-pink-500 font-bold mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Back Actions */}
                  <div className="flex items-center justify-between gap-4 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-center shadow-[0_0_15px_rgba(139,92,246,0.3)] shrink-0 border border-white/10"
                    >
                      View Details & Architecture
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Projects;
