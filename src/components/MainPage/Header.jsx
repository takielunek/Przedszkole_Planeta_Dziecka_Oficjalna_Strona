import Navbar from "./Navbar";
import styles from "../../style";
import img1 from "../../assets/kids/img_1.png";
import arrow9 from "../../assets/arrows/Arrow_9.png";


const Header = () => {
  return (
    <section className="bg-purple pl-[0px] xxxxl:pl-[40px] md:pl-[72px]">
      <Navbar />
      <div className={`${styles.flexRow} relative`}>
        <div>
          <div className="w-[100%] xxxxl:w-[400px] md:w-[500px] xxxl:w-[636px] text-center xxxxl:text-start">
            <div className="flex justify-center">
              <img
                src={img1}
                alt="Dziewczynka"
                className="h-[260px] xxs:h-[280px] xs:h-[420px] ss:h-[550px] sm:h-[600px] block xxxxl:hidden"
              />
            </div>
            <h4 className={`${styles.s25} text-white xxxxl:mt-[89px]`}>
              Witamy na Planecie Dziecka
            </h4>
            <h1 className={`${styles.n60}`}>
              Razem Wzrastamy, Razem Odkrywamy Świat!
            </h1>
            <form action="/enrollment">
              {" "}
              <button
                className={`${styles.button} ${styles.s25} text-white my-[57px]`}
              >
                Zapisz dziecko
              </button>
            </form>
          </div>
        </div>
        <img
          src={img1}
          alt="Dziewczynka"
          className="absolute -inset-y-6 -right-10 h-[600px] md:h-[680px] lg:h-[750px] hidden xxxxl:block"
          data-aos="fade-left"
        />

        <img
          src={arrow9}
          alt="Kreskowana krzywa"
          className="absolute bottom-[140px] left-[340px] hidden xxl:block"
        />
      </div>
      <div
        className={`flex flex-col ss:flex-row text-center w-[100%] xxxl:w-[636px] justify-around pb-[80px] ss:pb-[116px] space-y-10 ss:space-y-0`}
      >
        <div>
          <h1 className={`${styles.n60}`}>500+</h1>
          <h4 className={`${styles.n25} text-white`}>Podopiecznych</h4>
        </div>
        <div>
          <h1 className={`${styles.n60}`}>1000+</h1>
          <h4 className={`${styles.n25} text-white`}>Zadowolonych rodziców</h4>
        </div>
        <div>
          <h1 className={`${styles.n60}`}>9</h1>
          <h4 className={`${styles.n25} text-white sm:w-[210px]`}>
            lat doświadczenia
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Header;
