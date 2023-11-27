import Navbar from "../ForAllPages/Navbar";
import styles from "../../style";

const Header = () => {
  return (
    <section className="bg-organisation bg-cover px-[40px] sm:px-[72px]">
      <Navbar />
      <div className="text-center text-white">
        <h1 className={`${styles.s54} pt-[151px]`}>Organizacja</h1>
        <h4 className={`${styles.n25} mt-[94px]`}>
          Naszym celem jest stworzenie miejsca przyjaznego Dzieciom, w którym
          mogą liczyć na zrozumienie i wspaniałe warunki do zabawy i nauki.
        </h4>
        <h4 className={`${styles.n25} mt-[50px] pb-[239px]`}>
          W tym miejscu dziecko dostanie wszystko czego potrzebuje.
        </h4>
      </div>
    </section>
  );
};

export default Header;
