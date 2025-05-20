import styles from "./homePage.module.css";
import Header from "@/components/homePage/header/Header";
import HeroSection from "@/components/homePage/heroSection/HeroSection";
import StepSection from "@/components/homePage/stepSection/StepSection";
import AboutSection from "@/components/homePage/aboutSection/AboutSection";
import DisplaySection from "@/components/homePage/displaySection/DisplaySection";
import ChartHighlightSection from "@/components/homePage/chartHighlightSection/ChartHighlightSection";
import FAQSection from "@/components/homePage/FAQSection/FAQSection";
import Footer from "@/components/homePage/footer/Footer";

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
