import Adaptation from "../components/Enrollment/Adaptation";
import Enroll from "../components/Enrollment/Enroll";
import Header from "../components/Enrollment/Header";
import Prices from "../components/Enrollment/Prices";
import Footer from "../components/ForAllPages/Footer";

const Enrollment = () => {
  return (
    <section>
      <Header />
      <Enroll />
      <Prices />
      <Adaptation />
      <Footer />
    </section>
  );
};

export default Enrollment;
