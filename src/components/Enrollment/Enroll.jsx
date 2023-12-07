import styles from "../../style";
import arrow7 from "../../assets/arrows/Arrow_7.png";
import arrow8 from "../../assets/arrows/Arrow_8.png";
import pdf from "../../assets/document/zgloszenie.pdf";

const Enroll = () => {
  return (
    <section className="bg-purple px-[20px] xs:px-[40px] ss:px-[72px] relative">
      <div className="flex flex-row ">
        <div className="w-[100%] md:w-[54%]" data-aos="fade-right">
          <h3
            className={`${styles.n40} text-white pt-[44px] mb-[30px] md:mb-[70px]`}
          >
            Zapisy do naszego przedszkola
          </h3>
          <h4 className={`${styles.n20} text-white`}>
            W naszym Przedszkolu zapisy dzieci trwają cały rok kalendarzowy.
            Jeśli tylko w wybranej grupie wiekowej mamy wolne miejsce, dziecko
            może dołączyć do niej w dogodnej dla Państwa chwili. Osoby
            zainteresowane naszym przedszkolem / żłobkiem prosimy o pobranie i
            złożenie załączonego formularza elektronicznie bądź bezpośrednio w
            naszej placówce. Dyrektor przedszkola skontaktuje się z Państwem w
            następnym dniu roboczym.
          </h4>
          <h4 className={`${styles.n20} text-white font-semibold mt-12`}>
            Sekretariat Przedszkola w Suchedniowie:{" "}
            <br className="hidden md:block" /> poniedziałek – piątek w godz.
            8:00 – 15:00
          </h4>
        </div>

        <div>
          <img
            src={arrow7}
            alt="arrow icon"
            className="absolute top-[130px] right-[280px] hidden md:block"
          />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-[0%] md:w-[52%]">
          <img
            src={arrow8}
            alt="arrow icon"
            className=" absolute top-[500px] left-[130px] hidden xl:block"
          />
        </div>

        <div
          className="w-[100%] md:w-[42%] pb-[30px] md:pb-[113px] "
          data-aos="fade-left"
        >
          <h3 className={`${styles.n40} text-white mt-[59px] mb-[30px]`}>
            Zapisz dziecko
          </h3>

          <h4 className={`${styles.n20} text-white`}>
            <span className="text-pink underline decoration-1 cursor-pointer">
              {" "}
              <a href={pdf}>Tutaj mogą Państwo pobrać formularz</a>
            </span>{" "}
            zgłoszenia dziecka do przedszkola, który należy wypełnić i
            dostarczyć <br className="hidden md:block" /> w oryginale do
            sekretariatu lub wysłac drogą elektroniczną na adres:
          </h4>
          <h4 className={`${styles.n20} text-white font-semibold mt-12`}>
            sekretariat@planeta-dziecka.pl
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
