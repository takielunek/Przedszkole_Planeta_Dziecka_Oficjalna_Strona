import styles from "../../style";
import arrow7 from "../../assets/arrows/Arrow_7.png";
import arrow8 from "../../assets/arrows/Arrow_8.png";

const Enroll = () => {
  return (
    <section className="bg-purple px-[40px] sm:px-[72px] relative">
      <div className="flex flex-row ">
        <div className="w-[54%]">
          <h3 className={`${styles.n40} text-white pt-[44px] mb-[70px]`}>
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
            className="absolute top-[130px] right-[280px]"
          />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-[52%]">
          <img
            src={arrow8}
            alt="arrow icon"
            className=" absolute top-[500px] left-[130px]"
          />
        </div>
        <div className="w-[42%] pb-[113px] ">
          <h3 className={`${styles.n40} text-white mt-[59px] mb-[30px]`}>
            Zapisz dziecko
          </h3>
          <h4 className={`${styles.n20} text-white`}>
            <span className="text-pink underline decoration-1">
              {" "}
              Tutaj mogą Państwo pobrać formularz
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
