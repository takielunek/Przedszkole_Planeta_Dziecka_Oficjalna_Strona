import styles from "../../style";
import ContactForm from "./ContactForm";
import arrow5 from "../../assets/arrows/Arrow_5.png";
import cloud from "../../assets/graphics/cloud.png";
import balloon from "../../assets/graphics/balloon.png";

const ContactSection = () => {
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
      <ContactForm />
      <img
        src={arrow5}
        alt="Kreskowana krzywa"
        className="absolute right-[30px] lg:right-[100px] xl:right-[180px] bottom-[80px] hidden md:block"
      />
      <img
        src={cloud}
        alt="Chmurka"
        className="absolute top-[20px] lg:top-[250px] left-[20px] lg:left-[80px] hidden md:block"
      />
      <img
        src={balloon}
        alt="Balon"
        className="absolute top-[80px] right-[80px] hidden xxxl:block"
      />
    </section>
  );
};

export default ContactSection;
