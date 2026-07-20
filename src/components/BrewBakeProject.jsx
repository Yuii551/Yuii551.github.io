import React from 'react';
import { Download } from 'lucide-react';

const mediaRoot = '/media/brew-and-bake';
const playableBuild = 'https://drive.google.com/file/d/1VRgmWxB2D9oc7y2IkwjTOTAQdxs4egLE/view?usp=drive_link';

const phases = [
  ['Morning', 'Prepare and bake cookie inventory before opening.', 'baking.webp', 'The morning baking workspace and recipe board'],
  ['Afternoon', 'Complete orders through manual coffee interactions.', 'afternoon-phase.webp', 'The espresso workspace during afternoon service'],
  ['Night', 'Restock, buy upgrades, save, and begin the next day.', 'night-phase.webp', 'The upgrade laptop available during the night phase'],
];

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

function ImageFigure({ src, alt, title, description }) {
  return (
    <figure className="media-figure">
      <div className="media-frame"><img src={`${mediaRoot}/${src}`} alt={alt} loading="lazy" /></div>
      <figcaption><strong>{title}</strong><span>{description}</span></figcaption>
    </figure>
  );
}

export default function BrewBakeProject() {
  return (
    <section className="case-study" id="brew-bake">
      <div className="section-shell case-study-shell">
        <header className="case-header">
          <div>
            <h2>Brew &amp; Bake</h2>
            <p>A first-person cafe simulation built around preparing cookies, manually making espresso, serving orders, and reinvesting each day&apos;s earnings.</p>
          </div>
          <div className="project-meta">
            <span>Unreal Engine 5.6</span><span>Blueprint</span><span>Solo project</span><span>Stable packaged build</span>
          </div>
          <a className="download-link" href={playableBuild} target="_blank" rel="noreferrer"><Download size={17} aria-hidden="true" />Download build</a>
        </header>

        <VideoFigure featured src="espresso-workflow.mp4" poster="brewing.webp" title="Espresso workflow" description="Grinding, tamping, machine setup, brewing, and completing an order as one continuous interaction chain." />

        <section className="project-section" aria-labelledby="brew-loop-title">
          <div className="project-copy">
            <h3 id="brew-loop-title">Gameplay loop</h3>
            <p>Each day moves through preparation, service, and progression. The afternoon shift turns prepared inventory into income, which is then used for supplies and upgrades before the next day.</p>
          </div>
          <div className="phase-gallery">
            {phases.map(([name, description, image, alt]) => <ImageFigure key={name} src={image} alt={alt} title={name} description={description} />)}
          </div>
          <VideoFigure src="complete-day.mp4" poster="upgrades.webp" title="Complete cafe day" description="Preparation, service, upgrades, saving, and sleep shown from beginning to end." />
        </section>

        <section className="project-section two-column-section" aria-labelledby="brew-interaction-title">
          <div className="project-copy">
            <h3 id="brew-interaction-title">Interaction prompts</h3>
            <p>A line trace finds the focused actor. The held item and machine state determine which actions are valid, and the HUD shows only those actions.</p>
            <p>This replaced permanently displayed controls after playtesting showed that the multi-step stations needed more immediate guidance.</p>
          </div>
          <VideoFigure src="context-prompts.mp4" poster="brewing.webp" title="Context-sensitive prompts" description="Prompts update as the grinder, portafilter, tamper, and espresso machine change state." />
        </section>

        <section className="project-section two-column-section reverse-section" aria-labelledby="brew-baking-title">
          <div className="project-copy">
            <h3 id="brew-baking-title">Baking system</h3>
            <p>The baking process covers ingredient validation, mixing, dough handling, tray placement, baking, grading, and storage. Each step passes its result into the next instead of treating baking as a single interaction.</p>
          </div>
          <VideoFigure src="baking-workflow.mp4" poster="baking.webp" title="Baking workflow" description="A cookie batch moving from recipe selection through storage." />
        </section>

        <section className="project-section two-column-section" aria-labelledby="brew-tutorial-title">
          <div className="project-copy">
            <h3 id="brew-tutorial-title">Tutorials</h3>
            <p>Static instructions were easy to miss during longer tasks. The revised tutorial groups instructions by day phase and pairs each page with a looping demonstration that also works in the packaged build.</p>
          </div>
          <VideoFigure src="tutorial-system.mp4" poster="tutorial.webp" title="In-game tutorial" description="Players can revisit each procedure without leaving the game." />
        </section>

        <section className="project-section" aria-labelledby="brew-progression-title">
          <div className="project-copy">
            <h3 id="brew-progression-title">Progression and saving</h3>
            <p>Earnings fund lower supplier prices, better sale returns, and faster production. Inventory, upgrades, currency, and day progress are saved when the player sleeps, while player settings remain separate.</p>
          </div>
          <div className="media-grid">
            <ImageFigure src="upgrades.webp" alt="Brew and Bake upgrade shop" title="Upgrades" description="Supplier discounts, stronger sales, and faster brewing affect later shifts." />
            <ImageFigure src="ingredients.webp" alt="Brew and Bake ingredient shop" title="Supplies" description="Ingredient stock and pricing connect the night phase to the next morning." />
          </div>
        </section>
      </div>
    </section>
  );
}
