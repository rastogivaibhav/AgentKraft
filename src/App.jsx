import { startTransition, useEffect, useState } from "react";
import AgentKraftLanding from "./AgentKraftLanding.jsx";

const pageMeta = {
    home: { title: "Home", href: "#/" },
    platform: { title: "Platform", href: "#/platform" },
    products: { title: "Products", href: "#/products" },
    company: { title: "Company", href: "#/company" },
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
        points: ["7-layer governance model", "Deterministic verdicting for high-risk actions", "Tamper-proof, hash-chained evidence"],
    },
    {
        name: "Gavel Runtime",
        eyebrow: "Execution enforcement layer",
        summary: "The runtime and endpoint layer that carries security, protection, and policy enforcement down to where agent execution actually happens.",
        points: ["On-device and endpoint protection", "Runtime and network-aware interception", "Machine-authenticated enforcement path"],
    },
];

const companyMilestones = [
    { label: "Today", value: "A pilot-ready protection stack covering runtime traceability, governance, and execution protection." },
    { label: "Next", value: "Tighter product integration, richer product interfaces, and design-partner deployments in high-consequence environments." },
    { label: "Future", value: "A global enterprise protection and intelligence layer for autonomous systems." },
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
                    <h2>Protection across device, network, and enterprise execution.</h2>
                    <p>
                        AgentKraft is designed for a broader problem than plain policy checks or AI eval workflows. It
                        combines execution protection, threat intelligence, traceability, and governance into one system.
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
                <div className="ak-company-note">
                    <h3>Why this matters</h3>
                    <p>
                        Most competitors solve a partial slice: observability, governance, or security. AgentKraft is
                        being built to protect agent execution across the full operating environment.
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
            </section>
        </div>
    );
}

function CompanyPage() {
    return (
        <div className="ak-page ak-page-view">
            <div className="ak-noise" aria-hidden="true" />
            <section className="ak-page-hero">
                <div className="ak-section-heading">
                    <span>Company</span>
                    <h2>From today’s control stack to tomorrow’s enterprise protection layer.</h2>
                    <p>
                        AgentKraft is being built around one conviction: enterprises need stronger protection and
                        intelligence for agents than dashboards, evals, and vanilla policy systems can provide.
                    </p>
                </div>
                <div className="ak-page-grid">
                    {companyMilestones.map((item) => (
                        <article key={item.label} className="ak-page-card">
                            <span>{item.label}</span>
                            <h3>{item.label} state</h3>
                            <p>{item.value}</p>
                        </article>
                    ))}
                </div>
                <div className="ak-company-note">
                    <h3>Operating principle</h3>
                    <p>
                        The company should be presented as the stack that protects agent execution across device,
                        network, governance, and enterprise accountability, not as a collection of partial tools.
                    </p>
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
                    <a href="#/products">Products</a>
                    <a href="#/company">Company</a>
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
    if (page === "products") content = <ProductsPage />;
    if (page === "company") content = <CompanyPage />;

    return (
        <div className="ak-app-shell">
            <TopNav currentPage={page} />
            {content}
            <Footer />
        </div>
    );
}
