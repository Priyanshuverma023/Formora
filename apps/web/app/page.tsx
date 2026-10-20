import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    image: "/images/formora/feature_form_builder.png",
    imageAlt: "Illustration of the Formora form builder",
    title: "Drag. Drop. Create.",
    description:
      "Build beautiful forms with an intuitive builder designed to keep your ideas flowing.",
    accent: "bg-[#eee8ff]",
  },
  {
    number: "02",
    image: "/images/formora/feature_theme_gallery.png",
    imageAlt: "Illustration of Formora's creative themes",
    title: "Make it yours.",
    description:
      "Choose from distinctive themes and transform the same questions into different experiences.",
    accent: "bg-[#ffe7ef]",
  },
  {
    number: "03",
    image: "/images/formora/feature_analytics.png",
    imageAlt: "Illustration of form response analytics",
    title: "Turn answers into insights.",
    description: "Collect responses, discover patterns, and understand what people really think.",
    accent: "bg-[#e4f8ed]",
  },
];

const themes = [
  {
    name: "Base",
    description: "Clean, minimal, and professional.",
    image: "/images/formora/theme_base_preview.png",
    background: "bg-[#f1f4ff]",
    accent: "text-[#546fe8]",
    label: "01 — TIMELESS",
  },
  {
    name: "Cat",
    description: "Cute, playful, and cozy.",
    image: "/images/formora/theme_cat_preview.png",
    background: "bg-[#fff0f1]",
    accent: "text-[#e65e91]",
    label: "02 — PLAYFUL",
  },
  {
    name: "Comic",
    description: "Bold, expressive, and full of energy.",
    image: "/images/formora/theme_comic_preview.png",
    background: "bg-[#fff2c9]",
    accent: "text-[#d84b37]",
    label: "03 — UNLEASHED",
  },
  {
    name: "Cyberpunk",
    description: "Futuristic, neon, and immersive.",
    image: "/images/formora/theme_cyberpunk_preview.png",
    background: "bg-[#17132b]",
    accent: "text-[#43f5f5]",
    label: "04 — AFTER DARK",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf3] text-[#25213a]">
      {/* Navigation */}
      <header className="relative z-20 border-b border-[#eae2ed] bg-[#fffaf3]/95">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12"
        >
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#7856ff] text-xl font-black text-white shadow-[0_4px_0_#5235c8] transition-transform group-hover:-rotate-6">
              F
            </span>

            <span className="text-2xl font-black tracking-tight">
              Formora<span className="text-[#e84393]">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#625a70] md:flex">
            <a href="#features" className="transition-colors hover:text-[#7856ff]">
              Features
            </a>
            <a href="#themes" className="transition-colors hover:text-[#7856ff]">
              Themes
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-[#7856ff]">
              How it works
            </a>
          </div>

          <Link
            href="/builder"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#e84393] px-5 text-sm font-bold text-white shadow-[0_4px_0_#bd2870] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_#bd2870] active:translate-y-1 active:shadow-none"
          >
            Get started <span className="ml-2">↗</span>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-6 px-5 py-12 sm:px-8 md:grid-cols-[0.92fr_1.08fr] md:py-16 lg:min-h-[740px] lg:px-12 lg:py-20">
        {/* Decorative background elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[7%] top-[13%] -z-10 size-16 rotate-12 rounded-2xl bg-[#ffe18a]/70"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[10%] left-[40%] -z-10 size-28 rounded-full bg-[#f9c5dc]/40 blur-2xl"
        />

        <div className="relative z-10">
          <div className="mb-7 inline-flex rotate-[-2deg] items-center gap-2 rounded-full border border-[#e6d9ff] bg-white px-4 py-2 shadow-[0_3px_0_#e6d9ff]">
            <span className="text-[#7856ff]">✦</span>
            <span className="text-xs font-extrabold tracking-[0.13em] text-[#625477]">
              YOUR IDEAS, YOUR UNIVERSE
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-bricolage)] max-w-2xl text-[3.6rem] leading-[0.99] font-black tracking-[-0.065em] sm:text-7xl lg:text-[5.8rem]">
            Create forms.
            <br />
            Make them
            <br />
            <span className="relative inline-block text-[#e84393]">
              yours.
              <svg
                aria-hidden="true"
                viewBox="0 0 220 18"
                className="absolute -bottom-2 left-0 w-full"
                fill="none"
              >
                <path
                  d="M4 11C54 1 143 3 215 9"
                  stroke="#ffc857"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#70677d] sm:text-lg">
            Not every form should look the same. Build beautiful experiences, explore imaginative
            themes, and turn everyday questions into something worth answering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/builder"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#7856ff] px-7 text-base font-extrabold text-white shadow-[0_5px_0_#5235c8] transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_#5235c8] active:translate-y-1 active:shadow-none"
            >
              Create your first form <span aria-hidden="true">↗</span>
            </Link>

            <a
              href="#themes"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-[#e7deed] bg-white px-6 text-sm font-bold transition-colors hover:border-[#7856ff] hover:bg-[#f6f1ff]"
            >
              Explore themes <span aria-hidden="true">✳</span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-[#80758d]">
            <span className="flex items-center gap-2">
              <span className="text-[#e84393]">✦</span> Expressive by design
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#7856ff]">✦</span> Your style, your rules
            </span>
          </div>
        </div>

        {/* Anime hero artwork */}
        <div className="relative mx-auto w-full max-w-[680px] md:ml-auto">
          <div
            aria-hidden="true"
            className="absolute inset-[10%] rounded-full bg-gradient-to-br from-[#e4d8ff] via-[#ffdce9] to-[#ffe8ae] opacity-80 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="formora-float absolute right-[8%] top-[8%] z-10 flex size-14 rotate-12 items-center justify-center rounded-2xl border-2 border-[#25213a] bg-[#ffdb70] text-2xl shadow-[4px_4px_0_#25213a] sm:size-16"
          >
            ✦
          </div>

          <div
            aria-hidden="true"
            className="formora-float-slow absolute bottom-[14%] left-[0%] z-10 flex size-12 -rotate-12 items-center justify-center rounded-full border-2 border-[#25213a] bg-white text-xl shadow-[3px_3px_0_#25213a] sm:size-14"
          >
            ♡
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[3px] border-white bg-[#eee5ff] shadow-[0_12px_0_#e4d8f0,0_18px_45px_rgba(91,61,139,0.12)] sm:rounded-[2.5rem]">
            <Image
              src="/images/hero/formora-hero.png"
              alt="Formora's anime-inspired creative mascot with two playful cats and a form tablet"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-[60%_center] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="formora-float-slow absolute -bottom-5 right-3 z-10 max-w-[250px] rotate-[-3deg] rounded-2xl border-2 border-[#25213a] bg-white p-4 shadow-[5px_5px_0_#25213a] sm:right-0 sm:max-w-[280px]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#e84393]">
              A little reminder ✦
            </p>
            <p className="mt-1 text-sm font-extrabold leading-5">
              Same questions. A completely different vibe.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-y border-[#eee5ef] bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#7856ff]">
                SMALL DETAILS. BIG IDEAS.
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                More than a form builder.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#70677d]">
              Everything you need to create, customize, and share forms that feel unmistakably
              yours.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-[1.75rem] border border-[#eee7f2] bg-[#fffdfb] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(66,43,91,0.08)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`relative flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl ${feature.accent} transition-transform duration-300 group-hover:scale-[1.02]`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <span className="sr-only">{feature.number}</span>
                </div>

                <h3 className="mt-7 text-xl font-black tracking-tight">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#70677d]">{feature.description}</p>

                <div className="mt-6 text-sm font-extrabold text-[#7856ff] transition-transform group-hover:translate-x-1">
                  Make it happen <span aria-hidden="true">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Theme gallery */}
      <section
        id="themes"
        className="relative overflow-hidden bg-[#f8f3ff] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-20 size-72 rounded-full bg-[#f3d4ed]/50 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-[#7856ff] shadow-sm">
              FOUR WORLDS. ONE FORM.
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
              Choose your universe.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#70677d] sm:text-base">
              Start with your questions. Pick a theme. Give your form a whole new personality.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {themes.map((theme) => (
              <article
                key={theme.name}
                className={`group overflow-hidden rounded-[1.75rem] border border-black/5 ${theme.background} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(66,43,91,0.12)]`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={theme.image}
                    alt={`${theme.name} form theme preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] shadow-sm backdrop-blur-sm ${theme.accent}`}
                  >
                    {theme.label}
                  </span>
                </div>

                <div className="border-t border-black/5 bg-white/75 p-5">
                  <h3 className="text-lg font-black">{theme.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#70677d]">{theme.description}</p>
                  <Link
                    href="/builder"
                   className={`mt-4 inline-flex items-center gap-2 text-sm font-extrabold transition-all duration-200 group-hover:gap-3 ${theme.accent}`}
                  >
                    Try this style <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-[#82768f]">
            Theme previews are illustrative. Full theme rendering will be connected to the builder
            as we develop each theme.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="how-it-works" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] bg-[#7856ff] px-6 py-12 text-white shadow-[0_8px_0_#5235c8] sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 size-72 rounded-full border-[35px] border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-100px] right-[30%] size-56 rounded-full bg-[#ff91c8]/20 blur-2xl"
          />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#ffdb78]">
                YOUR NEXT IDEA STARTS HERE
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-black tracking-tight sm:text-5xl">
                Ready to make something wonderful?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Start with one question. Add your personality. Share it with the world.
              </p>
            </div>

            <Link
              href="/builder"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-2xl bg-[#ffdb78] px-7 text-sm font-black text-[#25213a] shadow-[0_5px_0_#d5a63f] transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_#d5a63f] active:translate-y-1 active:shadow-none"
            >
              Let's create <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#eae2ed] bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#7856ff] font-black text-white">
              F
            </span>
            <span className="font-black">
              Formora<span className="text-[#e84393]">.</span>
            </span>
          </Link>

          <p className="text-xs text-[#82768f]">Create forms. Make them yours.</p>

          <a href="#" className="text-xs font-bold text-[#7856ff] hover:underline">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
