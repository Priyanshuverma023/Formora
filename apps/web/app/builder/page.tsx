import { api } from "~/trpc/server";
import { FormBuilder } from "~/components/ui/formora/form-builder";

export default async function BuilderPage() {
  const { status } = await api.health.getHealth.query();

  return (
    <main className="min-h-screen bg-[var(--formora-app-background)] px-5 py-8 text-[var(--formora-text-primary)] lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="text-2xl font-black tracking-tight">
            Formora<span className="text-[var(--formora-brand)]">.</span>
          </a>

          <div className="flex items-center gap-2 text-sm text-[var(--formora-text-secondary)]">
            <span
              className={`size-2 rounded-full ${
                status === "healthy" ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
            Server {status}
          </div>
        </header>

        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--formora-brand)]">
            Your creative workspace
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Build your form
          </h1>

          <p className="mt-2 text-sm text-[var(--formora-text-secondary)]">
            Add questions, customize the details, and choose your style.
          </p>
        </section>

        <FormBuilder />
      </div>
    </main>
  );
}