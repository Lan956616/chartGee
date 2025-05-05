import styles from "./homepage.module.css";
import Header from "@/components/header/header";
import HeroSection from "@/components/homepage/heroSection/heroSection";
import StepSection from "@/components/homepage/stepSection/stepSection";
import AboutSection from "@/components/homepage/aboutSection/aboutSection";
import DisplaySection from "@/components/homepage/displaySection/displaySection";
import ChartHighlightSection from "@/components/homepage/chartHighlightSection/chartHighlightSection";
import FAQSection from "@/components/homepage/FAQSection/FAQSection";
import Footer from "@/components/homepage/footer/footer";

export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <Header />
      <HeroSection />
      <StepSection />
      <AboutSection />
      <DisplaySection />
      <ChartHighlightSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
