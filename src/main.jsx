import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Code2,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  TerminalSquare,
  Wrench,
} from 'lucide-react';
import BrewBakeCaseStudy from './components/BrewBakeCaseStudy';
import AnkleBreakerCaseStudy from './components/AnkleBreakerCaseStudy';
import './styles.css';

const links = {
  github: 'https://github.com/Yuii551',
  linkedin: 'https://www.linkedin.com/in/tan-yi-han/',
  email: 'mailto:yihan551@gmail.com',
};

const skills = [
  {
    title: 'Game Development',
    icon: Sparkles,
    items: ['Unreal Engine 5', 'Unreal C++', 'Blueprints', 'Gameplay Systems', 'Tools Development', 'Gameplay UI Implementation'],
  },
  {
    title: 'Programming',
    icon: Code2,
    items: ['C++', 'C#'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'Perforce', 'Rider'],
  },
];

const projects = [
  {
    title: 'Brew & Bake',
    type: 'First-person cafe simulation game',
    engine: 'Unreal Engine 5.6',
    image: '/media/brew-and-bake/brewing.webp',
    imageAlt: 'Grinding coffee during an afternoon shift in Brew and Bake',
    href: '#brew-bake',
    download: 'https://drive.google.com/file/d/1VRgmWxB2D9oc7y2IkwjTOTAQdxs4egLE/view?usp=drive_link',
    tags: ['Interaction Framework', 'Baking System', 'Espresso Machine', 'Economy', 'Upgrades', 'UI'],
    highlights: [
      'Built modular cafe interactions for station-based gameplay loops.',
      'Implemented production systems for baking, espresso preparation, purchases, and progression.',
      'Created readable UI flows that support fast iteration during playtesting.',
    ],
  },
  {
    title: 'AnkleBreaker',
    type: 'Top-down physics arena assignment',
    engine: 'Unreal Engine 5.6',
    image: '/media/anklebreaker/core-combat.webp',
    imageAlt: 'The player swinging a chained flail into pursuing enemies in AnkleBreaker',
    href: '#anklebreaker',
    tags: ['Unreal C++', 'Chaos Physics', 'Physics Constraints', 'Momentum Damage', 'Enemy Reactions'],
    highlights: [
      'Built a multi-body flail controlled indirectly through player movement.',
      'Converted runtime mass and velocity into momentum-based damage and knockback.',
      'Applied constraints again through a motor-driven rotating hazard in Level 2.',
    ],
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
        <Skills />
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
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Unreal Engine Gameplay Programmer</p>
        <h1>Yi Han</h1>
        <p className="hero-summary">
          Computer Science student specializing in game development and Unreal Engine gameplay programming, focused on
          building clear, reusable gameplay systems and tools.
        </p>
        <div className="hero-actions" aria-label="Profile links">
          <IconLink href={links.github} label="GitHub" icon={Github} />
          <IconLink href={links.linkedin} label="LinkedIn" icon={Linkedin} />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        centered
        label="Project Showcase"
        title="Selected gameplay programming work"
        description="Projects focused on complete gameplay loops, reusable systems, and practical player-facing implementation."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.imageAlt || ''} loading="lazy" />
      <div className="project-body">
        <div className="project-heading">
          <div>
            <h3>{project.title}</h3>
            <p>{project.type}</p>
          </div>
          <span>{project.engine}</span>
        </div>
        <ul className="tag-list" aria-label={`${project.title} systems`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.highlights && (
          <ul className="highlight-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        {(project.href || project.download) && (
          <div className="project-actions">
            {project.href && (
              <a className="project-link" href={project.href}>
                View case study
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            {project.download && (
              <a className="project-link" href={project.download} target="_blank" rel="noreferrer">
                Download build
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionHeading
        centered
        label="Skills"
        title="Practical stack for gameplay programming"
        description="Core strengths are grouped around Unreal gameplay development, programming languages, and production tools."
      />
      <div className="skills-grid">
        {skills.map(({ title, icon: Icon, items }) => (
          <article className="skill-card" key={title}>
            <div className="skill-title">
              <Icon size={20} aria-hidden="true" />
              <h3>{title}</h3>
            </div>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell" id="experience">
      <SectionHeading
        centered
        label="Experience"
        title="Gameplay Programming Intern"
        description="Nimbus Games"
      />
      <article className="experience-panel">
        <TerminalSquare size={22} aria-hidden="true" />
        <div>
          <h3>Unreal Engine gameplay development</h3>
          <ul className="highlight-list compact">
            <li>Developed gameplay systems in Unreal Engine 5 using C++ and Blueprints.</li>
            <li>Built reusable tools and systems for faster iteration across gameplay features.</li>
            <li>Participated in testing workflows, feedback cycles, and implementation refinement.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <SectionHeading
        centered
        label="Contact"
        title="Get in touch"
        description="For professional inquiries, contact me by email or connect through GitHub and LinkedIn."
      />
      <div className="contact-links">
        <IconLink href={links.email} label="yihan551@gmail.com" icon={Mail} external={false} />
        <IconLink href={links.github} label="GitHub" icon={Github} />
        <IconLink href={links.linkedin} label="LinkedIn" icon={Linkedin} />
      </div>
    </section>
  );
}

function SectionHeading({ label, title, description, centered = false }) {
  return (
    <div className={centered ? 'section-heading centered-heading' : 'section-heading'}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function IconLink({ href, label, icon: Icon, external = true }) {
  return (
    <a
      className="icon-link"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      title={label}
    >
      <Icon size={19} aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <p>Yi Han | Gameplay Programmer</p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
