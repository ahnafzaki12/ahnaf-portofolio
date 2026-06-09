import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="about-header"
      className="relative flex flex-col justify-center border-b border-white/5 pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* Background Glow Ringan agar senada dengan Hero */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-portfolio-accent/10 blur-[100px]" />

      <div className="mx-auto flex w-full max-w-8xl flex-col gap-6 px-6 md:px-12 lg:px-16">

        {/* Main Heading & Sub-heading */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h1 className="text-[clamp(2rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-tighter text-white">
              Behind the <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-white to-portfolio-muted bg-clip-text text-transparent">
                Data & Code.
              </span>
            </h1>
            <p className="text-xs leading-relaxed text-portfolio-muted uppercase tracking-wider">
              A glimpse into my journey, mindset, and the tech stack I use to solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}