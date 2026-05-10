export default function About() {
  return (
    <section className="surface-card rounded-[1.125rem] px-6 py-10 md:px-10 md:py-12">
      <div className="max-w-3xl space-y-6">
        <p className="eyebrow">About</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Built to explore modern App Router patterns against a real API.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            The app combines multitenant API workflows, UI state management,
            and server-client boundaries in a compact Next.js frontend. It is
            designed as a practical workspace rather than a brochure site.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Next.js 16", "App Router, streaming boundaries, and modern build tooling."],
            ["Tailwind CSS", "Utility-first styling for tighter spacing, hierarchy, and consistency."],
            ["API exploration", "Users, projects, and NASA demo flows to exercise async UI states."],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-lg border border-slate-200/80 bg-white/80 p-5 shadow-sm"
            >
              <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
