'use client'; 

import ExperienceContent from "@/components/Experience/Content";
import ExperienceHero, { FilterValue } from "@/components/Experience/Hero";
import PortfolioLayout from "@/components/PortfolioLayout"
import { useState } from 'react';

const page = () => {
    const [active, setActive] = useState<FilterValue>('all');
    
    return (
        <PortfolioLayout>
            <ExperienceHero active={active} setActive={setActive} />
            <ExperienceContent active={active} />
        </PortfolioLayout>
    )
}

export default page