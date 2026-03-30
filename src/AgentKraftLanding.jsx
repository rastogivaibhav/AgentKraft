const productCards = [
    {
        name: "AgentFabric",
        eyebrow: "Runtime Control Plane",
        description: "Observe live agent traffic, trace behavior, govern prompts, budgets, and rollouts from one operating surface.",
        accent: "teal",
        bullets: ["Traffic mediation", "Prompt and eval lifecycle", "Ops console for teams"],
    },
    {
        name: "AGS Sovereign",
        eyebrow: "Decision Engine",
        description: "Apply sovereign policies before irreversible actions with layered governance, precedence, receipts, and audit evidence.",
        accent: "gold",
        bullets: ["L1-L8 governance", "Deterministic verdicts", "Cryptographic receipts"],
    },
    {
        name: "Gavel Runtime",
        eyebrow: "Endpoint Enforcement",
        description: "Push policy intelligence to local runtime and endpoint execution so actions can be checked where risk actually happens.",
        accent: "blue",
        bullets: ["Runtime heartbeat", "Telemetry sync", "Local action control"],
    },
];

const pillars = [
    { label: "Observe", value: "Trace every decision path, model call, and runtime state shift across the stack." },
    { label: "Decide", value: "Apply sovereign governance with transparent precedence and explainable verdicts." },
    { label: "Enforce", value: "Push controls to API, workflow, and endpoint execution layers before damage happens." },
];

const signalRows = [
    { label: "Live runtime health", value: "99.982%", tone: "good" },
    { label: "High-risk action interception", value: "<120ms", tone: "warm" },
    { label: "Policy receipt integrity", value: "SHA chained", tone: "cool" },
    { label: "Deployment posture", value: "Pilot ready", tone: "neutral" },
];

const tickerItems = [
    "Govern live agent traffic",
    "Issue sovereign verdicts before irreversible actions",
    "Push controls to endpoint runtime",
    "Generate audit-ready receipts",
    "Ship pilots with evidence, not just dashboards",
];

const operatingModel = [
    {
        step: "01",
        title: "Observe every runtime",
        copy: "Ingest traces, prompts, model calls, budgets, and workflow transitions from the control plane.",
    },
    {
        step: "02",
        title: "Apply sovereign policy",
        copy: "Use layered governance, legal packs, company constitutions, and precedence to compute a final decision.",
    },
    {
        step: "03",
        title: "Enforce where it matters",
        copy: "Intervene at API, workflow, and endpoint runtime before sensitive actions escape the blast radius.",
    },
    {
        step: "04",
        title: "Prove and improve",
        copy: "Seal receipts, watch telemetry, and turn operational evidence into safer releases and stronger trust.",
    },
];

const useCases = [
    {
        title: "Regulated enterprise copilots",
        text: "Keep finance, health, and internal ops agents productive without losing approval chains, evidence, or policy control.",
    },
    {
        title: "Autonomous workflow release gates",
        text: "Let agents move fast in low-risk paths while routing sensitive writes, transfers, and external actions through sovereign review.",
    },
    {
        title: "Endpoint and runtime assurance",
        text: "Carry governance beyond dashboards so policy follows the action all the way down to local runtime execution.",
    },
];

export default function AgentKraftLanding() {
    return (
        <div className="ak-page">
            <div className="ak-noise" aria-hidden="true" />
            <header className="ak-nav-shell">
                <div className="ak-nav">
                    <a className="ak-brand" href="#top">
                        <span className="ak-brand-mark" />
                        <span>AgentKraft</span>
                    </a>
                    <nav className="ak-nav-links" aria-label="Primary">
                        <a href="#platform">Platform</a>
                        <a href="#architecture">Architecture</a>
                        <a href="#operating-model">Operating model</a>
                        <a href="#use-cases">Use cases</a>
                    </nav>
                    <a className="ak-button ak-button-secondary ak-nav-cta" href="#contact">Book a pilot</a>
                </div>
            </header>

            <section className="ak-hero">
                <div id="top" />
                <div className="ak-hero-copy">
                    <div className="ak-kicker">AGENTKRAFT</div>
                    <h1>Enterprise AI control, with sovereign governance at runtime.</h1>
                    <p className="ak-subtitle">
                        AgentKraft brings together the operator surface, the sovereign decision engine, and endpoint
                        enforcement into one modern stack for AI systems that need to be trusted in production.
                    </p>
                    <div className="ak-cta-row">
                        <a className="ak-button ak-button-primary" href="#platform">Explore the platform</a>
                        <a className="ak-button ak-button-secondary" href="#architecture">See the architecture</a>
                    </div>
                    <div className="ak-pillars">
                        {pillars.map((pillar) => (
                            <div key={pillar.label} className="ak-pillar">
                                <span>{pillar.label}</span>
                                <p>{pillar.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ak-hero-visual" aria-hidden="true">
                    <div className="ak-orb ak-orb-core" />
                    <div className="ak-orbit ak-orbit-one" />
                    <div className="ak-orbit ak-orbit-two" />
                    <div className="ak-orbit ak-orbit-three" />
                    <div className="ak-beam ak-beam-left" />
                    <div className="ak-beam ak-beam-right" />
                    <div className="ak-radar">
                        <div className="ak-radar-sweep" />
                        <div className="ak-radar-ring ak-radar-ring-one" />
                        <div className="ak-radar-ring ak-radar-ring-two" />
                        <div className="ak-radar-ring ak-radar-ring-three" />
                    </div>
                    <div className="ak-floating-card ak-card-top">
                        <span>Policy verdict</span>
                        <strong>ESCALATE</strong>
                        <small>High-risk external transfer</small>
                    </div>
                    <div className="ak-floating-card ak-card-middle">
                        <span>Runtime posture</span>
                        <strong>OBSERVE</strong>
                        <small>Progressive rollout cohort</small>
                    </div>
                    <div className="ak-floating-card ak-card-bottom">
                        <span>Receipt chain</span>
                        <strong>SEALED</strong>
                        <small>Immutable governance evidence</small>
                    </div>
                </div>
            </section>

            <section className="ak-ticker" aria-label="Key capabilities">
                <div className="ak-ticker-track">
                    {[...tickerItems, ...tickerItems].map((item, index) => (
                        <span key={`${item}-${index}`} className="ak-ticker-item">{item}</span>
                    ))}
                </div>
            </section>

            <section className="ak-platform" id="platform">
                <div className="ak-section-heading">
                    <span>Platform</span>
                    <h2>Three products, one control system.</h2>
                    <p>
                        Run them independently if needed, but together they create a much stronger production story for
                        enterprise agents, governed actions, and endpoint enforcement.
                    </p>
                </div>
                <div className="ak-product-grid">
                    {productCards.map((card) => (
                        <article key={card.name} className={`ak-product-card ak-${card.accent}`}>
                            <div className="ak-card-glow" />
                            <div className="ak-product-header">
                                <span>{card.eyebrow}</span>
                                <h3>{card.name}</h3>
                            </div>
                            <p>{card.description}</p>
                            <ul>
                                {card.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="ak-architecture" id="architecture">
                <div className="ak-section-heading">
                    <span>Architecture</span>
                    <h2>A layered system built for real-world risk.</h2>
                </div>
                <div className="ak-architecture-panel">
                    <div className="ak-architecture-flow">
                        <div className="ak-flow-node">
                            <strong>AgentFabric</strong>
                            <small>Telemetry, proxying, prompts, evals, ops console</small>
                        </div>
                        <div className="ak-flow-link" />
                        <div className="ak-flow-node ak-flow-node-accent">
                            <strong>AGS Sovereign</strong>
                            <small>Policy packs, precedence, receipts, verdict authority</small>
                        </div>
                        <div className="ak-flow-link" />
                        <div className="ak-flow-node">
                            <strong>Gavel Runtime</strong>
                            <small>Endpoint checks, heartbeat, runtime sync, local control</small>
                        </div>
                    </div>
                    <div className="ak-signal-board">
                        {signalRows.map((row) => (
                            <div key={row.label} className={`ak-signal-row ak-${row.tone}`}>
                                <span>{row.label}</span>
                                <strong>{row.value}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ak-operating-model" id="operating-model">
                <div className="ak-section-heading">
                    <span>Operating Model</span>
                    <h2>From telemetry to verdict to enforcement.</h2>
                    <p>
                        The stack is designed to feel coherent in production: one control narrative, one risk language,
                        and one place to understand why an action was allowed, blocked, or escalated.
                    </p>
                </div>
                <div className="ak-operating-grid">
                    {operatingModel.map((item) => (
                        <article key={item.step} className="ak-operating-card">
                            <span>{item.step}</span>
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="ak-use-cases" id="use-cases">
                <div className="ak-section-heading">
                    <span>Use Cases</span>
                    <h2>Built for teams that need more than guardrails.</h2>
                    <p>
                        This is for organizations moving real work through AI systems and needing something stronger than
                        “monitor and hope.”
                    </p>
                </div>
                <div className="ak-use-case-grid">
                    {useCases.map((item) => (
                        <article key={item.title} className="ak-use-case-card">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="ak-future">
                <div className="ak-section-heading">
                    <span>Future</span>
                    <h2>Move from control plane to category company.</h2>
                    <p>
                        The near-term story is already compelling: pilot-ready governance, runtime visibility, and
                        endpoint enforcement. The future story is even stronger: enterprise trust fabric for every
                        autonomous system you put into production.
                    </p>
                </div>
                <div className="ak-future-strip">
                    <div className="ak-future-band ak-future-band-left">
                        <span>Today</span>
                        <strong>Control, govern, and evidence AI actions.</strong>
                    </div>
                    <div className="ak-future-band ak-future-band-right">
                        <span>Tomorrow</span>
                        <strong>Operate the sovereign runtime stack for enterprise agents.</strong>
                    </div>
                </div>
            </section>

            <section className="ak-contact" id="contact">
                <div className="ak-contact-panel">
                    <div>
                        <span>Next Step</span>
                        <h2>Launch AgentKraft as a category-defining control stack.</h2>
                        <p>
                            Start with a focused pilot, prove that you can govern real agent actions, and expand into a
                            trusted enterprise runtime layer.
                        </p>
                    </div>
                    <div className="ak-contact-actions">
                        <a className="ak-button ak-button-primary" href="mailto:founders@agentkraft.tech">Contact founders</a>
                        <a className="ak-button ak-button-secondary" href="#top">Back to top</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
