import styles from "../../style";
import img13 from "../../assets/background/img_13.jpg";

const Adaptation = () => {
  return (
    <section className="bg-purple pt-[44px]">
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="p-[24px] pl-[20px] sm:pl-[72px] pt-[0px] md:pt-[100px]">
            <h3 className={`${styles.n40} text-white mb-[51px]`}>Adaptacja</h3>
            <h4 className={`${styles.n20} text-white mb-6`}>
              Moment przekroczenia przez dziecko progu przedszkola jest
              niewątpliwie ważnym i trudnym wydarzeniem w życiu całej rodziny,
              dlatego warto się do tego odpowiednio przygotować.
            </h4>
            <h4 className={`${styles.n20} text-white mb-6`}>
              Każdemu rodzicowi zależy na tym, by dziecko czuło się w
              przedszkolu dobrze, bezpiecznie i komfortowo. Oddając własną
              pociechę na większą część dnia pod opiekę wykwalifikowanych, ale
              jednak obcych nam i maluchowi osób, mamy często poczucie
              dyskomfortu i wyrzuty sumienia. W pewnym sensie rodzic może mieć
              poczucie, że oddala się od własnego dziecka, opuszcza je.
            </h4>
            <h4 className={`${styles.n20} text-white`}>
              Nic bardziej mylnego! Jeżeli postaramy się, żeby dziecko
              rozpoczęło edukację przedszkolną dobrze do niej psychicznie i
              emocjonalnie nastawione, okaże się, że wspomnienia z przedszkola
              będą dla niego pozytywnym bagażem uczuciowym na całe życie.
            </h4>
          </div>

          <img
            src={img13}
            alt="Dzieci w przedszkolu"
            className="px-[0px] ss:px-[30px] sm:px-[50px] md:px-[0px] mb-[50px] md:mb-[0px] mt-[0px] ss:mt-[30px]"
          />
        </div>

        <div className="pl-[0px] xxs:pl-[10px] xs:pl-[20px] sm:pl-[50px] md:pl-[0px] border-orange border-t-[8px] border-l-[8px] rounded-tl-[20px]">
          <div
            className=" p-[20px] md:p-[36px] pr-[20px] md:pr-[76px]"
            data-aos="fade-left"
          >
            <h3 className={`${styles.n40} text-white mb-[51px]`}>
              W naszej ofercie znajdą Państwo: <br />{" "}
              <span className="text-pink">Dni Otwarte Planety Maluszka</span>
            </h3>
            <h4 className={`${styles.n20} text-white mb-10`}>
              Czyli sobotnie OTWARTE i BEZPŁATNE zajęcia dla dzieci od 1 do 4
              lat, które odbywają się w jedną, wybraną sobotę w miesiącu w godz.
              10:00 – 12:00 w okresie maja i czerwca danego roku szkolnego.
            </h4>
            <h4 className={`${styles.n20} text-white mb-10`}>
              Podczas zajęć maluchy wspólnie z rodzicami pracują ciekawymi
              technikami plastycznymi. Biorą udział w zabawach, które czasem nie
              są możliwe do zorganizowania w domu: wspólne zabawy w kole, zabawy
              z chustą animacyjną, ziarnami lub wodą.
            </h4>
            <h4 className={`${styles.n20} text-white mb-10`}>
              PLANETA MALUSZKA to także źródło pomysłów na zabawy do
              wykorzystania w domu. Dzieci nauczą się nowych zabaw paluszkowych,
              ruchowych, muzycznych. Będą tworzyć prace plastyczne różnymi,
              ciekawymi technikami a stworzone „dzieła” zabiorą ze sobą do domu.
              Przyjazną atmosferę tworzą uśmiechnięte i otwarte Ciocie, które
              zawsze służą poradą w sprawach wychowawczych i edukacyjnych.
            </h4>
            <h4 className={`${styles.n20} text-white  mb-16`}>
              Wspólna zabawa pozwala na zawarcie pierwszych przyjaźni oraz
              łagodne wejście w nowe środowisko – ułatwia adaptację. Dzięki
              zajęciom w PLANECIE MALUSZKA dziecko łatwiej rozstanie się z mamą
              i tatą wtedy, gdy nadejdzie czas pójścia do przedszkola. WAŻNE:
              Rodzice/opiekunowie dzieci biorą czynny udział w sobotnich
              zajęciach. Zalecamy wygodny, swobodny strój.
            </h4>
            <h3 className={`${styles.n40} text-white mb-[51px]`}>
              Adaptacja zakończona <br /> sukcesem dla Rodziców
            </h3>
            <h4 className={`${styles.n20} text-white mb-10`}>
              W miesiącach maj i czerwiec zapraszamy Rodziców na warsztaty,
              które pomogą przygotować dziecko, ale także{" "}
              <br className="hidden md:block" /> i rodzica do rozpoczęcia
              edukacji przedszkolnej.Wszelkich informacji na ten temat udziela
              dyrektor bądź menadżer przedszkola.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adaptation;
