import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { Products } from "./components/Products";
import { HowToOrder } from "./components/HowToOrder";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { SubscriptionPlans } from "./components/SubscriptionPlans";
import { Testimonials } from "./components/Testimonials";
import { CoverageArea } from "./components/CoverageArea";
import { OrderContact } from "./components/OrderContact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Products />
        <HowToOrder />
        <Services />
        <WhyChooseUs />
        <SubscriptionPlans />
        <Testimonials />
        <CoverageArea />
        <OrderContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
