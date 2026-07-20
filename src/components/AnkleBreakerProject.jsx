import React from 'react';

const mediaRoot = '/media/anklebreaker';

function VideoFigure({ src, poster, title, description, featured = false }) {
  return (
    <figure className={featured ? 'media-figure featured-media' : 'media-figure'}>
      <div className="media-frame">
        <video controls muted={featured} autoPlay={featured} loop={featured} playsInline poster={`${mediaRoot}/${poster}`} preload={featured ? 'auto' : 'metadata'}>
          <source src={`${mediaRoot}/${src}`} type="video/mp4" />
        </video>
      </div>
      <figcaption><strong>{title}</strong><span>{description}</span></figcaption>
    </figure>
  );
}

export default function AnkleBreakerProject() {
  return (
    <section className="case-study alternate-study" id="anklebreaker">
      <div className="section-shell case-study-shell">
        <header className="case-header">
          <div>
            <h2>AnkleBreaker</h2>
            <p>A top-down physics project where movement controls a heavy ball attached to the player through a simulated chain. There is no conventional attack input.</p>
          </div>
          <div className="project-meta">
            <span>Unreal Engine 5.6</span><span>C++ and Blueprint</span><span>Individual project</span>
          </div>
        </header>

        <VideoFigure featured src="core-flail-combat.mp4" poster="core-combat.webp" title="Core flail combat" description="Circling and changing direction builds momentum, making player movement the main combat input." />

        <section className="project-section two-column-section" aria-labelledby="ankle-setup-title">
          <div className="project-copy">
            <h3 id="ankle-setup-title">Physics setup</h3>
            <p>The flail uses three rigid chain links, a simulated ball, and physics constraints. Shared setup rules keep angular limits, projection, damping, collision, continuous collision detection, and substepping consistent across the chain.</p>
            <p>Its position and impact strength come from player movement, chain tension, collision, and solver behaviour rather than an animation.</p>
          </div>
          <figure className="media-figure">
            <div className="media-frame technical-frame"><img src={`${mediaRoot}/constraint-setup.webp`} alt="Unreal Editor component hierarchy and viewport showing the flail constraint setup" loading="lazy" /></div>
            <figcaption><strong>Constraint setup</strong><span>The component hierarchy and three-link chain shown in the Unreal Editor.</span></figcaption>
          </figure>
        </section>

        <section className="project-section" aria-labelledby="ankle-damage-title">
          <div className="project-copy">
            <h3 id="ankle-damage-title">Momentum and reactions</h3>
            <p>Runtime mass and velocity are converted into momentum for damage and knockback. Minimum thresholds, effective enemy mass, and clamped launch forces keep the physical result readable and controllable.</p>
          </div>
          <div className="media-grid">
            <VideoFigure src="enemy-responses.mp4" poster="core-combat.webp" title="Enemy reactions" description="Flail impacts produce damage and controlled knockback based on momentum." />
            <VideoFigure src="joint-spinner.mp4" poster="spinner.webp" title="Rotating hazard" description="A motor-driven constrained arm applies the same impact model to the player and enemies." />
          </div>
        </section>
      </div>
    </section>
  );
}
