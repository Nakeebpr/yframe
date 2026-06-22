import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YFAME — Social Media for India's Top 0.1% of Doctors" },
      {
        name: "description",
        content:
          "YFAME generates 50M+ organic views every month for India's top doctors on YouTube and Instagram. Strategy, scripting, production, posting — handled.",
      },
      { property: "og:title", content: "YFAME — Social Media for India's Top 0.1% of Doctors" },
      { property: "og:description", content: "50M+ organic views every month. We help doctors grow on YouTube & Instagram." },
    ],
  }),
  component: Index,
});

const caseStudies = [
  {
    name: "Dr. Umang Shah",
    result: "1M+ organic views every month",
    img: "https://framerusercontent.com/images/5eHJQlTUQYkvL2XpMymeQY5ybU.webp?width=874&height=596",
  },
  {
    name: "Dr. Rohini Patil",
    result: "0 → 100k on YouTube in 12 months",
    img: "https://framerusercontent.com/images/r22pepKsdJo3dnKjZtfGRB5AG8.webp?width=736&height=552",
  },
  {
    name: "Saloni Arora",
    result: "15k → 125k in 3 months",
    img: "https://framerusercontent.com/images/VQ1PSxvSp21l6hPTQhso2AsRw.webp?width=800&height=712",
  },
];

const philosophies = [
  {
    num: "01",
    title: "Specialisation",
    tag: "One craft. Mastered.",
    body: "Social media growth is not a side offering for us. Many agencies primarily operate as ad agencies, influencer agencies, or full-service marketing firms and offer social media growth as an extension. At YFAME, social media growth is all we do. One craft, dedicated.",
  },
  {
    num: "02",
    title: "Strategy First",
    tag: "Think before you shoot.",
    body: "Great content starts long before production. Every decision should be driven by clarity, positioning and intent. We put strategy at the centre of everything we do.",
  },
  {
    num: "03",
    title: "Audiences, Not Algorithms",
    tag: "Behaviour > algorithm.",
    body: "Platforms evolve and algorithms change. Human behaviour doesn't. The creators that win are the ones that deeply understand their audiences and create content that genuinely resonates with them.",
  },
];

const tips = [
  "There is a difference between storytelling and telling a story. Storytelling is conviction and passion for the topic.",
  "Algorithm is nothing but human psychology. Replace \"algorithm\" with \"people.\" People didn't like your video — not the algorithm.",
  "Higher the watch time, higher the views.",
  "Always overdeliver in the video. Have multiple payoffs.",
  "Make videos people want to see, not what you like.",
  "View counts and watch time are the only data points worth analysing. Everything else is secondary.",
  "Don't treat your channel like a VC startup. It's not.",
  "0 to 10k takes a lot longer than 10k to 100k.",
  "Reputation is built over years and destroyed in seconds.",
  "Watch like a student, not a consumer. Every video is an opportunity to learn.",
  "Create a playlist. Every outlier video — add it. Analyse weekly.",
  "The gap between a struggling creator and a 1M+ creator is nearly always time allocation.",
  "If 90% of your time is filming and editing, you're a video maker — not a content creator.",
  "Allocate at least 25% of time to titles, thumbnails, ideas and intros.",
  "If you don't want to play the intro and hook game, upload to Vimeo. It's part of the job.",
  "The idea sets the ceiling. Packaging × execution = the result.",
  "Brainstorm 10 new ideas per day. Make it a muscle.",
  "Make great f***ing videos that people feel privileged to watch. Everything else is noise.",
  "Educate people. Don't just sell your packages.",
  "Post the video. It might change your life.",
];

const mythOrFact = [
  { q: "The right hashtags can make your content go viral.", a: "Myth" },
  { q: "Posting time significantly influences reach and engagement.", a: "Myth" },
  { q: "Replying to comments does not increase your reach.", a: "Fact" },
  { q: "The algorithm does not push your videos.", a: "Fact" },
  { q: "Tags do not matter on YouTube.", a: "Fact" },
];

const stats = [
  { k: "50M+", v: "Monthly organic views" },
  { k: "0.1%", v: "Top doctors we work with" },
  { k: "2 hrs", v: "Of your time / month" },
  { k: "100%", v: "Done-for-you craft" },
];

const tickerWords = [
  "Human Behaviour > Algorithms",
  "Specialisation",
  "Strategy First",
  "Audiences, Not Algorithms",
  "50M+ Monthly Views",
];

function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);
  return ref;
}

function Index() {
  const heroRef = useMouseGlow();
  const doubledTicker = [...tickerWords, ...tickerWords, ...tickerWords, ...tickerWords];

  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const ist = new Date(d.getTime() + 5.5 * 60 * 60 * 1000 + d.getTimezoneOffset() * 60000);
      setTime(
        ist.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) + " IST"
      );
    };
    tick();
    const i = setInterval(tick, 30000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Status bar */}
      <div className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 h-10 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
            India · {time}
          </div>
          <div className="hidden md:block">Social Media Studio for Doctors</div>
          <div>50M+ Monthly Views</div>
        </div>
      </div>

      {/* Nav */}
      <header className="fixed top-12 inset-x-0 z-50 px-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg tracking-tight flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            Y<span className="text-primary">FAME</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 glass rounded-full p-1.5">
            {["Doctors", "Process", "Philosophy", "Framework", "Quiz"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition">
                {n}
              </a>
            ))}
          </nav>
          <a
            href="mailto:hello@yfame.com"
            className="group glass rounded-full px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition flex items-center gap-2"
          >
            Work with us
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center justify-center bg-mesh overflow-hidden px-6 pt-24"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), oklch(0.70 0.19 250 / 0.18), transparent 40%)",
        }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-60 float-slow"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.20 250 / 0.5), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full blur-3xl opacity-50 float-slow-2"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.18 220 / 0.5), transparent 70%)" }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none" />

        <div
          className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-mono"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          <span>For India's Top 0.1% of Doctors</span>
        </div>
        <div
          className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-mono"
          style={{ writingMode: "vertical-rl" }}
        >
          <span>YouTube · Instagram</span>
        </div>

        <div className="relative max-w-[1200px] mx-auto text-center fade-up">
          <div className="chip mx-auto mb-10">
            <span className="w-1 h-1 rounded-full bg-primary" />
            50M+ organic views every month
          </div>

          <h1 className="text-[clamp(2.5rem,8.5vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
            <span className="block">
              Human beings are <span className="text-serif text-gradient-warm">predictable.</span>
            </span>
            <span className="block mt-1">
              Content is <span className="text-outline">too.</span>
            </span>
          </h1>

          <p className="mt-10 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The secret to virality isn't chasing algorithms.
            <br />
            It's understanding <span className="text-foreground">human behaviour</span> and mastering the <span className="text-foreground">fundamentals</span>.
          </p>

          <p className="mt-6 text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto font-mono uppercase tracking-[0.18em]">
            Social media for India's Top 0.1% of doctors · YouTube & Instagram
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@yfame.com"
              className="group relative px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_40px_-10px_var(--color-primary)]"
            >
              Start a project
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a href="#doctors" className="px-7 py-3.5 rounded-full glass hover:bg-secondary/40 transition">
              See case studies
            </a>
          </div>
        </div>


        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-mono">
          <span>Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
        </div>
      </section>

      {/* TICKER */}
      <section className="relative py-6 border-y border-border bg-card overflow-hidden">
        <div className="flex w-max ticker gap-12 items-center">
          {doubledTicker.map((w, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <span className="text-serif text-3xl md:text-5xl text-foreground whitespace-nowrap">{w}</span>
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s) => (
            <div key={s.v} className="bg-background px-6 py-10 md:py-14 text-center hover:bg-card transition">
              <div className="text-serif text-5xl md:text-7xl text-gradient-warm">{s.k}</div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS / CASE STUDIES */}
      <section id="doctors" className="py-28 md:py-40 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-2 chip self-start">01 / Doctors</div>
            <div className="md:col-span-10">
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
                Personal brands of <span className="text-serif text-gradient-warm">India's top doctors</span> — built by us.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <figure
                key={c.name}
                className={`group rounded-3xl overflow-hidden glass hover:border-primary/40 transition-all duration-500 ${i === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 chip !text-[9px]">Case Study</div>
                </div>
                <figcaption className="p-6">
                  <div className="text-2xl font-semibold tracking-tight">{c.name}</div>
                  <div className="mt-2 text-primary text-sm font-mono uppercase tracking-[0.15em]">{c.result}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:hello@yfame.com"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition"
            >
              <span className="w-8 h-px bg-current" />
              Request the full case study deck
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-28 md:py-40 border-t border-border relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-2 chip self-start">02 / Process</div>
            <div className="md:col-span-10">
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
                Give us <span className="text-serif text-gradient-warm">2 hours</span> a month. We handle the rest.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Content strategy",
              "Scripting",
              "Shooting & production",
              "Post production",
              "Click-worthy thumbnails",
              "Posting & analytics",
            ].map((step, i) => (
              <div
                key={step}
                className="glass rounded-2xl p-6 hover:border-primary/40 transition group"
              >
                <div className="text-serif text-3xl text-gradient-warm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 font-medium leading-tight">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-28 md:py-40 border-t border-border relative grain">
        <span className="grain-after absolute inset-0" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-20">
            <div className="md:col-span-2 chip self-start">03 / Philosophy</div>
            <div className="md:col-span-10">
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
                Our philosophy of <span className="text-serif text-gradient-warm">growth.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {philosophies.map((p, idx) => (
              <article
                key={p.num}
                className={`group relative p-10 rounded-[2rem] glass overflow-hidden hover:border-primary/40 transition-all duration-500 ${idx === 1 ? "md:translate-y-10" : ""}`}
              >
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="text-serif text-[7rem] md:text-[9rem] leading-none text-gradient-warm -ml-2 -mt-4">
                      {p.num}
                    </span>
                    <span className="chip mt-4">{p.tag}</span>
                  </div>
                  <h3 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-6 text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CCN FRAMEWORK + TIPS */}
      <section id="framework" className="py-28 md:py-40 border-t border-border relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-2 chip self-start">04 / Framework</div>
            <div className="md:col-span-10">
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
                Our viral philosophy: <span className="text-serif text-gradient-warm">the CCN Framework.</span>
              </h2>
            </div>
          </div>

          {/* CCN cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { letter: "C", word: "Curiosity", body: "Hook the viewer with a question they can't ignore in the first 3 seconds." },
              { letter: "C", word: "Conviction", body: "Deliver with belief. Storytelling is conviction — not the act of telling a story." },
              { letter: "N", word: "Novelty", body: "Show something they haven't seen framed this way before. Pattern, with a twist." },
            ].map((c) => (
              <div key={c.word} className="glass rounded-3xl p-8 hover:border-primary/40 transition group relative overflow-hidden">
                <div className="text-[10rem] leading-[0.8] font-display font-bold text-primary/10 group-hover:text-primary/20 transition absolute -top-4 -right-2 select-none">
                  {c.letter}
                </div>
                <div className="relative">
                  <div className="text-sm font-mono uppercase tracking-[0.25em] text-primary">{c.letter}</div>
                  <div className="mt-2 text-3xl font-bold">{c.word}</div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Content tips — masonry-ish */}
          <div className="grid md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <div className="chip mb-4">Content tips</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Things we keep telling <span className="text-serif text-gradient-warm">every creator.</span>
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Hard-won lessons from thousands of videos shipped across our roster.
                </p>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-3">
              {tips.map((t, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-5 hover:border-primary/30 transition flex gap-3 items-start"
                >
                  <span className="text-xs font-mono text-primary shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MYTH OR FACT */}
      <section id="quiz" className="py-28 md:py-40 border-t border-border relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-2 chip self-start">05 / Quiz</div>
            <div className="md:col-span-10">
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
                Is this actually <span className="text-serif text-gradient-warm">true?</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-xl">
                Quick reality-check on the things creators get told every day.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {mythOrFact.map((m, i) => (
              <details
                key={i}
                className="group glass rounded-2xl p-6 hover:border-primary/40 transition open:border-primary/40"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                  <div className="flex gap-4 items-start">
                    <span className="text-xs font-mono text-primary shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-snug">{m.q}</p>
                  </div>
                  <span className="text-2xl text-muted-foreground group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="mt-4 pl-10 flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.2em] ${
                      m.a === "Fact" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {m.a}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {m.a === "Fact" ? "Yes — that's true." : "Nope — common misconception."}
                  </span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 md:py-52 border-t border-border relative overflow-hidden bg-mesh grain">
        <span className="grain-after absolute inset-0" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <div className="chip mx-auto mb-8">We think strategically, not differently</div>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            One message to <span className="text-serif text-gradient-warm">yfame.com</span> could lead to the <span className="text-outline">best career decision</span> you've ever made.
          </h2>
          <a
            href="mailto:hello@yfame.com"
            className="group mt-14 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:scale-[1.03] transition shadow-[0_20px_60px_-15px_var(--color-primary)]"
          >
            hello@yfame.com
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-[minmax(0,1fr)_auto] md:flex md:items-center md:justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-bold text-foreground">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            Y<span className="text-primary">FAME</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em]">
            <a href="#doctors" className="hover:text-foreground transition">Doctors</a>
            <a href="#philosophy" className="hover:text-foreground transition">Philosophy</a>
            <a href="#framework" className="hover:text-foreground transition">Framework</a>
            <a href="#quiz" className="hover:text-foreground transition">Quiz</a>
          </nav>
          <div className="font-mono text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} · YFAME
          </div>
        </div>
      </footer>
    </div>
  );
}
