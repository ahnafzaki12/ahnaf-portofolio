'use client';

import React from 'react';
import { type FilterValue } from '@/data/experienceData';

export type { FilterValue };

const FILTERS = [
    { value: 'all', label: 'All Experience' },
    { value: 'professional', label: 'Work Experience' },
    { value: 'extracurricular', label: 'Organizations' },
    { value: 'education', label: 'Training & Bootcamps' },
] as const satisfies ReadonlyArray<{ value: FilterValue; label: string }>;

interface ExperienceHeroProps {
    active: FilterValue;
    setActive: (filter: FilterValue) => void;
}

export default function ExperienceHero({ active, setActive }: ExperienceHeroProps) {
    return (
        <section
            id="experience"
            className="relative flex min-h-0 flex-col justify-center pt-24 pb-6 md:pt-32 md:pb-8"
        >
            <div className="mx-auto flex w-full max-w-8xl flex-col gap-8 px-6 md:gap-10 md:px-12 lg:px-16">

                {/* 1. TOP — Title and description */}
                <div className="flex flex-col gap-4 max-w-2xl">
                    <span className="text-xs font-semibold tracking-[0.2em] text-portfolio-muted uppercase">
                        Timeline
                    </span>

                    <h1 className="text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[0.92] tracking-tighter text-white">
                        Experience
                    </h1>

                    <p className="text-sm leading-relaxed text-portfolio-muted max-w-xl">
                        A chronological look at my professional roles, leadership in organizations, 
                        and dedicated periods of intensive technical training.
                    </p>
                </div>

                {/* 2. MIDDLE — Radio Button Filter Group */}
                <div className="flex flex-wrap gap-2 self-start">
                    {FILTERS.map((filter) => {
                        const isSelected = active === filter.value;
                        return (
                            <label
                                key={filter.value}
                                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 select-none
                                    ${isSelected
                                        ? 'bg-portfolio-accent-soft/10 text-white border border-portfolio-accent-soft/20 font-semibold shadow-[0_0_15px_rgba(79,47,109,0.15)]'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white border border-transparent'
                                    }
                                `}
                            >
                                <input
                                    type="radio"
                                    name="experience-filter"
                                    value={filter.value}
                                    checked={isSelected}
                                    onChange={() => setActive(filter.value)}
                                    className="sr-only"
                                />
                                {filter.value === 'all' ? 'All' : filter.label}
                            </label>
                        );
                    })}
                </div>

                {/* 3. BOTTOM — Decorative divider */}
                <div className="flex items-center gap-4 pt-4 w-full">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-[10px] tracking-[0.25em] text-white/20 uppercase whitespace-nowrap">
                        {active === "all" ? "All Experience" : FILTERS.find((f) => f.value === active)?.label}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

            </div>
        </section>
    );
}