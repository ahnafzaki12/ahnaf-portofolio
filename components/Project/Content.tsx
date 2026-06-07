'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';

type FilterValue = 'all' | 'web' | 'mobile' | 'ai-ml';

interface ContentProps {
  active: FilterValue;
}

export default function Content({ active }: ContentProps) {
  const filteredProjects = PROJECTS.filter(
    (project) => active === 'all' || project.category === active
  );

  return (
    <section className="mx-auto w-full max-w-8xl px-6 pb-24 md:px-12 lg:px-16">
      {/* divide-y otomatis memberikan garis border tipis di antara tiap baris */}
      <div className="flex flex-col divide-y divide-white/10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col md:flex-row gap-6 md:gap-8 py-10 first:pt-0 last:pb-0"
          >
            {/* LEFT — Clean Image (Tanpa frame card) */}
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl md:max-w-[260px] lg:max-w-[320px] bg-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </div>

            {/* RIGHT — Project Details */}
            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                {/* Category Tag */}
                <span className="text-[10px] font-semibold tracking-[0.15em] text-portfolio-accent uppercase">
                  {project.category === 'ai-ml' ? 'AI / ML' : project.category}
                </span>

                {/* Title */}
                <h3 className="mt-1 text-xl font-bold text-white transition-colors duration-300 group-hover:text-portfolio-accent-soft">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-portfolio-muted">
                  {project.description}
                </p>
              </div>

              {/* Footer Row: Tech Stack & Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] font-medium text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links (Dibuat minimalis tanpa tombol tebal) */}
                <div className="flex items-center gap-5 text-xs font-medium">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors duration-300"
                    >
                      GitHub
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white/60 hover:text-portfolio-accent-soft transition-colors duration-300"
                    >
                      Live Demo <span className="text-[10px]">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-sm text-portfolio-muted">Belum ada project untuk kategori ini.</p>
        </div>
      )}
    </section>
  );
}