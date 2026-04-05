export default function GovernAgentHomepageBright() {
  const section = "mx-auto max-w-7xl px-6 md:px-10";
  const panel = "rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]";
  const soft = "rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]";
  const chip = "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className={`${section} flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between`}>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Logo
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">GovernAgent</div>
              <div className="text-sm text-slate-500">The AI Control Stack</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600 md:gap-6">
            <a href="#hero" className="transition hover:text-slate-950">Home</a>
            <a href="#problem" className="transition hover:text-slate-950">Problem</a>
            <a href="#stack" className="transition hover:text-slate-950">Stack</a>
            <a href="#how-it-works" className="transition hover:text-slate-950">How It Works</a>
            <a href="#comparison" className="transition hover:text-slate-950">Why GovernAgent</a>
            <a href="#pilot" className="transition hover:text-slate-950">Pilot</a>
            <a href="#about" className="transition hover:text-slate-950">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Watch Demo
            </button>
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
              Request Pilot
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="pt-10 md:pt-14">
          <div className={`${section} grid grid-cols-1 gap-10 xl:grid-cols-12 xl:items-center`}>
            <div className="xl:col-span-5">
              <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
                Bright Theme - GovernAgent Homepage
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
                Control AI agents before they control your enterprise
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                GovernAgent gives enterprises a clear runtime control path for AI systems: understand the agent, observe the action, evaluate it before execution, and enforce the outcome when it matters.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Request Pilot
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Watch 2-min Demo
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className={chip}>Governance</div>
                <div className={chip}>Observability</div>
                <div className={chip}>Runtime Enforcement</div>
                <div className={chip}>Cross-platform</div>
              </div>

              <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Why this matters</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Most teams can build AI agents. Fewer teams can observe them properly. Almost nobody can reliably stop them when they should not act. GovernAgent is designed to close that gap.
                </p>
              </div>
            </div>

            <div className="xl:col-span-7">
              <div className={`${panel} overflow-hidden`}>
                <div className="border-b border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-violet-50 px-6 py-5 md:px-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">The AI Control Stack</div>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                        One action. Four layers of control.
                      </h2>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                        When an AI agent attempts a real action, the platform does not rely on logs, policy documents, or hope alone. It creates a trusted path from understanding to enforcement.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-7 text-emerald-800">
                      If your AI agents can act, they must be governed.
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.02fr_64px_1.15fr]">
                    <div className="space-y-5">
                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">1 - Design Layer</div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight">AgentKraft</div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          Helps teams design and understand agent behavior before deployment, reducing ambiguity before runtime begins.
                        </p>
                      </div>

                      <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-5">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">2 - Observation Layer</div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight text-cyan-950">AgentFabric</div>
                        <p className="mt-3 text-sm leading-7 text-cyan-900/80">
                          Captures traces, context, and runtime evidence so teams can see what the agent is trying to do.
                        </p>
                      </div>

                      <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">3 - Decision Layer</div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight text-violet-950">AGS Sovereign</div>
                        <p className="mt-3 text-sm leading-7 text-violet-900/80">
                          Evaluates proposed actions before execution and returns a clear verdict: PERMIT, DENY, or ESCALATE.
                        </p>
                      </div>

                      <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">4 - Enforcement Layer</div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight text-rose-950">Gavel Runtime</div>
                        <p className="mt-3 text-sm leading-7 text-rose-900/80">
                          Makes the governance decision real at runtime by stopping disallowed actions before they complete.
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:flex flex-col items-center justify-center">
                      <div className="h-16 w-px bg-gradient-to-b from-slate-300 to-cyan-400" />
                      <div className="my-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">observe</div>
                      <div className="h-16 w-px bg-gradient-to-b from-cyan-400 to-violet-400" />
                      <div className="my-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">decide</div>
                      <div className="h-16 w-px bg-gradient-to-b from-violet-400 to-rose-400" />
                      <div className="my-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 animate-pulse">enforce</div>
                      <div className="h-16 w-px bg-gradient-to-b from-rose-400 to-emerald-400" />
                    </div>

                    <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50/60 p-6 md:p-7">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Example Runtime Story</div>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                        Sensitive outbound API call
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        The architecture becomes easier to trust when it is attached to a concrete action that a buyer can immediately understand.
                      </p>

                      <div className="mt-6 space-y-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="text-sm font-medium text-slate-900">An agent attempts an external action</div>
                          <div className="mt-1 text-sm leading-7 text-slate-600">The system does not assume this action is safe simply because the agent initiated it.</div>
                        </div>
                        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                          <div className="text-sm font-medium text-cyan-950">AgentFabric captures the context</div>
                          <div className="mt-1 text-sm leading-7 text-cyan-900/80">The attempted action becomes visible and inspectable.</div>
                        </div>
                        <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
                          <div className="text-sm font-medium text-violet-950">AGS Sovereign returns DENY</div>
                          <div className="mt-1 text-sm leading-7 text-violet-900/80">The system makes an explicit governance decision before execution continues.</div>
                        </div>
                        <div className="rounded-2xl border border-rose-300 bg-rose-50 p-4 shadow-[0_0_0_1px_rgba(251,113,133,0.10),0_0_32px_rgba(251,113,133,0.14)]">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-sm font-semibold text-rose-950">Gavel Runtime blocks the action</div>
                            <div className="rounded-full border border-rose-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-700">
                              Deny
                            </div>
                          </div>
                          <div className="mt-1 text-sm leading-7 text-rose-900/80">The risky action does not complete, and control remains with the enterprise.</div>
                        </div>
                      </div>

                      <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-900/90">
                        The result is a traceable chain from intent to observability, from decision to enforcement.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="pt-20 md:pt-24">
          <div className={section}>
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">The problem</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                AI agents are already acting inside enterprise systems. Control has not caught up.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                Enterprises are moving from passive AI interfaces to active systems that can call APIs, move data, trigger workflows, and interact with external services. The issue is no longer whether agents can act. The issue is whether the enterprise can meaningfully control what happens next.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className={`${soft} p-6`}>
                <div className="text-lg font-semibold tracking-tight">Autonomous actions</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Agents can trigger APIs, workflows, and data movement with increasing autonomy across business systems.
                </p>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-lg font-semibold tracking-tight">Advisory governance</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Many governance approaches describe what should happen but do not stop what should not happen.
                </p>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-lg font-semibold tracking-tight">Reactive security</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Logs and alerts often arrive after the action, which is too late when sensitive data or risky operations are involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="pt-20 md:pt-24">
          <div className={section}>
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">The stack</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                One system. Four layers. Complete control.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                GovernAgent brings together the layers enterprises need in one coherent operating picture: design, observability, governance decisioning, and runtime enforcement.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className={`${soft} p-6`}>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Design layer</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">AgentKraft</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Helps teams design, simulate, and understand agent behavior before deployment so runtime systems begin from a clearer foundation.
                </p>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Observation layer</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">AgentFabric</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Captures traces, spans, context, failures, and cost signals so operators can see what agents are actually doing.
                </p>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Decision layer</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">AGS Sovereign</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Evaluates actions before execution and returns clear runtime verdicts such as PERMIT, DENY, or ESCALATE.
                </p>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">Enforcement layer</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">Gavel Runtime</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Turns governance decisions into operational reality by blocking disallowed actions before they complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="pt-20 md:pt-24">
          <div className={section}>
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">How it works</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                A simple runtime story that makes the platform tangible
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                Buyers trust systems faster when they can see how the platform behaves in a concrete situation rather than reading abstract claims.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
              <div className={`${soft} p-6`}>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">01</div>
                <div className="mt-2 text-lg font-semibold tracking-tight">An agent attempts action</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  For example, an agent tries to send sensitive internal data to an external API.
                </p>
              </div>
              <div className="rounded-[24px] border border-cyan-200 bg-cyan-50 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">02</div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-cyan-950">The action is observed</div>
                <p className="mt-3 text-sm leading-7 text-cyan-900/80">
                  AgentFabric captures the request context so the system is not operating blind.
                </p>
              </div>
              <div className="rounded-[24px] border border-violet-200 bg-violet-50 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">03</div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-violet-950">A governance verdict is returned</div>
                <p className="mt-3 text-sm leading-7 text-violet-900/80">
                  AGS Sovereign evaluates the action and returns a decision, such as DENY.
                </p>
              </div>
              <div className="rounded-[24px] border border-rose-300 bg-rose-50 p-6 shadow-[0_10px_30px_rgba(251,113,133,0.14)]">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">04</div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-rose-950">The action is stopped</div>
                <p className="mt-3 text-sm leading-7 text-rose-900/80">
                  Gavel Runtime enforces the decision so the outbound event does not complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="pt-20 md:pt-24">
          <div className={section}>
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Why GovernAgent</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Why existing solutions still leave a gap
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                Many tools can define policy. Many tools can provide dashboards. The hard problem is creating a trusted runtime path between an agent attempting an action and the enterprise deciding whether it should be allowed to happen.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700">
                <div className="px-6 py-4">Capability</div>
                <div className="px-6 py-4">Others</div>
                <div className="px-6 py-4">GovernAgent</div>
              </div>
              {[
                ["Policy definition", "Yes", "Yes"],
                ["Observability", "Yes", "Yes"],
                ["Runtime decisioning", "Partial", "Yes"],
                ["Enforcement", "No", "Yes"],
                ["Cross-platform control", "No", "Yes"],
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-slate-200 last:border-b-0 text-sm">
                  <div className="px-6 py-4 text-slate-800">{row[0]}</div>
                  <div className="px-6 py-4 text-slate-600">{row[1]}</div>
                  <div className="px-6 py-4 font-semibold text-slate-900">{row[2]}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-cyan-200 bg-cyan-50 p-5 text-base leading-8 text-cyan-900 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              GovernAgent is not just another AI dashboard. It is the control path between an agent attempting an action and the enterprise deciding whether that action should be allowed to happen.
            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-24">
          <div className={section}>
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Adoption</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Start anywhere. Expand everywhere.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                GovernAgent can be adopted as a modular stack. Teams can begin with the layer that solves the most immediate problem and expand over time.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className={`${soft} p-6`}>
                <div className="text-lg font-semibold tracking-tight">Start with AGS Sovereign</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Use the governance decision layer when the immediate need is runtime verdicting and policy-backed control.
                </p>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-lg font-semibold tracking-tight">Add AgentFabric</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Bring in observability and operational context so the platform is not making decisions without evidence.
                </p>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-lg font-semibold tracking-tight">Add Gavel Runtime</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Complete the path with enforcement so disallowed actions do not proceed beyond policy intent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-24">
          <div className={section}>
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Built for real systems</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Designed to feel credible, not speculative
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
              <div className={`${soft} p-6`}>
                <div className="text-3xl font-semibold tracking-tight">200+</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">Validated backend tests</div>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-3xl font-semibold tracking-tight">High</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">Frontend coverage and validation focus</div>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-3xl font-semibold tracking-tight">Multi-OS</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">Runtime support direction across enterprise environments</div>
              </div>
              <div className={`${soft} p-6`}>
                <div className="text-3xl font-semibold tracking-tight">Pilot</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">Positioned for controlled production adoption</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pilot" className="pt-20 md:pt-24">
          <div className={section}>
            <div className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.20)] md:px-10 md:py-10">
              <div className="max-w-4xl">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Pilot</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  AI agents are moving faster than governance. Close the gap before it becomes a risk.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                  Start with a focused pilot that demonstrates observable, explainable, and enforceable runtime control in a real enterprise scenario.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    Request Pilot
                  </button>
                  <button className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                    Become Design Partner
                  </button>
                  <button className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                    Talk to Founder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="pt-20 md:pt-24 pb-20 md:pb-24">
          <div className={section}>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className={`${soft} p-6`}>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">About GovernAgent</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Built for enterprises deploying AI in real environments, not labs
                </h2>
                <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
                  GovernAgent is designed to make AI systems controllable, enforceable, and safe to operate. It brings together the layers needed to move from agent activity to enterprise-grade control.
                </p>
              </div>

              <div className={`${soft} p-6`}>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Contact</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Let's discuss your first control use case
                </h2>
                <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
                  Use this area for your founder email, contact form, calendar link, or design-partner inquiry path.
                </p>
                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm leading-7 text-slate-500">
                  Contact form or booking widget placeholder
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className={`${section} flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between`}>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Logo
            </div>
            <div>
              <div className="font-semibold tracking-tight">GovernAgent</div>
              <div className="text-sm text-slate-500">If your AI agents can act, they must be governed.</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500 md:justify-end">
            <a href="#stack" className="hover:text-slate-900">Stack</a>
            <a href="#how-it-works" className="hover:text-slate-900">How It Works</a>
            <a href="#comparison" className="hover:text-slate-900">Why GovernAgent</a>
            <a href="#pilot" className="hover:text-slate-900">Pilot</a>
            <a href="#about" className="hover:text-slate-900">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
