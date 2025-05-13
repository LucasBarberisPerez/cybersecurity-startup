import Footer from "./component/layout/footer/Footer";
import Header from "./component/layout/header/Header";
import Main from "./component/layout/main/Main";
import AboutSection from "./component/section/about/AboutSection";
import ContactSection from "./component/section/contact/ContactSection";
import HeroSection from "./component/section/hero/HeroSection";
import ServiceSection from "./component/section/service/ServiceSection";
import "./style/global.scss";
import info from "./info";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = info.COMPANY_NAME;
  }, []);
  return (
    <>
      <Header />
      <Main>
      <HeroSection />
        <AboutSection/>
        <ServiceSection/>
        <ContactSection/>
      </Main>
      <Footer />
    </>
  );
}

export default App;
