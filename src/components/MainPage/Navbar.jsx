import logo from "../../assets/logo/logo.png";
import logo1 from "../../assets/logo/logo1.png";
import { Link } from "react-router-dom";
import styles from "../../style";
import MobileNavbar from "../ForAllPages/MobileNavbar";

const Navbar = () => {
  return (
    <section className="flex flex-row py-1.5 justify-between pl-[10px] xs:pl-[40px]">
      <div>
        <Link to={"/"} className="flex flex-row">
          <img
            src={logo}
            alt="Logo firmy"
            className="w-[60px] xs:w-[70px] ss:w-[77px]"
          />
          <img
            src={logo1}
            alt="Logo firmy"
            className="w-[80px] xs:w-[100px] ss:w-[120px] my-3 ml-3"
          />
        </Link>{" "}
      </div>
      <div className="hidden sm:block pr-[40px] md:pr-[72px]">
        <div className="flex flex-row py-6 w-[450px] md:w-[636px] justify-between ">
          <div className="space-x-6 md:space-x-12">
            <Link to={"/"} className={`${styles.textHover} ${styles.s16}`}>
              O nas
            </Link>
            <Link
              to={"/program"}
              className={`${styles.textHover} ${styles.s16}`}
            >
              Program
            </Link>
            <Link
              to={"/organisation"}
              className={`${styles.textHover} ${styles.s16}`}
            >
              Organizacja
            </Link>
            <Link
              to={"/enrollment"}
              className={`${styles.textHover} ${styles.s16}`}
            >
              Zapisy
            </Link>
          </div>
          <div>
            <a
              href="tel:501 806 012"
              className={`${styles.r16} border-[3px] border-pink py-2.5 px-4 text-white rounded-3xl`}
            >
              +48 501 806 012
            </a>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </section>
  );
};

export default Navbar;
