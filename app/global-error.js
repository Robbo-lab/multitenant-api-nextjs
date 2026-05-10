"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fff7ed_0%,#fff1f2_100%)] px-4 text-slate-950">
        <section className="surface-card w-full max-w-xl rounded-[1rem] px-6 py-10 text-center md:px-10">
          <p className="eyebrow text-rose-700">Global Error</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950">
            The app ran into an error.
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{error.message}</p>
          <button
            className="button-primary mt-8 hover:button-primary-hover"
            onClick={() => reset()}
          >
            Retry
          </button>
        </section>
      </body>
    </html>
  );
}
