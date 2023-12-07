import Footer from "../components/ForAllPages/Footer";
import AboutUs from "../components/MainPage/AboutUs";
import ContactSection from "../components/MainPage/ContactSection";
import Gallery from "../components/MainPage/Gallery";
import Header from "../components/MainPage/Header";
import Location from "../components/MainPage/Location";
import Logo from "../components/MainPage/Logo";


const MainPage = () => {
  return (
    <section>
      <Header />
      <AboutUs />
      <Logo />
      <Gallery />
      <Location />
      <ContactSection />
      <Footer />
    </section>
  );
};

export default MainPage;
