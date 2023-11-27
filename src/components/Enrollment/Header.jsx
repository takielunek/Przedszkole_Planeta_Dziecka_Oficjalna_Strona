import Navbar from "../ForAllPages/Navbar";
import styles from "../../style";

const Header = () => {
  return (
    <section className="bg-enrollment bg-cover px-[40px] sm:px-[72px]">
      <Navbar />
      <h1
        className={`${styles.s54} text-center text-white pt-[265px] pb-[348px]`}
      >
        Zapisy
      </h1>
    </section>
  );
};

export default Header;
