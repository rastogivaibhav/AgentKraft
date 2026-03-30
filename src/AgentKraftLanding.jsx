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

export default function AgentKraftLanding() {
    return (
        <div className="ak-page">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-hero">
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
        </div>
    );
}
