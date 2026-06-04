export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative bg-portfolio-bg">
      {/* Shared fixed background — same across all sections */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[15%] top-[10%] h-[35rem] w-[35rem] rounded-full bg-portfolio-accent/20 mix-blend-screen blur-[120px] animate-pulse" />
        <div
          className="absolute right-[10%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-portfolio-accent-soft/20 mix-blend-screen blur-[100px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,transparent_0%,rgba(0,0,0,0.4)_100%)]"
          aria-hidden
        />

        {/* Watermark */}
        <p
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center font-sans text-[clamp(3.5rem,14vw,11rem)] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] to-transparent"
          aria-hidden
        >
          AHNAF ZAKI
        </p>
      </div>

      <div className="relative z-10">{children}</div>
    </main>
  );
}
