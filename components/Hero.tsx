import Image from "next/image";
import Link from "next/link";

const PROFILE_IMAGE =
  "https://rvrienhitlrjmvztqulq.supabase.co/storage/v1/object/public/product_images/Portofolio/profile-img.png";

const socialLinks = [
  {
    href: "https://github.com/ahnafzaki12",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ahnaf-zaki/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.062 2.062 0 0 1 2.063-2.063 2.062 2.062 0 0 1 2.063 2.063 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "mailto:ahnafzaki.b@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-0 flex-col justify-center md:min-h-screen"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pb-12 pt-24 md:min-h-screen md:flex-row md:items-center md:justify-between md:gap-8 md:px-12 md:pb-0 md:pt-20 lg:px-16">
        {/* LEFT — text content */}
        <div className="flex w-full flex-1 flex-col gap-5 md:gap-7">
          <span className="text-xs font-semibold tracking-[0.2em] text-portfolio-muted uppercase">
            Information Systems Student
          </span>

          <h1 className="text-[clamp(2.2rem,10vw,5.5rem)] font-bold leading-[0.92] tracking-tighter text-white">
            Ahnaf Zaki
          </h1>

          <p className="max-w-sm text-sm leading-relaxed text-portfolio-muted md:max-w-md">
            My name is{" "}
            <span className="text-portfolio-text font-medium">Ahnaf Zaki</span>.
            I am an information system student passionate about data science and
            software development, driven to build impactful, data-driven applications.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {socialLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-tr hover:from-portfolio-accent hover:to-portfolio-accent-soft hover:text-white hover:shadow-[0_0_20px_rgba(79,47,109,0.6)]"
              >
                {icon}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="mailto:ahnafzaki.b@gmail.com"
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs tracking-widest text-white/70 transition-all duration-300 hover:border-portfolio-accent/60 hover:bg-portfolio-accent/10 hover:text-white uppercase"
          >
            <span className="text-portfolio-accent">+</span> Get in touch
          </Link>
        </div>

        {/* RIGHT — profile image in card display */}
        <div className="flex w-full flex-1 items-center justify-center md:justify-end">
          <div className="group relative w-full max-w-[260px] rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-portfolio-accent/40 hover:shadow-[0_0_60px_rgba(79,47,109,0.3)] sm:max-w-[300px] md:max-w-[340px] md:p-5">

            {/* Card inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/10 via-transparent to-portfolio-accent-soft/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Card header label */}
            <div className="relative z-10 mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
                Portfolio
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15 text-[10px] text-white/40">
                ↓
              </span>
            </div>

            {/* Profile image */}
            <div className="relative z-10 aspect-[4/5] w-full animate-float drop-shadow-[0_20px_50px_rgba(79,47,109,0.5)]">
              {/* Glow under image */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-32 w-48 -translate-x-1/2 rounded-full bg-portfolio-accent/40 blur-[50px]" />
              <Image
                src={PROFILE_IMAGE}
                alt="Ahnaf Zaki — Information System student"
                fill
                priority
                sizes="(max-width: 768px) 260px, 22rem"
                className="relative z-10 object-contain object-bottom"
              />
            </div>

            {/* Card footer */}
            <div className="relative z-10 mt-3 flex items-center justify-between border-t border-white/10 pt-3">
              <div>
                <p className="text-sm font-semibold text-white">Ahnaf Zaki</p>
                <p className="text-xs text-white/40">Information Systems</p>
              </div>
              <Link
                href="mailto:ahnafzaki.b@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-white/60 transition-all duration-300 hover:border-portfolio-accent/50 hover:text-white"
              >
                Contact <span className="text-[10px]">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
