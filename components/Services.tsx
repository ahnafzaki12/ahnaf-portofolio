"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Machine Learning",
    description:
      "Building predictive models and intelligent systems that learn from data — from classification and regression to recommendation engines and automated decision-making pipelines.",
    images: {
      main: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      top: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
      bottom: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    },
  },
  {
    title: "Deep Learning",
    description:
      "Designing and training neural networks for complex pattern recognition — including computer vision, natural language processing, and generative AI applications.",
    images: {
      main: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      top: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
      bottom: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    },
  },
  {
    title: "Data Science",
    description:
      "Transforming raw data into meaningful insights through statistical analysis, visualization, and exploratory research to drive informed business and product decisions.",
    images: {
      main: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      top: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      bottom: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    },
  },
  {
    title: "Software Development",
    description:
      "Crafting clean, scalable web applications and backend systems with modern frameworks — focused on performance, maintainability, and great user experiences.",
    images: {
      main: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      top: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
      bottom: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    },
  },
] as const;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-4 w-4 shrink-0 text-white/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16">
        {/* Left — title & accordion */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tighter text-white">
            what i do
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-portfolio-muted">
            I combine data science, machine learning, and software engineering to
            build intelligent solutions that solve real-world problems.
          </p>

          <ul className="mt-10 divide-y divide-white/10">
            {services.map((service, index) => {
              const isOpen = activeIndex === index;

              return (
                <li key={service.title}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-white"
                  >
                    <span
                      className={`text-base font-medium transition-colors md:text-lg ${isOpen ? "text-white" : "text-white/80"}`}
                    >
                      {service.title}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-relaxed text-portfolio-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — image collage */}
        <div className="flex items-center">
          <div className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_0_60px_rgba(79,47,109,0.25)] backdrop-blur-sm transition-all duration-500 hover:border-portfolio-accent/40 hover:shadow-[0_0_80px_rgba(79,47,109,0.35)]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-portfolio-accent/10 via-transparent to-portfolio-accent-soft/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative grid h-[320px] grid-cols-2 grid-rows-2 gap-2 sm:h-[380px] md:h-[420px]">
              <div className="relative row-span-2 overflow-hidden rounded-2xl">
                <Image
                  key={active.images.main}
                  src={active.images.main}
                  alt={`${active.title} showcase`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  key={active.images.top}
                  src={active.images.top}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 25vw, 15vw"
                  className="object-cover transition-opacity duration-500"
                  aria-hidden
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  key={active.images.bottom}
                  src={active.images.bottom}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 25vw, 15vw"
                  className="object-cover transition-opacity duration-500"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
