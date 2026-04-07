import Benefits from "../components/Home/Benefits";
import CTA from "../components/Home/CTA";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import ServicesOverview from "../components/Home/ServicesOverview";
import Testimonials from "../components/Home/Testimonials";


const Home = () => (
  <main className="min-h-screen">
    <Hero />
    <Partners />
    <ServicesOverview />
    <Benefits />
    <Testimonials />
    <CTA />
  </main>
);

export default Home;