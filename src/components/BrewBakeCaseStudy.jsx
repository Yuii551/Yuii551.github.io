import React from 'react';
import {
  ArrowRight,
  Coffee,
  Database,
  Download,
  Gamepad2,
  MonitorPlay,
  RefreshCcw,
  Save,
  ShoppingCart,
} from 'lucide-react';

const mediaRoot = '/media/brew-and-bake';
const playableBuild = 'https://drive.google.com/file/d/1VRgmWxB2D9oc7y2IkwjTOTAQdxs4egLE/view?usp=drive_link';

const phases = [
  {
    label: 'Morning',
    title: 'Prepare',
    description: 'Validate recipes, mix dough, and bake inventory before opening for the afternoon shift.',
  },
  {
    label: 'Afternoon',
    title: 'Serve',
    description: 'Grind, tamp, brew, pair coffee with cookies, and earn Frinks through manual service.',
  },
  {
    label: 'Night',
    title: 'Progress',
    description: 'Buy upgrades, restock supplies, save progression, and sleep to begin the next day.',
  },
];

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

function FlowArrow() {
  return <ArrowRight className="flow-arrow" size={18} aria-hidden="true" />;
}

export default function BrewBakeCaseStudy() {
  return (
    <section className="case-study" id="brew-bake">
      <div className="section-shell case-study-shell">
        <header className="case-study-header">
          <div>
            <p className="eyebrow">Featured Case Study</p>
            <h2>Brew &amp; Bake</h2>
            <p className="case-study-lead">
              A first-person cafe simulation built around tactile production systems: prepare cookies before opening,
              manually brew espresso during service, then reinvest the day&apos;s earnings into the next shift.
            </p>
          </div>
          <div className="case-study-meta">
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
                <dd>Blueprint</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Stable packaged build</dd>
              </div>
            </dl>
            <a className="button primary case-download" href={playableBuild} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              Download playable build
            </a>
          </div>
        </header>

        <VideoFigure
          featured
          src="espresso-workflow.mp4"
          poster="brewing.webp"
          title="Manual espresso workflow"
          description="Grinding, tamping, machine setup, brewing, and completing an order form one continuous interaction chain."
        />

        <div className="ownership-strip" aria-label="Project responsibilities">
          <span>Gameplay programming</span>
          <span>System architecture</span>
          <span>UI/UX implementation</span>
          <span>Economy and progression</span>
          <span>Testing and iteration</span>
        </div>

        <section className="case-block" aria-labelledby="cafe-loop-title">
          <div className="case-block-heading centered-heading">
            <p className="eyebrow">Complete Gameplay Loop</p>
            <h3 id="cafe-loop-title">Three phases, one connected economy</h3>
            <p>
              Morning and night remain untimed planning spaces. The afternoon shift converts prepared inventory and
              practiced interactions into income, making each system feed the next.
            </p>
          </div>
          <div className="phase-flow">
            {phases.map((phase, index) => (
              <div className="phase-step" key={phase.label}>
                <span className="phase-index">0{index + 1}</span>
                <p>{phase.label}</p>
                <h4>{phase.title}</h4>
                <span>{phase.description}</span>
              </div>
            ))}
          </div>
          <div className="media-grid media-grid-two">
            <VideoFigure
              src="baking-workflow.mp4"
              poster="baking.webp"
              title="Recipe-to-cookie baking system"
              description="Ingredient validation, timing-based mixing, dough and tray handling, baking, grading, and storage."
            />
            <VideoFigure
              src="complete-day.mp4"
              poster="upgrades.webp"
              title="A complete cafe day"
              description="The preparation, service, upgrade, save, and sleep loop shown end to end."
            />
          </div>
        </section>

        <section className="case-block case-block-split" aria-labelledby="interaction-title">
          <div className="case-copy">
            <p className="eyebrow">Interaction Framework</p>
            <h3 id="interaction-title">The HUD explains the action available now</h3>
            <p>
              A line trace identifies the focused actor. Interface-driven interaction data then accounts for the held
              item and current machine state before the HUD presents only valid actions.
            </p>
            <p>
              This replaced permanently displayed controls after playtesting showed that mechanically dense stations
              needed clearer, contextual guidance.
            </p>
          </div>
          <VideoFigure
            src="context-prompts.mp4"
            poster="brewing.webp"
            title="State-aware prompts"
            description="Available actions change as the grinder, portafilter, tamper, and espresso machine move through their states."
          />
          <div className="system-flow system-flow-wide" aria-label="Context-sensitive interaction flow">
            <div>
              <Gamepad2 size={20} aria-hidden="true" />
              <strong>Input</strong>
              <span>The player requests an interaction.</span>
            </div>
            <FlowArrow />
            <div>
              <RefreshCcw size={20} aria-hidden="true" />
              <strong>Focus</strong>
              <span>A line trace resolves the focused actor.</span>
            </div>
            <FlowArrow />
            <div>
              <Database size={20} aria-hidden="true" />
              <strong>Context</strong>
              <span>The held item and machine state determine valid actions.</span>
            </div>
            <FlowArrow />
            <div>
              <MonitorPlay size={20} aria-hidden="true" />
              <strong>Prompt</strong>
              <span>The HUD displays only the actions available now.</span>
            </div>
          </div>
        </section>

        <section className="case-block case-block-split case-block-reverse" aria-labelledby="tutorial-title">
          <div className="case-copy">
            <p className="eyebrow">Onboarding and Iteration</p>
            <h3 id="tutorial-title">Tutorials became playable references</h3>
            <p>
              Playtests showed that static instructions were easy to miss during multi-step tasks. I replaced them with
              an in-game reference organized by day phase, pairing concise instructions with looping demonstrations.
            </p>
          </div>
          <VideoFigure
            src="tutorial-system.mp4"
            poster="tutorial.webp"
            title="In-game video tutorial"
            description="Players can revisit any morning, afternoon, or night procedure without leaving the game."
          />
          <div className="system-flow system-flow-wide" aria-label="Tutorial content pipeline">
            <div>
              <Database size={20} aria-hidden="true" />
              <strong>Content</strong>
              <span>Each page stores its title, instructions, and video.</span>
            </div>
            <FlowArrow />
            <div>
              <MonitorPlay size={20} aria-hidden="true" />
              <strong>Navigation</strong>
              <span>Category and page controls select the requested procedure.</span>
            </div>
            <FlowArrow />
            <div>
              <Coffee size={20} aria-hidden="true" />
              <strong>Presentation</strong>
              <span>The interface loads concise text and packaged looping media.</span>
            </div>
          </div>
        </section>

        <section className="case-block" aria-labelledby="progression-title">
          <div className="case-block-heading centered-heading">
            <p className="eyebrow">Progression and Persistence</p>
            <h3 id="progression-title">Upgrades change the next shift</h3>
            <p>
              Frinks earned during service fund lower supplier prices, improved sale returns, and faster production.
              Runtime progression is persisted separately from player settings and reset deliberately for a new game.
            </p>
          </div>
          <div className="image-pair">
            <figure className="media-figure">
              <div className="media-frame">
                <img src={`${mediaRoot}/upgrades.webp`} alt="Brew and Bake upgrade shop" loading="lazy" />
              </div>
              <figcaption>
                <strong>Meaningful upgrade choices</strong>
                <span>Supplier discounts, stronger sales, and faster brewing connect progression to daily play.</span>
              </figcaption>
            </figure>
            <figure className="media-figure">
              <div className="media-frame">
                <img src={`${mediaRoot}/ingredients.webp`} alt="Brew and Bake ingredient shop" loading="lazy" />
              </div>
              <figcaption>
                <strong>Economy feeds preparation</strong>
                <span>Ingredient inventory and pricing make the night shop relevant to the next morning&apos;s plan.</span>
              </figcaption>
            </figure>
          </div>
          <div className="persistence-flow" aria-label="Save and reset data flow">
            <div>
              <Database size={21} aria-hidden="true" />
              <strong>Runtime progression</strong>
              <span>Frinks, inventory, upgrades, and current progress live in GameInstance.</span>
            </div>
            <FlowArrow />
            <div>
              <Save size={21} aria-hidden="true" />
              <strong>Bed saves the day</strong>
              <span>Gameplay values are copied into SaveGame for the next session.</span>
            </div>
            <FlowArrow />
            <div>
              <ShoppingCart size={21} aria-hidden="true" />
              <strong>Intentional reset</strong>
              <span>New Game and Delete Save clear runtime progress while preserving settings.</span>
            </div>
          </div>
        </section>

        <section className="case-block" aria-labelledby="gallery-title">
          <div className="case-block-heading compact-heading">
            <p className="eyebrow">Selected Frames</p>
            <h3 id="gallery-title">Systems visible at a glance</h3>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-item">
              <img src={`${mediaRoot}/baking.webp`} alt="The morning baking workspace and recipe board" loading="lazy" />
              <figcaption><strong>Morning</strong><span>Prepare baked inventory before service.</span></figcaption>
            </figure>
            <figure className="gallery-item">
              <img src={`${mediaRoot}/afternoon-phase.webp`} alt="The espresso workspace during the afternoon service phase" loading="lazy" />
              <figcaption><strong>Afternoon</strong><span>Serve orders through manual coffee interactions.</span></figcaption>
            </figure>
            <figure className="gallery-item">
              <img src={`${mediaRoot}/night-phase.webp`} alt="The upgrade laptop available during the night phase" loading="lazy" />
              <figcaption><strong>Night</strong><span>Restock, upgrade, save, and prepare for the next day.</span></figcaption>
            </figure>
          </div>
        </section>
      </div>
    </section>
  );
}
