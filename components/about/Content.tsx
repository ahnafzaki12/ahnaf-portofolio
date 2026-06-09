import Link from "next/link";

const TECH_STACK = {
  dataScience: ["Python", "R", "SQL", "Pandas/NumPy", "Scikit-Learn", "Tableau"],
  softwareDev: ["JavaScript/TypeScript", "Next.js", "React", "Node.js", "Tailwind CSS", "Supabase", "Git"],
} as const;

const SOCIAL_LINKS = [
  { href: "mailto:ahnafzaki.b@gmail.com", label: "Email", text: "ahnafzaki.b@gmail.com" },
  { href: "https://github.com/ahnafzaki12", label: "GitHub", text: "github.com/ahnafzaki12" },
  { href: "https://www.linkedin.com/in/ahnaf-zaki/", label: "LinkedIn", text: "linkedin.com/in/ahnaf-zaki" },
] as const;

export default function AboutContent() {
  return (
    <section id="about-content" className="py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-8xl flex-col gap-16 px-6 md:gap-24 md:px-12 lg:px-16">
        
        {/* ROW 1: Biography & Tech Stack */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT: Biography */}
          <div className="flex flex-col gap-5 lg:col-span-6">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-portfolio-muted uppercase">
              Biography
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-portfolio-muted">
              <p>
                Hi! I am <span className="text-white font-medium">Ahnaf Zaki</span>, an Information Systems student driven by a deep fascination with the intersection of data management and software engineering. To me, coding isn't just about syntax it's an engineering toolkit used to extract meaningful insights from raw data.
              </p>
              <p>
                My current focus revolves around architecting fast, production-ready web applications while leveraging <span className="text-white font-medium">Data Science</span> methodologies to deliver intelligent, data-driven software solutions. I am constantly eager to learn new architectures, optimize queries, and clean complex datasets.
              </p>
            </div>

            {/* View CV Button */}
            <div className="mt-2">
              <a
                href="/cv-ahnaf-zaki.pdf" // Put your CV pdf file inside public folder
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs tracking-wider text-white transition-all duration-300 hover:border-portfolio-accent/50 hover:bg-portfolio-accent/10 uppercase"
              >
                <span>View CV</span>
                <span className="text-portfolio-accent text-xs">↓</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Tools & Technology */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8">
            <div className="flex flex-col gap-5">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-portfolio-muted uppercase">
                Tech Stack
              </h2>
              
              {/* Data Science Category */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[11px] font-medium tracking-wider text-white/50 uppercase">
                  Data Science & Analytics
                </span>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.dataScience.map((tech) => (
                    <span 
                      key={tech}
                      className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-colors hover:border-portfolio-accent/30 hover:bg-portfolio-accent/[0.03]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Dev Category */}
              <div className="flex flex-col gap-2.5 mt-2">
                <span className="text-[11px] font-medium tracking-wider text-white/50 uppercase">
                  Software & Web Development
                </span>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.softwareDev.map((tech) => (
                    <span 
                      key={tech}
                      className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-colors hover:border-portfolio-accent/30 hover:bg-portfolio-accent/[0.03]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ROW 2: Education & Experience Showcase */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/5 pt-16 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT: Education Timeline (7/12) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-portfolio-muted uppercase">
              Education
            </h2>
            <div className="relative border-l border-white/10 pl-5 ml-1 flex flex-col gap-2">
              {/* Timeline Bullet */}
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-portfolio-accent shadow-[0_0_8px_rgba(79,47,109,0.8)]" />
              
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-wider text-white uppercase">
                  2023 — Present
                </span>
                <span className="rounded-md border border-portfolio-accent/20 bg-portfolio-accent/[0.05] px-2 py-0.5 text-[11px] font-medium text-white">
                  GPA 3.95 / 4.00
                </span>
              </div>
              <h3 className="text-base font-bold text-white mt-1">
                Bachelor of Information Systems
              </h3>
              <p className="text-sm text-portfolio-muted">
                Universitas Pembangunan Nasional “Veteran” Jawa Timur
              </p>
            </div>
          </div>

          {/* RIGHT: Project Counter Stat Box (4/12) */}
          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-portfolio-muted uppercase">
              Showcase
            </h2>
            <div className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01] p-6 text-center transition-all duration-300 hover:border-portfolio-accent/30 hover:bg-portfolio-accent/[0.02]">
              <span className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-none tracking-tighter text-white group-hover:text-portfolio-accent-soft transition-colors">
                5+
              </span>
              <span className="text-xs font-semibold tracking-widest text-portfolio-muted uppercase mt-2">
                Completed Projects
              </span>
              <p className="text-[11px] text-white/40 mt-2 max-w-[200px]">
                Ranging from predictive data modeling to dynamic modern web applications.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 3: Collaboration & Contact Card */}
        <div className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-md md:p-12 overflow-hidden">
          <div className="pointer-events-none absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full bg-portfolio-accent/20 blur-[40px]" />
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 md:items-center">
            
            {/* Left: Engagement CTA */}
            <div className="flex flex-col gap-4 md:col-span-7">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-portfolio-muted uppercase">
                Collaboration
              </h2>
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Interested in working together?
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-portfolio-muted">
                I am always open to commercial projects, data research initiatives, internship opportunities, or just casual tech chats. Let’s build something impactful together.
              </p>
            </div>

            {/* Right: Contact Links */}
            <div className="flex flex-col gap-3.5 md:col-span-5 md:border-l md:border-white/10 md:pl-8">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-white/40 uppercase">
                Connect with me
              </span>
              <div className="flex flex-col gap-2.5">
                {SOCIAL_LINKS.map(({ href, label, text }) => (
                  <Link
                    key={href}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex flex-col justify-center rounded-xl border border-white/5 bg-white/[0.01] px-4 py-3 transition-all duration-300 hover:border-portfolio-accent/40 hover:bg-portfolio-accent/[0.04]"
                  >
                    <span className="text-[10px] text-portfolio-muted transition-colors group-hover:text-portfolio-accent-soft">
                      {label}
                    </span>
                    <span className="text-xs font-medium text-white/80 mt-0.5 break-all">
                      {text} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[10px] text-white/40">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}