'use client'; 

import PortfolioLayout from "@/components/PortfolioLayout"
import Content from "@/components/Project/Content"
import ProjectHero, { FilterValue } from "@/components/Project/Hero"
import { useState } from 'react';

const page = () => {
    const [active, setActive] = useState<FilterValue>('all');
    
    return (
        <PortfolioLayout>
           <ProjectHero active={active} setActive={setActive} />
           <Content active={active} />
        </PortfolioLayout>
    )
}

export default page