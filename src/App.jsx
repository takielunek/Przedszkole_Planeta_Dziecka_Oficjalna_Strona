import AllRoutes from "./components/ForAllPages/AllRoutes";
import styles from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "./components/ForAllPages/Cookies";

export default function App() {
  return (
    <div className={`${styles.boxWidth}`}>
      <Router>
        <AllRoutes />
      </Router>
      <Cookies />
    </div>
  );
}
