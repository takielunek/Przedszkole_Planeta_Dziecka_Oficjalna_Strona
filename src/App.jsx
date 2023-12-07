import AllRoutes from "./components/ForAllPages/AllRoutes";
import styles from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "./components/ForAllPages/Cookies";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className={`${styles.boxWidth}`}>
      <Router>
        <AllRoutes />
      </Router>
      <Cookies />
    </div>
  );
}
