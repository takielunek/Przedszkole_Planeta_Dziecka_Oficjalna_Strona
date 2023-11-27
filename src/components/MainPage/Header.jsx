import Navbar from "./Navbar";
import styles from "../../style";
import img1 from "../../assets/kids/img_1.png";
import arrow9 from "../../assets/arrows/Arrow_9.png";

const Header = () => {
  return (
    <section className="bg-purple pl-[40px] sm:pl-[72px]">
      <Navbar />
      <div className={`${styles.flexRow} relative`}>
        <div className="w-[636px]">
          <h4 className={`${styles.s25} text-white mt-[89px]`}>
            Witamy na Planecie Dziecka
          </h4>
          <h1 className={`${styles.n60}`}>
            Razem Wzrastamy, Razem Odkrywamy Świat!
          </h1>
          <button
            className={`${styles.button} ${styles.s25} text-white my-[57px]`}
          >
            Zapisz dziecko
          </button>
          <div className={`${styles.flexRow} text-center space-x-6`}>
            <div>
              <h1 className={`${styles.n60}`}>500+</h1>
              <h4 className={`${styles.n25} text-white`}>Podopiecznych</h4>
            </div>
            <div className="mb-[116px]">
              <h1 className={`${styles.n60}`}>1000+</h1>
              <h4 className={`${styles.n25} text-white`}>
                Zadowolonych rodziców
              </h4>
            </div>
            <div>
              <h1 className={`${styles.n60}`}>9</h1>
              <h4 className={`${styles.n25} text-white w-[210px]`}>
                lat doświadczenia
              </h4>
            </div>
          </div>
        </div>
        <img
          src={img1}
          alt="Dziewczynka"
          className="absolute -inset-y-16 -right-10 h-[950px]"
        />
        <img
          src={arrow9}
          alt="Kreskowana krzywa"
          className="absolute bottom-[420px] left-[340px]"
        />
      </div>
    </section>
  );
};

export default Header;
