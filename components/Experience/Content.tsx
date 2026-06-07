'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_DATA, type FilterValue } from '@/data/experienceData';

interface ExperienceContentProps {
    active: FilterValue;
}

export default function ExperienceContent({ active }: ExperienceContentProps) {
    // Filter the items dynamically based on hero component state
    const filteredData = EXPERIENCE_DATA.filter(
        (item) => active === 'all' || item.type === active
    );

    return (
        <section className="relative w-full pb-24 md:pb-32">
            <div className="mx-auto w-full max-w-8xl px-6 md:px-12 lg:px-16">
                
                {/* Timeline Axis Container */}
                <div className="relative border-l border-white/10 ml-3 md:ml-4 flex flex-col gap-12 md:gap-16">
                    
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Timeline Dot Indicator */}
                                <div className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full border border-portfolio-accent-soft/40 bg-zinc-950 transition-all duration-300 group-hover:scale-125 group-hover:border-white group-hover:bg-portfolio-accent-soft" />

                                {/* Card Header Details */}
                                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                                    <div>
                                        <span className="text-xs font-semibold tracking-wider text-portfolio-accent-soft uppercase">
                                            {item.type}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
                                            {item.role}
                                        </h3>
                                        <p className="text-sm font-medium text-white/80 mt-0.5">
                                            {item.company} <span className="text-white/40 mx-2">•</span> <span className="text-white/50 text-xs font-normal">{item.location}</span>
                                        </p>
                                    </div>
                                    
                                    <div className="text-xs font-mono tracking-widest text-portfolio-muted uppercase md:text-right pt-1 md:pt-0">
                                        {item.period}
                                    </div>
                                </div>

                                {/* Body Description */}
                                <ul className="mt-4 flex flex-col gap-2.5 max-w-3xl">
                                    {item.description.map((bullet, i) => (
                                        <li 
                                            key={i} 
                                            className="text-sm leading-relaxed text-portfolio-muted relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/20"
                                        >
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech & Skill Tags */}
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/60 uppercase"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Fallback empty view */}
                    {filteredData.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm text-portfolio-muted pl-8 md:pl-12 py-8"
                        >
                            No experience entries found matching this category.
                        </motion.div>
                    )}
                </div>

            </div>
        </section>
    );
}