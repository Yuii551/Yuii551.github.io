import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import BrewBakeCaseStudy from './components/BrewBakeProject';
import AnkleBreakerCaseStudy from './components/AnkleBreakerProject';
import './simple.css';

const links = {
  github: 'https://github.com/Yuii551',
  linkedin: 'https://www.linkedin.com/in/tan-yi-han/',
  email: 'mailto:yihan551@gmail.com',
};

const projects = [
  {
    title: 'Brew & Bake',
    description:
      'First-person cafe simulation with baking, espresso preparation, economy, upgrades, tutorials, saving, and UI implemented in Blueprint.',
    details: 'Unreal Engine 5.6 / Blueprint / Packaged build',
    image: '/media/brew-and-bake/brewing.webp',
    imageAlt: 'Preparing espresso during the afternoon service phase in Brew and Bake',
    href: '#brew-bake',
  },
  {
    title: 'AnkleBreaker',
    description:
      'Three-day physics project where player movement controls a constrained flail and impact strength is calculated from momentum.',
    details: 'Unreal Engine 5.6 / C++ and Blueprint / Editor build',
    image: '/media/anklebreaker/core-combat.webp',
    imageAlt: 'The player swinging a chained flail into pursuing enemies in AnkleBreaker',
    href: '#anklebreaker',
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <BrewBakeCaseStudy />
        <AnkleBreakerCaseStudy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <h1>Yi Han</h1>
      <p className="hero-summary">
        I work mainly with Unreal Engine 5, C++, and Blueprints. I enjoy building gameplay systems, figuring out how
        their parts fit together, and turning ideas into something playable.
      </p>
      <div className="link-row" aria-label="Profile links">
        <TextLink href={links.github} label="GitHub" icon={Github} />
        <TextLink href={links.linkedin} label="LinkedIn" icon={Linkedin} />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.title}>
            <a className="project-image" href={project.href} aria-label={`View ${project.title}`}>
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            </a>
            <div className="project-summary">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-details">{project.details}</p>
              <a className="text-link" href={project.href}>
                View project <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell" id="experience">
      <div className="section-title">
        <h2>Experience</h2>
      </div>
      <article className="experience-row">
        <div>
          <h3>Gameplay Programming Intern</h3>
          <p>Nimbus Games</p>
        </div>
        <p className="experience-date">Jul 2025 - Oct 2025 / Hybrid</p>
        <ul>
          <li>Developed gameplay systems in Unreal Engine 5 using C++ and Blueprints.</li>
          <li>Built reusable internal tools and systems for gameplay development.</li>
          <li>Worked through testing, feedback, and implementation iterations with the team.</li>
        </ul>
      </article>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <p className="contact-copy">For professional inquiries, contact me by email or through LinkedIn.</p>
      <div className="link-row contact-links">
        <TextLink href={links.email} label="yihan551@gmail.com" icon={Mail} external={false} />
        <TextLink href={links.github} label="GitHub" icon={Github} />
        <TextLink href={links.linkedin} label="LinkedIn" icon={Linkedin} />
      </div>
    </section>
  );
}

function TextLink({ href, label, icon: Icon, external = true }) {
  return (
    <a
      className="text-link"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <Icon size={17} aria-hidden="true" />
      {label}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <p>Yi Han / Gameplay Programmer</p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
