import styles from "../../style";
import arrow5 from "../../assets/arrows/Arrow_5.png";

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
      <div className="flex justify-center space-x-[24px]">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Imię"
          className={`${styles.s25} p-[20px] w-[306px] border-[3px] rounded-[8px] border-black placeholder-gray`}
        />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Numer telefonu"
          className={`${styles.s25} p-[20px] w-[306px] border-[3px] rounded-[8px] border-black placeholder-gray`}
        />
      </div>
      <div className="flex justify-center">
        <textarea
          name="message"
          id="message"
          rows="6"
          placeholder="Napisz wiadomość"
          className={`${styles.s25} p-[20px] w-[636px] border-[3px] rounded-[8px] border-black placeholder-gray my-[46px]`}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          className={`${styles.button2} ${styles.s20} text-white mb-[67px]`}
        >
          Wyślij
        </button>
      </div>
      <img src={arrow5} alt="Kreskowana krzywa" className="absolute right-[180px] bottom-[80px]" />
    </section>
  );
};

export default Contact;
