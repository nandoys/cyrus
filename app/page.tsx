import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <Services />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
