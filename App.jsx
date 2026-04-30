import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  User, 
  Share2, 
  Home, 
  ExternalLink, 
  Github, 
  Youtube, 
  Instagram, 
  MessageSquare,
  Smartphone,
  Ghost
} from 'lucide-react';

// --- Components ---

const Nav = ({ isWireframe }) => {
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Websites', path: '/websites', icon: LayoutGrid },
    { name: 'About Me', path: '/about', icon: User },
    { name: 'Socials', path: '/socials', icon: Share2 },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full border transition-all duration-500 ${
      isWireframe 
        ? 'bg-white border-black text-black' 
        : 'bg-black/40 backdrop-blur-xl border-cyan-500/30 text-white'
    }`}>
      <div className="flex items-center gap-8">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path} 
              to={link.path}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive 
                  ? (isWireframe ? 'underline' : 'text-cyan-400') 
                  : (isWireframe ? 'opacity-50 hover:opacity-100' : 'text-gray-400 hover:text-white')
              }`}
            >
              <Icon size={16} />
              <span className="hidden md:inline">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const WireframeBox = ({ children, className = "", height = "h-48" }) => (
  <div className={`border border-black bg-gray-50 flex items-center justify-center relative overflow-hidden ${height} ${className}`}>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full border-b border-black/10 rotate-12 origin-top-left" />
      <div className="absolute top-0 left-0 w-full h-full border-b border-black/10 -rotate-12 origin-top-right" />
    </div>
    <span className="relative z-10 text-xs font-mono text-gray-400 uppercase tracking-widest">{children}</span>
  </div>
);

// --- Pages ---

const HomePage = ({ isWireframe }) => (
  <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
    <section className="text-center mb-20">
      {isWireframe ? (
        <div className="space-y-6">
          <div className="w-24 h-24 border border-black mx-auto flex items-center justify-center">LOGO</div>
          <h1 className="text-6xl font-bold uppercase tracking-tighter">Patrick Molina</h1>
          <p className="text-xl font-mono">[TAGLINE: Building the future of entertainment]</p>
          <div className="flex justify-center gap-4">
            <div className="px-8 py-3 border border-black">CTA: VIEW WORK</div>
            <div className="px-8 py-3 border border-black bg-black text-white">CTA: ABOUT ME</div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            Patrick_Mango
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            PATRICK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">MOLINA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            Building the future of entertainment through modern web experiences.
          </p>
        </div>
      )}
    </section>

    <section className="mb-20">
      <h2 className={`text-2xl font-bold mb-8 ${isWireframe ? 'uppercase border-b border-black pb-2' : 'text-white'}`}>
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {['McCrack', 'McCrack Chat'].map((project) => (
          <div key={project} className={isWireframe ? "" : "group"}>
            <WireframeBox className={isWireframe ? "" : "rounded-2xl border-cyan-500/20 bg-gray-900/50"}>
              {project} PREVIEW
            </WireframeBox>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h3 className={`text-xl font-bold ${isWireframe ? '' : 'text-white'}`}>{project}</h3>
                <p className="text-sm text-gray-500">Entertainment Platform</p>
              </div>
              <div className={`p-2 border ${isWireframe ? 'border-black' : 'border-cyan-500/30 text-cyan-400'}`}>
                <ExternalLink size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const WebsitesPage = ({ isWireframe }) => (
  <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
    <h1 className={`text-4xl font-bold mb-12 ${isWireframe ? 'uppercase' : 'text-white'}`}>Websites</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {['McCrack', 'McCrack Google Sites', 'McCrack Chat', 'McCrack Tube'].map((site) => (
        <div key={site} className={`p-4 border ${isWireframe ? 'border-black' : 'border-white/10 bg-white/5 rounded-2xl'}`}>
          <WireframeBox height="h-40" className="mb-4">{site} IMAGE</WireframeBox>
          <h3 className={`font-bold mb-2 ${isWireframe ? '' : 'text-white'}`}>{site}</h3>
          <p className="text-sm text-gray-500 mb-4">Description of the project goes here. Built for entertainment.</p>
          <div className={`w-full py-2 text-center text-sm border ${isWireframe ? 'border-black' : 'border-cyan-500/50 text-cyan-400 rounded-lg'}`}>
            Visit Site
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = ({ isWireframe }) => (
  <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <WireframeBox height="h-96" className={isWireframe ? "" : "rounded-3xl border-white/10 bg-gray-900"}>
        PHOTO OF PATRICK
      </WireframeBox>
      <div>
        <h1 className={`text-4xl font-bold mb-6 ${isWireframe ? 'uppercase' : 'text-white'}`}>About Me</h1>
        <div className={`space-y-4 text-lg ${isWireframe ? 'font-mono' : 'text-gray-400 font-light'}`}>
          <p>I'm a 14-year-old developer who has been coding for two years.</p>
          <p>My passion lies in creating entertainment websites that people love to use. I focus on modern aesthetics and smooth user experiences.</p>
          <p>Currently building the "McCrack" ecosystem of tools and platforms.</p>
        </div>
        
        <div className="mt-10">
          <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isWireframe ? '' : 'text-cyan-400'}`}>Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Tailwind', 'JavaScript', 'HTML/CSS', 'Framer Motion'].map(tech => (
              <span key={tech} className={`px-3 py-1 text-xs border ${isWireframe ? 'border-black' : 'border-white/20 text-white rounded-full'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SocialsPage = ({ isWireframe }) => {
  const socials = [
    { name: 'TikTok', icon: Smartphone, color: 'hover:text-pink-500' },
    { name: 'Instagram', icon: Instagram, color: 'hover:text-purple-500' },
    { name: 'Discord', icon: MessageSquare, color: 'hover:text-indigo-500' },
    { name: 'GitHub', icon: Github, color: 'hover:text-white' },
    { name: 'SnapChat', icon: Ghost, color: 'hover:text-yellow-400' },
    { name: 'YouTube', icon: Youtube, color: 'hover:text-red-500' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
      <h1 className={`text-4xl font-bold mb-4 ${isWireframe ? 'uppercase' : 'text-white'}`}>Connect</h1>
      <p className="text-gray-500 mb-12 text-lg">Find me on these platforms</p>
      
      <div className="grid gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a 
              key={social.name}
              href="#"
              className={`flex items-center justify-between p-6 border transition-all ${
                isWireframe 
                  ? 'border-black hover:bg-black hover:text-white' 
                  : `border-white/10 bg-white/5 rounded-2xl text-white ${social.color} hover:border-cyan-500/50`
              }`}
            >
              <div className="flex items-center gap-4">
                <Icon size={24} />
                <span className="text-xl font-bold">{social.name}</span>
              </div>
              <ExternalLink size={20} className="opacity-50" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isWireframe, setIsWireframe] = useState(true);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-700 ${isWireframe ? 'bg-white text-black' : 'bg-black text-gray-300'}`}>
        {/* Background for Design Mode */}
        {!isWireframe && (
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
          </div>
        )}

        <Nav isWireframe={isWireframe} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage isWireframe={isWireframe} />} />
            <Route path="/websites" element={<WebsitesPage isWireframe={isWireframe} />} />
            <Route path="/about" element={<AboutPage isWireframe={isWireframe} />} />
            <Route path="/socials" element={<SocialsPage isWireframe={isWireframe} />} />
          </Routes>
        </main>

        {/* Mode Toggle */}
        <button 
          onClick={() => setIsWireframe(!isWireframe)}
          className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
            isWireframe 
              ? 'bg-black text-white border-black' 
              : 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
          }`}
        >
          {isWireframe ? 'View Design' : 'View Wireframe'}
        </button>

        <footer className={`py-10 text-center text-xs opacity-50 ${isWireframe ? 'border-t border-black' : ''}`}>
          © 2026 PATRICK MOLINA. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </Router>
  );
}
