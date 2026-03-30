import { startTransition, useEffect, useState } from "react";
import AgentKraftLanding from "./AgentKraftLanding.jsx";

const pageMeta = {
    home: { title: "Home", href: "#/" },
    platform: { title: "Platform", href: "#/platform" },
    security: { title: "Security", href: "#/security" },
    intelligence: { title: "Threat Intelligence", href: "#/intelligence" },
    governance: { title: "Governance", href: "#/governance" },
    products: { title: "Products", href: "#/products" },
};

const platformPillars = [
    {
        label: "On-device security",
        title: "Protect runtime where execution becomes real.",
        copy: "Carry control to endpoint and local runtime paths instead of stopping at observability dashboards.",
    },
    {
        label: "On-network intelligence",
        title: "See and govern network-facing agent behavior.",
        copy: "Track traffic, API use, cross-boundary actions, and execution risk across networked agent systems.",
    },
    {
        label: "Enterprise-wide traceability",
        title: "Follow agent behavior across the organization.",
        copy: "Create one traceability layer across teams, business units, workflows, and operating environments.",
    },
    {
        label: "Global execution protection",
        title: "Protect how agents execute at scale.",
        copy: "Apply consistent safeguards and governance across regions, tenants, and execution paths.",
    },
];

const securityControls = [
    {
        label: "Device and endpoint",
        title: "Protect execution at the edge",
        copy: "Detect and constrain risky actions on the device or endpoint where agent behavior becomes irreversible action.",
    },
    {
        label: "Runtime controls",
        title: "Enforce policy in live flows",
        copy: "Stop sensitive execution paths in real time instead of relying only on offline testing or human hope.",
    },
    {
        label: "Organization-wide posture",
        title: "Move beyond app-by-app defense",
        copy: "Apply one protection model across teams, environments, and agent surfaces instead of fragmented local controls.",
    },
];

const intelligenceSignals = [
    {
        label: "Network signal",
        title: "Map traffic and cross-boundary behavior",
        copy: "Understand when agents cross systems, regions, tools, and policy domains so threats show up before incidents do.",
    },
    {
        label: "Execution signal",
        title: "Correlate behavior across agent lifecycles",
        copy: "Tie actions, prompts, model calls, tool invocations, and runtime posture into one operational intelligence surface.",
    },
    {
        label: "Threat insight",
        title: "See where risk is actually emerging",
        copy: "Turn distributed telemetry into actionable threat intelligence for platform, security, and governance teams.",
    },
];

const governanceLayers = [
    {
        layer: "Layer 1",
        title: "Constitution",
        copy: "Company red lines, principles, and executive control posture.",
    },
    {
        layer: "Layer 2",
        title: "AI laws",
        copy: "AI-specific legal obligations and enforceable constraints.",
    },
    {
        layer: "Layer 3",
        title: "Data frameworks",
        copy: "Privacy, data protection, and regional framework controls.",
    },
    {
        layer: "Layer 4",
        title: "Agent governance",
        copy: "Execution scope, authority, approvals, and risk ownership per agent.",
    },
    {
        layer: "Layer 5",
        title: "Skill and tool control",
        copy: "Govern how agents use tools, APIs, and side-effecting capabilities.",
    },
    {
        layer: "Layer 6",
        title: "Execution coordination",
        copy: "Constrain multi-agent handoffs, workflow movement, and organization-wide execution logic.",
    },
    {
        layer: "Layer 7",
        title: "Evidence and enforcement",
        copy: "Hash-chained audit logs, receipts, and enforcement state linked to real execution outcomes.",
    },
];

const productDetails = [
    {
        name: "AgentFabric",
        eyebrow: "Runtime control plane",
        summary: "The control surface for runtime visibility, operator workflows, release posture, and enterprise-wide traceability.",
        points: ["Cross-agent traceability", "Operational intelligence and release control", "Runtime visibility across the enterprise"],
    },
    {
        name: "AGS Sovereign",
        eyebrow: "7-layer governance engine",
        summary: "The policy and decision core that evaluates real-world agent risk through layered governance rather than flat rules or passive evals.",
        points: ["7-layer governance model", "Deterministic verdicting for high-risk actions", "Hash-chained decision evidence"],
    },
    {
        name: "Gavel Runtime",
        eyebrow: "Execution enforcement layer",
        summary: "The runtime and endpoint layer that carries security, protection, and policy enforcement down to where agent execution actually happens.",
        points: ["On-device and endpoint protection", "Runtime and network-aware interception", "Machine-authenticated enforcement path"],
    },
];

const applicationArchitectures = [
    {
        name: "AgentFabric",
        eyebrow: "Runtime control plane",
        summary: "The operational layer for runtime observability, governance workflows, pricing, release control, and enterprise-wide AI operations.",
        flow: ["Apps and agents", "SDK / OTLP", "Collector", "Gateway / control plane", "Portal and data systems"],
        responsibilities: [
            "Observe runtime behavior, spans, lineage, and live activity",
            "Manage policies, prompts, evals, budgets, and releases",
            "Give platform and security teams one operator surface",
        ],
    },
    {
        name: "AGS Sovereign",
        eyebrow: "Governance decision engine",
        summary: "The deterministic policy core that evaluates proposed actions before execution and returns permit, deny, or escalate with evidence.",
        flow: ["Proposed action", "Layered evaluation", "Conflict precedence", "Verdict", "Ledger and surveillance"],
        responsibilities: [
            "Apply layered governance from constitution through surveillance",
            "Produce deterministic verdicts for high-risk execution paths",
            "Keep audit evidence and policy provenance linked to decisions",
        ],
    },
    {
        name: "Gavel Runtime",
        eyebrow: "Endpoint and runtime enforcement",
        summary: "The machine-authenticated runtime loop that carries policy to the device, endpoint, and local operator surfaces.",
        flow: ["Runtime detects action", "SRP evaluates policy", "Runtime enforces", "Telemetry recorded", "Operators install and trust"],
        responsibilities: [
            "Enforce allow, audit, or deny at the point of action",
            "Keep the runtime contract disciplined across server and client planes",
            "Support install, restart, rollback, and operator-visible trust",
        ],
    },
];

const architectureRails = [
    { title: "Device", body: "Endpoint enforcement, runtime bridge, machine-authenticated posture." },
    { title: "Network", body: "Traffic visibility, cross-boundary actions, and threat intelligence." },
    { title: "Governance", body: "7-layer decisioning, verdict authority, and execution constraints." },
    { title: "Enterprise", body: "Organization-wide traceability, protection, and audit evidence." },
];

const deploymentModels = [
    "Private cloud deployment",
    "Enterprise VPC / tenant isolation",
    "Hybrid control plane + runtime edge",
    "Regulated environment rollout",
];

const trustSignals = [
    "Hash-chained audit logs",
    "Organization-wide traceability",
    "On-device and on-network coverage",
    "Deterministic verdict evidence",
];

const securityEvents = [
    { name: "Endpoint execution anomaly", verdict: "Blocked", detail: "Unapproved privileged execution request" },
    { name: "Cross-boundary tool call", verdict: "Escalated", detail: "Sensitive transfer outside approved region" },
    { name: "Local runtime policy drift", verdict: "Contained", detail: "Runtime sync forced to protected posture" },
];

const threatSignals = [
    { title: "Cross-agent correlation", value: "14 linked sessions", tone: "cool" },
    { title: "External action bursts", value: "3 flagged clusters", tone: "warm" },
    { title: "High-risk tool patterns", value: "7 active detections", tone: "good" },
];

const evidenceRows = [
    { label: "Decision receipts", value: "Immutable" },
    { label: "Execution logs", value: "Hash chained" },
    { label: "Audit readiness", value: "Operator visible" },
];

function getPageFromHash(hash) {
    if (!hash || hash === "#" || hash === "#/") return "home";
    if (!hash.startsWith("#/")) return "home";

    const slug = hash.slice(2).split("/")[0].toLowerCase();
    return pageMeta[slug] ? slug : "home";
}

function TopNav({ currentPage }) {
    return (
        <header className="ak-nav-shell">
            <div className="ak-nav">
                <a className="ak-brand" href="#/">
                    <span className="ak-brand-mark" />
                    <span>AgentKraft</span>
                </a>
                <nav className="ak-nav-links" aria-label="Primary">
                    {Object.entries(pageMeta).map(([key, page]) => (
                        <a
                            key={key}
                            href={page.href}
                            className={currentPage === key ? "ak-nav-link-active" : undefined}
                        >
                            {page.title}
                        </a>
                    ))}
                </nav>
                <a className="ak-button ak-button-secondary ak-nav-cta" href="mailto:founders@agentkraft.tech">
                    Book a pilot
                </a>
            </div>
        </header>
    );
}

function PlatformPage() {
    return (
        <div className="ak-page ak-page-view">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-page-hero">
                <div className="ak-section-heading">
                    <span>Platform</span>
                    <h2>Protection across device, network, governance, and enterprise execution.</h2>
                    <p>
                        AgentKraft is shaped as an architecture-led platform. It connects runtime operations, governance
                        decisioning, and endpoint enforcement into one product stack instead of leaving those concerns
                        scattered across separate tools.
                    </p>
                </div>
                <div className="ak-page-grid">
                    {platformPillars.map((pillar) => (
                        <article key={pillar.label} className="ak-page-card">
                            <span>{pillar.label}</span>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.copy}</p>
                        </article>
                    ))}
                </div>
                <div className="ak-architecture-board">
                    <div className="ak-architecture-board-top">
                        <span>Unified execution architecture</span>
                        <strong>One intelligence and protection layer across the full stack</strong>
                    </div>
                    <div className="ak-architecture-board-grid">
                        {architectureRails.map((rail) => (
                            <div key={rail.title} className="ak-architecture-board-card">
                                <span>{rail.title}</span>
                                <h3>{rail.title} plane</h3>
                                <p>{rail.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ak-proof-grid">
                    <div className="ak-proof-card">
                        <span>Deployment models</span>
                        <div className="ak-proof-list">
                            {deploymentModels.map((item) => (
                                <div key={item} className="ak-proof-item">{item}</div>
                            ))}
                        </div>
                    </div>
                    <div className="ak-proof-card">
                        <span>Trust signals</span>
                        <div className="ak-proof-list">
                            {trustSignals.map((item) => (
                                <div key={item} className="ak-proof-item">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="ak-application-grid">
                    {applicationArchitectures.map((item) => (
                        <article key={item.name} className="ak-application-card">
                            <span>{item.eyebrow}</span>
                            <h3>{item.name}</h3>
                            <p>{item.summary}</p>
                            <div className="ak-application-flow" aria-label={`${item.name} architecture`}>
                                {item.flow.map((step, index) => (
                                    <div key={step} className="ak-application-step">
                                        <strong>{index + 1}</strong>
                                        <p>{step}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

function SecurityPage() {
    return (
        <div className="ak-page ak-page-view">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-page-hero">
                <div className="ak-section-heading">
                    <span>Security</span>
                    <h2>Secure agent execution where actions actually happen.</h2>
                    <p>
                        AgentKraft is designed for organizations that need more than posture dashboards. It protects
                        runtime execution at device, endpoint, and organization scale.
                    </p>
                </div>
                <div className="ak-page-grid">
                    {securityControls.map((item) => (
                        <article key={item.title} className="ak-page-card">
                            <span>{item.label}</span>
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                        </article>
                    ))}
                </div>
                <div className="ak-page-mock ak-page-mock-security">
                    <div className="ak-page-mock-topbar">
                        <span className="ak-console-dot" />
                        <span className="ak-console-dot" />
                        <span className="ak-console-dot" />
                        <strong>Security operations console</strong>
                    </div>
                    <div className="ak-page-mock-body">
                        <div className="ak-page-mock-column">
                            <span>Active protections</span>
                            {securityEvents.map((item) => (
                                <div key={item.name} className="ak-page-mock-row">
                                    <strong>{item.verdict}</strong>
                                    <div>
                                        <p>{item.name}</p>
                                        <small>{item.detail}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ak-page-mock-column ak-page-mock-side">
                            <span>Protection coverage</span>
                            <div className="ak-metric-stack">
                                <div>Device runtime</div>
                                <div>Endpoint actions</div>
                                <div>Cross-boundary execution</div>
                                <div>Enterprise protection posture</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ak-company-note">
                    <h3>Security stance</h3>
                    <p>
                        This is not just model or prompt security. It is execution protection for autonomous systems
                        across endpoint, runtime, and enterprise control surfaces.
                    </p>
                </div>
            </section>
        </div>
    );
}

function IntelligencePage() {
    return (
        <div className="ak-page ak-page-view">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-page-hero">
                <div className="ak-section-heading">
                    <span>Threat Intelligence</span>
                    <h2>Turn agent telemetry into enterprise threat intelligence.</h2>
                    <p>
                        Runtime signals only matter if they become usable intelligence. AgentKraft is built to connect
                        agent behavior, network movement, and execution outcomes into one operational picture.
                    </p>
                </div>
                <div className="ak-page-grid">
                    {intelligenceSignals.map((item) => (
                        <article key={item.title} className="ak-page-card">
                            <span>{item.label}</span>
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                        </article>
                    ))}
                </div>
                <div className="ak-page-mock ak-page-mock-intel">
                    <div className="ak-page-mock-topbar">
                        <span className="ak-console-dot" />
                        <span className="ak-console-dot" />
                        <span className="ak-console-dot" />
                        <strong>Threat intelligence board</strong>
                    </div>
                    <div className="ak-intel-grid">
                        {threatSignals.map((item) => (
                            <div key={item.title} className={`ak-intel-card ak-${item.tone}`}>
                                <span>{item.title}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                        <div className="ak-intel-map">
                            <div className="ak-intel-map-node ak-intel-map-node-one" />
                            <div className="ak-intel-map-node ak-intel-map-node-two" />
                            <div className="ak-intel-map-node ak-intel-map-node-three" />
                            <div className="ak-intel-map-node ak-intel-map-node-four" />
                        </div>
                    </div>
                </div>
                <div className="ak-company-note">
                    <h3>Why intelligence matters</h3>
                    <p>
                        Threat intelligence is the bridge between observability and real protection. It is how
                        organizations spot risk patterns before they become incidents or policy failures.
                    </p>
                </div>
            </section>
        </div>
    );
}

function GovernancePage() {
    return (
        <div className="ak-page ak-page-view">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-page-hero">
                <div className="ak-section-heading">
                    <span>Governance</span>
                    <h2>7 layers designed for real-world enterprise challenges.</h2>
                    <p>
                        AgentKraft is not built on flat policies alone. The governance model is layered to mirror how
                        real organizations manage law, execution, risk, tools, and accountability.
                    </p>
                </div>
                <div className="ak-governance-grid">
                    {governanceLayers.map((item) => (
                        <article key={item.title} className="ak-page-card ak-governance-card">
                            <span>{item.layer}</span>
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                        </article>
                    ))}
                </div>
                <div className="ak-page-mock ak-page-mock-governance">
                    <div className="ak-page-mock-topbar">
                        <span className="ak-console-dot" />
                        <span className="ak-console-dot" />
                        <span className="ak-console-dot" />
                        <strong>Governance and evidence board</strong>
                    </div>
                    <div className="ak-page-mock-body">
                        <div className="ak-page-mock-column">
                            <span>Layer interactions</span>
                            <div className="ak-governance-matrix">
                                {governanceLayers.slice(0, 4).map((item) => (
                                    <div key={item.title} className="ak-governance-matrix-row">
                                        <strong>{item.layer}</strong>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ak-page-mock-column ak-page-mock-side">
                            <span>Evidence output</span>
                            <div className="ak-proof-list">
                                {evidenceRows.map((row) => (
                                    <div key={row.label} className="ak-proof-item">
                                        {row.label}: {row.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ak-company-note">
                    <h3>Evidence matters</h3>
                    <p>
                        Governance is only real if decisions and execution trails can be trusted later. That is why the
                        model is paired with hash-chained logs and decision evidence.
                    </p>
                </div>
            </section>
        </div>
    );
}

function ProductsPage() {
    return (
        <div className="ak-page ak-page-view">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-page-hero">
                <div className="ak-section-heading">
                    <span>Products</span>
                    <h2>Three products, one enterprise protection stack.</h2>
                    <p>
                        Internally the stack is modular. Externally it should feel like one serious system for agent
                        intelligence, execution protection, and governance-backed control.
                    </p>
                </div>
                <div className="ak-page-grid">
                    {productDetails.map((product) => (
                        <article key={product.name} className="ak-page-card ak-product-detail-card">
                            <span>{product.eyebrow}</span>
                            <h3>{product.name}</h3>
                            <p>{product.summary}</p>
                            <ul className="ak-page-list">
                                {product.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
                <div className="ak-product-architecture">
                    {applicationArchitectures.map((product) => (
                        <article key={product.name} className="ak-page-card ak-product-architecture-card">
                            <span>{product.eyebrow}</span>
                            <h3>{product.name} in the stack</h3>
                            <p>{product.summary}</p>
                            <div className="ak-application-flow ak-application-flow-compact">
                                {product.flow.map((step, index) => (
                                    <div key={step} className="ak-application-step">
                                        <strong>{index + 1}</strong>
                                        <p>{step}</p>
                                    </div>
                                ))}
                            </div>
                            <ul className="ak-page-list">
                                {product.responsibilities.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

function Footer() {
    return (
        <footer className="ak-footer">
            <div className="ak-footer-inner">
                <div>
                    <strong>AgentKraft</strong>
                    <p>Protection, intelligence, traceability, and governance for enterprise agent execution.</p>
                </div>
                <div className="ak-footer-links">
                    <a href="#/">Home</a>
                    <a href="#/platform">Platform</a>
                    <a href="#/security">Security</a>
                    <a href="#/intelligence">Threat Intelligence</a>
                    <a href="#/governance">Governance</a>
                    <a href="#/products">Products</a>
                </div>
            </div>
        </footer>
    );
}

export default function App() {
    const [page, setPage] = useState(() => getPageFromHash(window.location.hash));

    useEffect(() => {
        const onHashChange = () => {
            startTransition(() => {
                setPage(getPageFromHash(window.location.hash));
            });
        };

        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    let content = <AgentKraftLanding />;
    if (page === "platform") content = <PlatformPage />;
    if (page === "security") content = <SecurityPage />;
    if (page === "intelligence") content = <IntelligencePage />;
    if (page === "governance") content = <GovernancePage />;
    if (page === "products") content = <ProductsPage />;

    return (
        <div className="ak-app-shell">
            <TopNav currentPage={page} />
            {content}
            <Footer />
        </div>
    );
}
