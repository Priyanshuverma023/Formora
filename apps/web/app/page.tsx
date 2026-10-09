import { api } from "~/trpc/server";
import { FormBuilder } from "~/components/ui/formora/form-builder";

export default async function Home() {
  const { status } = await api.health.getHealth.query();

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">Form builder</p>

          <h1 className="text-4xl font-bold tracking-tight">Formora</h1>

          <p className="max-w-2xl text-muted-foreground">Create forms. Make them yours.</p>

          <p className="text-sm text-muted-foreground">
            Server Status: <span className="font-medium text-foreground">{status}</span>
          </p>
        </header>

        <FormBuilder />
      </div>
    </main>
  );
}
