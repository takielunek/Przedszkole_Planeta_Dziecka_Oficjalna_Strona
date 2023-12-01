import FooterNavbar from "./FooterNavbar";
import logo from "../../assets/logo/logo.png";
import logo1 from "../../assets/logo/logo1.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/icon/facebook.png";
import email from "../../assets/icon/email.png";
import phone from "../../assets/icon/phone.png";
import styles from "../../style";

const Footer = () => {
  return (
    <section className="bg-orange px-[20px] xs:px-[40px] md:px-[72px] pt-[16px]">
      <div className="flex flex-row justify-between">
        <div>
          {" "}
          <Link to={"/"} className="flex flex-row">
            <img
              src={logo}
              alt="Logo firmy"
              className="w-[60px] xs:w-[70px] md:w-[77px]"
            />
            <img
              src={logo1}
              alt="Logo firmy"
              className="w-[80px] xs:w-[100px] md:w-[120px] my-3 ml-3 hidden xs:block"
            />
          </Link>{" "}
        </div>
        <div>
          <FooterNavbar />
        </div>
        <div className="flex flex-row justify-between w-[100px] xs:w-[140px] md:w-[191px] pt-[13px]">
          <a href="https://www.facebook.com/planetadziecka.suchedniow">
            <img
              src={facebook}
              alt="facebook icon"
              className="w-[25px] xs:w-[36px] h-[25px] xs:h-[36px]"
            />
          </a>
          <a href="mailto:suchedniow@planeta-dziecka.pl">
            <img
              src={email}
              alt="email icon"
              className="w-[25px] xs:w-[36px] h-[25px] xs:h-[36px]"
            />
          </a>
          <a href="tel:501 806 012">
            <img
              src={phone}
              alt="phone icon"
              className="w-[25px] xs:w-[36px] h-[25px] xs:h-[36px]"
            />
          </a>
        </div>
      </div>
      <div className="text-center mt-[20px] pb-[61px]">
        <h5 className={`${styles.n15}`}>
          Adres: ul. Sportowa 1A, 26-130 Suchedniów
        </h5>
        <a href="mailto:suchedniow@planeta-dziecka.pl">
          {" "}
          <h5 className={`${styles.n15}`}>
            Email:{" "}
            <span className={`${styles.n15} underline decoration-1`}>
              suchedniow@planeta-dziecka.pl
            </span>
          </h5>
        </a>
        <a href="tel:501 806 012">
          {" "}
          <h5 className={`${styles.n15}`}>
            Telefon:{" "}
            <span className={`${styles.n15} underline decoration-1`}>
              +48 501 806 012
            </span>
          </h5>
        </a>
      </div>
      <div>
        <h5 className={`${styles.n15} text-end`}>created by Website Technologies.pl</h5>
      </div>
    </section>
  );
};

export default Footer;
