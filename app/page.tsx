import Hero from "@/components/Hero";
import PortfolioLayout from "@/components/PortfolioLayout";
import Services from "@/components/Services";

export default function Home() {
  return (
    <PortfolioLayout>
      <Hero />
      <Services />
    </PortfolioLayout>
  );
}
