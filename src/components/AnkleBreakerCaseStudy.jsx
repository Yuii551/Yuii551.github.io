import React from 'react';
import { Activity, CircleDot, Gauge, Link2, Move, RotateCw } from 'lucide-react';

const mediaRoot = '/media/anklebreaker';

function VideoFigure({ src, poster, title, description, featured = false }) {
  return (
    <figure className={featured ? 'media-figure media-figure-featured' : 'media-figure'}>
      <div className="media-frame">
        <video
          controls
          muted={featured}
          autoPlay={featured}
          loop={featured}
          playsInline
          poster={`${mediaRoot}/${poster}`}
          preload={featured ? 'auto' : 'metadata'}
        >
          <source src={`${mediaRoot}/${src}`} type="video/mp4" />
        </video>
      </div>
      <figcaption>
        <strong>{title}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
}

export default function AnkleBreakerCaseStudy() {
  return (
    <section className="case-study anklebreaker-case-study" id="anklebreaker">
      <div className="section-shell case-study-shell anklebreaker-shell">
        <header className="case-study-header">
          <div>
            <p className="eyebrow">Physics Programming Project</p>
            <h2>AnkleBreaker</h2>
            <p className="case-study-lead">
              A top-down arena game where movement controls a heavy ball attached through a simulated chain. Building
              momentum, changing direction, and managing the weapon&apos;s trajectory replace a conventional attack input.
            </p>
          </div>
          <dl className="project-facts">
            <div>
              <dt>Role</dt>
              <dd>Solo developer</dd>
            </div>
            <div>
              <dt>Engine</dt>
              <dd>Unreal Engine 5.6</dd>
            </div>
            <div>
              <dt>Implementation</dt>
              <dd>C++ and Blueprint</dd>
            </div>
            <div>
              <dt>Footage</dt>
              <dd>Editor gameplay</dd>
            </div>
          </dl>
        </header>

        <VideoFigure
          featured
          src="core-flail-combat.mp4"
          poster="core-combat.webp"
          title="Movement is the attack"
          description="Circling and changing direction builds momentum in the simulated chain, turning player movement into the complete combat input."
        />

        <div className="ownership-strip" aria-label="Project responsibilities">
          <span>Gameplay programming</span>
          <span>Chaos Physics</span>
          <span>Enemy behavior</span>
          <span>UI and game flow</span>
          <span>Two-level design</span>
        </div>

        <section className="case-block" aria-labelledby="ankle-physics-title">
          <div className="case-block-heading centered-heading">
            <p className="eyebrow">Core Physics System</p>
            <h3 id="ankle-physics-title">A simulated weapon, not an animation</h3>
            <p>
              The flail is assembled from rigid bodies and constraints. Its position and impact strength emerge from
              player movement, chain tension, collision, and solver tuning.
            </p>
          </div>

          <div className="chain-flow" aria-label="Flail constraint structure">
            <div><Move size={19} aria-hidden="true" /><strong>Player</strong></div>
            <Link2 size={18} aria-hidden="true" />
            <div><CircleDot size={19} aria-hidden="true" /><strong>Link 1</strong></div>
            <Link2 size={18} aria-hidden="true" />
            <div><CircleDot size={19} aria-hidden="true" /><strong>Link 2</strong></div>
            <Link2 size={18} aria-hidden="true" />
            <div><CircleDot size={19} aria-hidden="true" /><strong>Link 3</strong></div>
            <Link2 size={18} aria-hidden="true" />
            <div><Activity size={19} aria-hidden="true" /><strong>Flail ball</strong></div>
          </div>

          <div className="anklebreaker-physics-grid">
            <article>
              <Link2 size={21} aria-hidden="true" />
              <h4>Constraint chain</h4>
              <p>Locked linear motion and limited angular freedom keep each body connected while preserving a flexible swing.</p>
            </article>
            <article>
              <Gauge size={21} aria-hidden="true" />
              <h4>Momentum damage</h4>
              <p>Runtime mass and velocity drive damage after converting Unreal&apos;s centimetres per second into metres per second.</p>
              <strong className="equation">p = mv</strong>
            </article>
            <article>
              <Activity size={21} aria-hidden="true" />
              <h4>Controlled reactions</h4>
              <p>Minimum damage thresholds, effective enemy mass, and clamped knockback turn physical measurements into readable gameplay.</p>
            </article>
          </div>
        </section>

        <section className="case-block case-block-split" aria-labelledby="constraint-title">
          <div className="case-copy">
            <p className="eyebrow">Editor Structure</p>
            <h3 id="constraint-title">Repeated components, shared rules</h3>
            <p>
              Three chain links, the flail ball, and their constraints are created as repeated components. A shared
              configuration path keeps limits, projection, damping, collision rules, CCD, and substepping consistent.
            </p>
          </div>
          <figure className="media-figure">
            <div className="media-frame technical-frame">
              <img
                src={`${mediaRoot}/constraint-setup.webp`}
                alt="Unreal Editor component hierarchy and viewport showing the three-link flail constraint setup"
                loading="lazy"
              />
            </div>
            <figcaption>
              <strong>Multi-body constraint setup</strong>
              <span>The editor view exposes the component structure without publishing source code.</span>
            </figcaption>
          </figure>
        </section>

        <section className="case-block" aria-labelledby="ankle-applications-title">
          <div className="case-block-heading centered-heading">
            <p className="eyebrow">Supporting Systems</p>
            <h3 id="ankle-applications-title">Physics that changes gameplay</h3>
            <p>
              Enemy reactions extend the momentum model, while Level 2 applies constraints again through a motor-driven
              rotating hazard.
            </p>
          </div>
          <div className="media-grid media-grid-two">
            <VideoFigure
              src="enemy-responses.mp4"
              poster="core-combat.webp"
              title="Enemy response tuning"
              description="Character-based enemies use effective mass and clamped launch forces to produce controllable knockback from flail impacts."
            />
            <VideoFigure
              src="joint-spinner.mp4"
              poster="spinner.webp"
              title="Motorized joint hazard"
              description="A constrained rotating arm uses an angular motor and impact-point velocity to affect both the player and pursuing enemies."
            />
          </div>
        </section>
      </div>
    </section>
  );
}
