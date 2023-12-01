import styles from "../../style";
import arrow5 from "../../assets/arrows/Arrow_5.png";
import cloud from "../../assets/graphics/cloud.png";
import balloon from "../../assets/graphics/balloon.png";

const Contact = () => {
  return (
    <section className="bg-purple relative">
      <div className="text-center">
        <h1 className={`${styles.n50} pt-[77px] pb-[35px] text-white`}>
          SZYBKI KONTAKT
        </h1>
        <h4 className={`${styles.s25} pb-[83px] text-white`}>
          Wypełnij poniższy formularz a my skontaktujemy się z Tobą tak szybko
          jak to możliwe
        </h4>
      </div>

      <form
        action="https://formsubmit.co/suchedniow@planeta-dziecka.pl"
        method="POST"
        className="px-[10px] xs:px-[30px] ss:px-[60px] "
      >
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-[24px] justify-center">
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Imię"
            className={`${styles.s25} p-[20px] border-[3px] w-[100%]  sm:w-[306px] h-[61px] rounded-[8px] border-black placeholder-gray`}
          />
          <input
            required
            type="text"
            name="phone"
            id="phone"
            placeholder="Numer telefonu"
            className={`${styles.s25} p-[20px] border-[3px] w-[100%] sm:w-[306px] h-[61px] rounded-[8px] border-black placeholder-gray`}
          />
        </div>
        <div className="flex justify-center">
          <textarea
            required
            name="message"
            id="message"
            rows="3"
            placeholder="Napisz wiadomość"
            className={`${styles.s25} p-[20px] border-[3px] w-[100%] sm:w-[636px] rounded-[8px] border-black placeholder-gray my-[46px]`}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={`${styles.button2} ${styles.s20} text-white mb-[67px]`}
          >
            Wyślij
          </button>
        </div>
      </form>

      <img
        src={arrow5}
        alt="Kreskowana krzywa"
        className="absolute right-[30px] lg:right-[100px] xl:right-[180px] bottom-[80px] hidden md:block"
      />
      <img
        src={cloud}
        alt="Chmurka"
        className="absolute top-[250px] left-[80px] hidden sm:block"
      />
      <img
        src={balloon}
        alt="Chmurka"
        className="absolute top-[80px] right-[80px] hidden sm:block"
      />
    </section>
  );
};

export default Contact;
