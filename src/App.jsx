import AllRoutes from "./components/ForAllPages/AllRoutes";
import styles from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "./components/ForAllPages/Cookies";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";


export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

   const ogImage =
     "https://przedszkole-planeta-dziecka.netlify.app/assets/logo-wSbSBOOI.png";

  return (
    <div className={`${styles.boxWidth}`}>
      <Router>
        <AllRoutes />
      </Router>
      <Cookies />
      <Helmet>
        <meta
          property="og:title"
          content="Niepubliczne Przedszkole Planeta Dziecka"
        />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:url"
          content="https://przedszkole-planeta-dziecka.netlify.app/"
        />
        <meta property="og:type" content="website" />
      </Helmet>
    </div>
  );
}
