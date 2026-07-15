import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { PlansSummary } from "@/components/landing/PlansSummary";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Testimonials />
        <PlansSummary />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
