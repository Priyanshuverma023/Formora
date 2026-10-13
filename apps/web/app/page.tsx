import { api } from "~/trpc/server";
import { FormBuilder } from "~/components/ui/formora/form-builder";

export default async function Home() {
  const { status } = await api.health.getHealth.query();

  return (
    <main className="min-h-screen bg-[var(--formora-app-background)] text-[var(--formora-text-primary)]">
      {/* Application Header */}
      <header className="sticky top-0 z-20 border-b border-[var(--formora-border)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 lg:px-8">
          {/* Brand */}
          <a href="/" className="group flex shrink-0 items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--formora-brand)] text-xl font-black text-white shadow-[0_4px_0_0_#5c3bd6] transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-105">
              F
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight">
                Formora<span className="text-[var(--formora-brand)]">.</span>
              </h1>

              <p className="hidden text-xs font-medium text-[var(--formora-text-secondary)] sm:block">
                Create forms. Make them yours.
              </p>
            </div>
          </a>

          {/* Workspace Information */}
          <div className="hidden items-center gap-2 rounded-full border border-[var(--formora-border)] bg-[var(--formora-surface-muted)] px-4 py-2 md:flex">
            <span className="size-2 rounded-full bg-[var(--formora-mint)]" />

            <span className="text-sm font-medium">
              Form builder
            </span>
          </div>

          {/* Status */}
          <div className="flex shrink-0 items-center gap-2 rounded-xl bg-[var(--formora-surface-muted)] px-3 py-2">
            <span
              className={`size-2 rounded-full ${
                status === "healthy"
                  ? "bg-emerald-500"
                  : "bg-[var(--formora-coral)]"
              }`}
            />

            <span className="hidden text-xs font-semibold sm:inline">
              {status === "healthy" ? "All systems operational" : "Service unavailable"}
            </span>

            <span className="text-xs font-semibold sm:hidden">
              {status === "healthy" ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-8 lg:px-8 lg:py-10">
        {/* Page Introduction */}
        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--formora-border)] bg-white px-6 py-8 shadow-[var(--formora-shadow-card)] sm:px-9 sm:py-10">
          {/* Decorative accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 size-48 rounded-full bg-[var(--formora-brand-soft)] blur-2xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 right-48 size-32 rounded-full bg-[var(--formora-yellow)]/30 blur-2xl"
          />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--formora-border)] bg-[var(--formora-surface-muted)] px-3 py-1.5">
              <span aria-hidden="true">✦</span>

              <span className="text-xs font-bold tracking-wide">
                YOUR CREATIVE WORKSPACE
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Every great idea starts with{" "}
              <span className="text-[var(--formora-brand)]">
                a question.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--formora-text-secondary)] sm:text-base">
              Design beautiful forms, express your style, and turn responses
              into meaningful insights. Your next great form starts here.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--formora-text-secondary)] sm:text-sm">
              <span className="rounded-lg bg-[var(--formora-brand-soft)] px-3 py-2 text-[var(--formora-brand)]">
                ✦ Creative freedom
              </span>

              <span className="rounded-lg bg-[#fff0ed] px-3 py-2 text-[#b84740]">
                ♡ Your unique style
              </span>

              <span className="rounded-lg bg-[#eafaf2] px-3 py-2 text-[#267c57]">
                ↗ Meaningful responses
              </span>
            </div>
          </div>
        </section>

        {/* Form Builder */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-[var(--formora-brand)] uppercase">
                WORKSPACE
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Build your form
              </h2>

              <p className="mt-2 text-sm text-[var(--formora-text-secondary)]">
                Add questions, customize the details, and choose your style.
              </p>
            </div>
          </div>

          <FormBuilder />
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--formora-border)] py-5 text-xs text-[var(--formora-text-secondary)]">
          <p>
            <span className="font-bold text-[var(--formora-text-primary)]">
              Formora
            </span>{" "}
            — Create forms. Make them yours.
          </p>

          <p>Made for ideas worth sharing.</p>
        </footer>
      </div>
    </main>
  );
}