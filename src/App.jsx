import { startTransition, useEffect, useState } from "react";
import AgentKraftLanding from "./AgentKraftLanding.jsx";

const pageMeta = {
    home: { title: "Home", href: "#/" },
    platform: { title: "Platform", href: "#/platform" },
    products: { title: "Products", href: "#/products" },
    company: { title: "Company", href: "#/company" },
};

const productDetails = [
    {
        name: "AgentFabric",
        eyebrow: "Runtime control plane",
        summary: "The operator surface for prompts, traces, evals, budgets, releases, and runtime flow across enterprise agent systems.",
        points: ["Trace live agent behavior", "Manage prompts and eval rollouts", "Run operations from one enterprise console"],
    },
    {
        name: "AGS Sovereign",
        eyebrow: "Sovereign decision engine",
        summary: "The governance core that turns policy packs, constitutions, and runtime context into deterministic allow, deny, and escalate verdicts.",
        points: ["Layered L1-L8 governance", "Jurisdiction-aware precedence", "Receipts and audit evidence"],
    },
    {
        name: "Gavel Runtime",
        eyebrow: "Endpoint enforcement runtime",
        summary: "The execution-side layer that carries governance all the way to runtime and endpoint actions instead of stopping at the dashboard.",
        points: ["Local action interception", "Runtime heartbeat and sync", "Closer-to-risk enforcement"],
    },
];

const companyMilestones = [
    { label: "Today", value: "Pilot-ready control stack with runtime visibility, sovereign governance, and endpoint enforcement." },
    { label: "Next", value: "Integrated product surfaces, richer product screenshots, customer stories, and production deployment workflows." },
    { label: "Future", value: "A full enterprise trust fabric for autonomous systems, from control plane to runtime edge." },
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
                    <h2>The control stack for enterprise AI in production.</h2>
                    <p>
                        AgentKraft combines runtime operations, sovereign policy evaluation, and endpoint enforcement so
                        teams can govern real work instead of just observing failures after the fact.
                    </p>
                </div>
                <div className="ak-page-grid">
                    <article className="ak-page-card">
                        <span>Observe</span>
                        <h3>See what your agents are doing.</h3>
                        <p>Track live runtime state, prompts, model calls, budgets, and handoffs from a single operating surface.</p>
                    </article>
                    <article className="ak-page-card">
                        <span>Decide</span>
                        <h3>Apply sovereign policy before harm.</h3>
                        <p>Use layered governance, legal packs, company constitutions, and precedence to compute deterministic verdicts.</p>
                    </article>
                    <article className="ak-page-card">
                        <span>Enforce</span>
                        <h3>Carry control to the point of execution.</h3>
                        <p>Push policy from the dashboard down to workflow and endpoint runtime where risky actions actually happen.</p>
                    </article>
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
                    <h2>Three products, one product story.</h2>
                    <p>Each layer can stand alone, but together they create a much stronger enterprise platform for trusted AI operations.</p>
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
                    <h2>From today’s control stack to tomorrow’s trust fabric.</h2>
                    <p>
                        AgentKraft is being shaped as a company around one idea: enterprises need stronger infrastructure
                        for governing autonomous systems than dashboards, guardrails, and policy documents alone.
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
                    <h3>Built for customers, legible to investors.</h3>
                    <p>
                        The commercial story is simple: help regulated and high-consequence teams put AI systems into
                        production with visibility, governance, and enforceable control.
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
                    <p>Enterprise AI control with runtime governance, sovereign policy, and endpoint enforcement.</p>
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
