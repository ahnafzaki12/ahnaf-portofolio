'use client'; 

import AboutContent from "@/components/about/Content";
import Hero from "@/components/about/Hero";
import PortfolioLayout from "@/components/PortfolioLayout"

const page = () => {
    
    return (
        <PortfolioLayout>
            <Hero />
            <AboutContent />
        </PortfolioLayout>
    )
}

export default page