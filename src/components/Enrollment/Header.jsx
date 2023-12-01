import Navbar from "../ForAllPages/Navbar";
import styles from "../../style";

const Header = () => {
  return (
    <section className="bg-enrollment bg-cover bg-center px-[20px] xxxxl:px-[40px] md:px-[72px]">
      <Navbar />
      <h1
        className={`${styles.s54} text-center text-white pt-[50px] xs:pt-[265px] pb-[80px] xs:pb-[348px]`}
      >
        Zapisy
      </h1>
    </section>
  );
};

export default Header;
