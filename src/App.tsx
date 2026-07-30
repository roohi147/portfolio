import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import type { Project } from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy loaded components for code splitting & faster initial paint
const Background3D = lazy(() => import('./components/Background3D'));
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const CodingTerminal = lazy(() => import('./components/CodingTerminal'));
const Chatbot = lazy(() => import('./components/Chatbot'));

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Apply Light/Dark class to root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Intersection Observer for Active Navbar Links
  useEffect(() => {
    if (selectedProject) return; // Disable observer when in detail page

    const sections = [
      'home',
      'about',
      'skills',
      'experience',
      'projects',
      'certifications',
      'achievements',
      'education',
      'leadership',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the middle of screen
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen z-10">
      
      {/* 3D background rendering */}
      <Suspense fallback={<div className="fixed inset-0 bg-[#030014] -z-10" />}>
        <Background3D />
      </Suspense>

      {/* Trailing Custom Cursor Ring */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={selectedProject ? '' : activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Switcher: Portfolio Page / Dedicated Project Detail View */}
      {selectedProject ? (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white font-mono">Loading details...</div>}>
          <ProjectDetails
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        </Suspense>
      ) : (
        <main className="transition-all duration-500">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects onSelectProject={setSelectedProject} />
          <Certifications />
          <Achievements />
          <Education />
          <Leadership />
          <Suspense fallback={<div className="py-8 text-center text-slate-500 font-mono">Loading terminal...</div>}>
            <CodingTerminal />
          </Suspense>
          <Contact />
        </main>
      )}

      {/* Global Page Footer */}
      <Footer />

      {/* Floating AI Chatbot assistant */}
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>

    </div>
  );
};
export default App;
