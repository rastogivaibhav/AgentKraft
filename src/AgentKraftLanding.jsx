const suiteCards = [
    {
        name: "AgentFabric",
        eyebrow: "Runtime Control Plane",
        description: "The enterprise surface for agent observability, operator workflows, release controls, and runtime intelligence.",
        accent: "teal",
        bullets: ["Enterprise-wide traceability", "Prompt, eval, and release intelligence", "Operational visibility across agents"],
    },
    {
        name: "AGS Sovereign",
        eyebrow: "Governance Engine",
        description: "The sovereign policy core that applies multi-layer governance to real-world agent execution and high-risk actions.",
        accent: "gold",
        bullets: ["Multi-domain governance", "Deterministic verdicting", "Trusted audit evidence"],
    },
    {
        name: "Gavel Runtime",
        eyebrow: "Execution Enforcement",
        description: "The local and endpoint execution layer that carries control from policy all the way to runtime action.",
        accent: "blue",
        bullets: ["On-device security", "Endpoint and runtime interception", "Machine-authenticated enforcement"],
    },
];

const coverageCards = [
    {
        title: "On-device security and agent intelligence",
        text: "Protect local runtimes and endpoint execution paths where agent behavior becomes real action, not just observed telemetry.",
    },
    {
        title: "On-network security and threat intelligence",
        text: "Watch agent traffic, control network-facing behavior, and map threat signals across tools, APIs, and workflows.",
    },
    {
        title: "Enterprise-wide traceability and protection",
        text: "See agents, sessions, traces, decisions, handoffs, and risk outcomes across the organization from one control layer.",
    },
    {
        title: "Global execution protection",
        text: "Apply consistent control across teams, business units, regions, and environments instead of relying on ad hoc per-app rules.",
    },
];

const governanceLayers = [
    "Organization",
    "Obligations",
    "Data trust",
    "Execution scope",
    "Capabilities",
    "Coordination",
    "Assurance",
];

const heroBadges = ["On-device", "On-network", "Enterprise-wide", "Audit-ready"];

const signalRows = [
    { label: "Execution coverage", value: "Device + network + runtime", tone: "good" },
    { label: "Governance model", value: "Multi-domain", tone: "warm" },
    { label: "Evidence posture", value: "Audit-ready", tone: "cool" },
    { label: "Operating posture", value: "Pilot ready", tone: "neutral" },
];

const tickerItems = [
    "On-device agent protection",
    "On-network threat intelligence",
    "Enterprise-wide traceability",
    "Global execution protection",
    "Hash-chained audit evidence",
];

const operatingModel = [
    {
        step: "01",
        title: "Watch the full runtime surface",
        copy: "Collect agent telemetry, execution context, handoffs, network interactions, and tool use across the enterprise.",
    },
    {
        step: "02",
        title: "Apply multi-domain governance",
        copy: "Evaluate real-world challenges through structured control domains instead of relying on flat policies or passive eval outputs.",
    },
    {
        step: "03",
        title: "Protect execution in real time",
        copy: "Control on-device, on-network, and endpoint actions before risky execution escapes the approved blast radius.",
    },
    {
        step: "04",
        title: "Prove what happened",
        copy: "Generate durable evidence and audit trails that stand up to security, audit, and compliance review.",
    },
];

const useCases = [
    {
        title: "Regulated enterprise agents",
        text: "Keep high-consequence agents productive without sacrificing control over approvals, data movement, or enforcement.",
    },
    {
        title: "Organization-wide agent protection",
        text: "Apply consistent execution protection across business units instead of treating each team's agents as a separate exception.",
    },
    {
        title: "Security-led AI operations",
        text: "Give security, platform, and governance teams one system for traceability, threat insight, and runtime control.",
    },
];

const heroConsoleRows = [
    { status: "ALLOW", action: "Internal knowledge retrieval", latency: "42ms" },
    { status: "ESCALATE", action: "Cross-boundary data transfer", latency: "118ms" },
    { status: "DENY", action: "Unapproved privileged execution", latency: "31ms" },
];

const suiteSnapshots = {
    AgentFabric: {
        labels: ["Traceability", "Ops", "Telemetry"],
        lines: ["Cross-agent trace views", "Release and runtime visibility", "Execution intelligence across the estate"],
    },
    "AGS Sovereign": {
        labels: ["Governance", "Verdicts", "Evidence"],
        lines: ["Multi-domain control model", "Deterministic execution decisions", "Trusted audit logs"],
    },
    "Gavel Runtime": {
        labels: ["Device", "Network", "Runtime"],
        lines: ["Local action interception", "Network-aware protection path", "Execution enforcement at the edge"],
    },
};

export default function AgentKraftLanding() {
    return (
        <div className="ak-page">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-hero" id="top">
                <div className="ak-hero-copy">
                    <div className="ak-badge-row">
                        {heroBadges.map((badge) => (
                            <span key={badge} className="ak-hero-badge">{badge}</span>
                        ))}
                    </div>
                    <div className="ak-kicker">AGENTKRAFT</div>
                    <h1>The operating stack for secure enterprise agents.</h1>
                    <p className="ak-subtitle">
                        AgentKraft brings together runtime control, governance decisioning, and endpoint enforcement so
                        teams can ship agents with on-device protection, on-network intelligence, enterprise-wide
                        traceability, and reviewable evidence.
                    </p>
                    <div className="ak-cta-row">
                        <a className="ak-button ak-button-primary" href="#/platform">Explore the platform</a>
                        <a className="ak-button ak-button-secondary" href="#/governance">See the governance model</a>
                    </div>
                </div>

                <div className="ak-hero-visual" aria-hidden="true">
                    <div className="ak-stage-rail ak-stage-rail-top">
                        <span>Device security</span>
                        <span>Network intelligence</span>
                        <span>Global execution control</span>
                    </div>
                    <div className="ak-stage-grid" />
                    <div className="ak-stage-glow ak-stage-glow-one" />
                    <div className="ak-stage-glow ak-stage-glow-two" />
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
                    <div className="ak-console-shot">
                        <div className="ak-console-topbar">
                            <span className="ak-console-dot" />
                            <span className="ak-console-dot" />
                            <span className="ak-console-dot" />
                            <strong>Global agent protection plane</strong>
                        </div>
                        <div className="ak-console-grid">
                            <div className="ak-console-panel">
                                <span>Execution decisions</span>
                                {heroConsoleRows.map((row) => (
                                    <div key={row.action} className="ak-console-row">
                                        <em className={`ak-console-status ak-${row.status.toLowerCase()}`}>{row.status}</em>
                                        <p>{row.action}</p>
                                        <small>{row.latency}</small>
                                    </div>
                                ))}
                            </div>
                            <div className="ak-console-panel ak-console-panel-accent">
                                <span>Governance domains</span>
                                <div className="ak-mini-stack">
                                    {governanceLayers.slice(0, 4).map((layer) => (
                                        <div key={layer}>{layer}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ak-floating-card ak-card-top">
                        <span>Execution posture</span>
                        <strong>PROTECTED</strong>
                        <small>Device and network-aware control</small>
                    </div>
                    <div className="ak-floating-card ak-card-middle">
                        <span>Threat intelligence</span>
                        <strong>LIVE</strong>
                        <small>Cross-system runtime signal</small>
                    </div>
                    <div className="ak-floating-card ak-card-bottom">
                        <span>Evidence chain</span>
                        <strong>SEALED</strong>
                        <small>Hash-chained audit evidence</small>
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
                    <span>Coverage</span>
                    <h2>Built for the parts competitors leave fragmented.</h2>
                    <p>
                        Most products cover a slice of the problem. AgentKraft is designed for the full execution
                        challenge: device, network, enterprise traceability, governance, and proof.
                    </p>
                </div>
                <div className="ak-use-case-grid">
                    {coverageCards.map((item) => (
                        <article key={item.title} className="ak-use-case-card">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="ak-architecture" id="architecture">
                <div className="ak-section-heading">
                    <span>Architecture</span>
                    <h2>One protection system across control plane, governance, and runtime.</h2>
                </div>
                <div className="ak-architecture-panel">
                    <div className="ak-architecture-flow">
                        <div className="ak-flow-node">
                            <strong>AgentFabric</strong>
                            <small>Enterprise-wide traceability, runtime intelligence, release and operator control</small>
                        </div>
                        <div className="ak-flow-link" />
                        <div className="ak-flow-node ak-flow-node-accent">
                            <strong>AGS Sovereign</strong>
                            <small>7-layer governance, verdict authority, tamper-proof evidence, policy reasoning</small>
                        </div>
                        <div className="ak-flow-link" />
                        <div className="ak-flow-node">
                            <strong>Gavel Runtime</strong>
                            <small>On-device, on-network, and endpoint execution protection at the point of action</small>
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

            <section className="ak-platform">
                <div className="ak-section-heading">
                    <span>Product Suite</span>
                    <h2>Three products, one enterprise protection stack.</h2>
                </div>
                <div className="ak-product-grid">
                    {suiteCards.map((card) => (
                        <article key={card.name} className={`ak-product-card ak-${card.accent}`}>
                            <div className="ak-card-glow" />
                            <div className="ak-product-header">
                                <span>{card.eyebrow}</span>
                                <h3>{card.name}</h3>
                            </div>
                            <p>{card.description}</p>
                            <div className="ak-product-shot">
                                <div className="ak-product-shot-tags">
                                    {suiteSnapshots[card.name].labels.map((label) => (
                                        <span key={label}>{label}</span>
                                    ))}
                                </div>
                                <div className="ak-product-shot-body">
                                    {suiteSnapshots[card.name].lines.map((line) => (
                                        <div key={line} className="ak-product-shot-line">{line}</div>
                                    ))}
                                </div>
                            </div>
                            <ul>
                                {card.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="ak-operating-model" id="operating-model">
                <div className="ak-section-heading">
                    <span>Operating Model</span>
                    <h2>Designed for real-world agent risk, not vanilla policy checks.</h2>
                    <p>
                        AgentKraft is built around the reality that enterprise agent risk spans execution, data,
                        networking, approvals, tools, and accountability all at once.
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
                    <h2>For organizations that need real protection, not passive evaluation.</h2>
                    <p>
                        This platform is aimed at enterprises where agents touch important systems, sensitive data, or
                        regulated execution paths.
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
                    <h2>Move from fragmented controls to organization-wide agent execution protection.</h2>
                    <p>
                        The long-term ambition is simple: give enterprises one system that can understand, govern,
                        protect, and prove AI agent execution across the full operating environment.
                    </p>
                </div>
                <div className="ak-future-strip">
                    <div className="ak-future-band ak-future-band-left">
                        <span>Today</span>
                        <strong>Trace, govern, and protect agent execution across device, network, and runtime.</strong>
                    </div>
                    <div className="ak-future-band ak-future-band-right">
                        <span>Tomorrow</span>
                        <strong>Become the enterprise protection and intelligence layer for autonomous systems.</strong>
                    </div>
                </div>
            </section>

            <section className="ak-contact" id="contact">
                <div className="ak-contact-panel">
                    <div>
                        <span>Next Step</span>
                        <h2>Deploy AgentKraft where agent execution actually matters.</h2>
                        <p>
                            Start with one high-consequence workflow, prove control at runtime, and expand into a global
                            enterprise protection layer.
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
