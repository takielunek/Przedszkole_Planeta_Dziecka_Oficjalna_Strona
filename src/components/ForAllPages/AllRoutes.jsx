import MainPage from '../../pages/MainPage'
import Organisation from "../../pages/Organisation";
import Program from "../../pages/Program";
import Enrollment from "../../pages/Enrollment";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/program" element={<Program />} />
      <Route path="/organisation" element={<Organisation />} />
      <Route path="/enrollment" element={<Enrollment />} />
    </Routes>
  );
}

export default AllRoutes