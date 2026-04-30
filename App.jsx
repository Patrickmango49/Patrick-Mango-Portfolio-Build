import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ExternalLink, Github, Instagram, MessageSquare, Smartphone, Ghost, Youtube, Globe } from 'lucide-react';

const projects = [
  { name: 'McCrack', type: 'Entertainment Platform', href: '#' },
  { name: 'McCrack Chat', type: 'Real-time Community Chat', href: '#' },
  { name: 'McCrack Tube', type: 'Short-form Video Hub', href: '#' },
  { name: 'McCrack Google Sites', type: 'Content & Resources', href: '#' },
];

const socials = [
  { name: 'TikTok', icon: Smartphone, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Discord', icon: MessageSquare, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Snapchat', icon: Ghost, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

function Nav() {
  return (
    <header className="topbar">
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/websites">Websites</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/socials">Socials</NavLink>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">Patrick_Mango</p>
      <h1>Patrick Molina</h1>
      <p className="lead">Building modern entertainment websites with great UX and fast performance.</p>
      <div className="card-grid">
        {projects.slice(0, 2).map((project) => (
          <article className="card" key={project.name}>
            <div className="card-media"><Globe size={28} /> {project.name}</div>
            <h3>{project.name}</h3>
            <p>{project.type}</p>
            <a href={project.href}>View project <ExternalLink size={16} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function WebsitesPage() {
  return (
    <section>
      <h2>Websites</h2>
      <div className="card-grid">
        {projects.map((site) => (
          <article className="card" key={site.name}>
            <div className="card-media"><Globe size={28} /> Website Preview</div>
            <h3>{site.name}</h3>
            <p>{site.type}</p>
            <a href={site.href}>Visit site <ExternalLink size={16} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="about">
      <div className="portrait">PM</div>
      <div>
        <h2>About Me</h2>
        <p>I'm a 14-year-old developer with two years of coding experience.</p>
        <p>I build entertainment products and focus on clean visuals, snappy interactions, and accessible interfaces.</p>
        <div className="chips">
          {['React', 'JavaScript', 'HTML/CSS', 'UI Design', 'Product Thinking'].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialsPage() {
  return (
    <section>
      <h2>Connect</h2>
      <p className="lead">Find me on these platforms.</p>
      <div className="social-list">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a className="social" href={social.href} key={social.name}>
              <span><Icon size={20} /> {social.name}</span>
              <ExternalLink size={16} />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Nav />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/socials" element={<SocialsPage />} />
          </Routes>
        </main>
        <footer>© 2026 Patrick Molina</footer>
      </div>
    </Router>
  );
}
