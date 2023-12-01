import styles from "../../style";

const SecondMain = () => {
  return (
    <section className="bg-cream px-[20px] xs:px-[40px] ss:px-[72px]">
      <div className="border-t-[7px] border-l-[7px] border-purple mb-[79px]">
        <div className="mt-[44px] ml-[30px] xs:ml-[50px] ss:ml-[72px] pb-[53px]">
          <h3 className={`${styles.s40} mb-[77px]`}>Zajęcia dodatkowe</h3>
          <div className={`${styles.n20} ${styles.flexRow}`}>
            <div className=" w-[100%] md:w-[50%]">
              <h4 className={`${styles.n25} mb-10`}>
                Zajęcia zawarte w czesnym:
              </h4>
              <div>
                <li>zajęcia sportowe z elementami korektywy</li>
                <li>rytmika</li>
                <li>muzykoterapia</li>
                <li>dogoterapia</li>
                <li>zoomba dla dzeci</li>
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] mt-10 md:mt-0">
              <h4 className={`${styles.n25} mb-10`}>
                Zajęcia dodatkowo płatne:
              </h4>
              <div>
                <li>nauka gry na pianinie</li>
                <li>terapia logopedyczna</li>
                <li>terapia ręki / TUS</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[137px]">
        <div className="border-t-[7px] border-l-[7px] border-pink">
          <div className="mt-[44px] ml-[30px] xs:ml-[50px] ss:ml-[72px] pb-[38px]">
            <h3 className={`${styles.s40} mb-[51px]`}>Warunki lokalowe</h3>
            
              <div className={`${styles.n20} ${styles.flexRow} mb-[60px] md:mb-[114px]`}>
                <div className="w-[100%] md:w-[50%]">
                  <h4 className="mb-4">Placówka przedszkola posiada:</h4>
                  <div>
                    <li>
                      wideo – monitoring rejestrujący zdarzenia w salach
                      dydaktycznych oraz na zewnątrz budynku{" "}
                    </li>
                    <li>
                      monitory i tablice interaktywne w każdej sali
                      przedszkolnej
                    </li>
                    <li>gabinet logopedyczny w przedszkolu</li>
                    <li>sala do nauki gry na instrumentach muzycznych</li>
                    <li>sala do zajęć integracji sensorycznej</li>
                    <li>
                      podjazd dla dzieci poruszających się na wózku inwalidzkim
                    </li>
                  </div>
                </div>
                <div className="w-[100%] md:w-[50%] mt-10 md:mt-0">
                  <h4>
                    Przedszkole Planeta Dziecka zlokalizowane jest w
                    przestronnym, dobrze oświetlonym budynku, spełniającym
                    wszystkie standardy bezpieczeństwa i higieny przedszkolnej.
                    Dbamy o bezpieczeństwo dzieci, stosując certyfikowane
                    materiały do wykończenia sal, dostosowane do konkretnych
                    przedziałów wiekowych. Wyposażone w pełni sale, przyjazna
                    kolorystyka wnętrz oraz duże ilości światła tworzą atmosferę
                    ciepła i przestrzeni. Dodatkowo, posiadamy funkcjonalny plac
                    zabaw z urządzeniami spełniającymi ważne funkcje w rozwoju
                    poznawczym i motorycznym dzieci.
                  </h4>
                </div>
              </div>
           
            <div>
              <h4 className={`${styles.n20} font-semibold text-center mb-10`}>
                “Dokładamy wszelkich starań, by świat dziecka w Planecie Dziecka
                był bezpieczny, estetyczny, kolorowy i przyjazny. Nasze maluszki
                to doceniają czerpiąc radość z codziennej zabawy i edukacji”
              </h4>
              <h5 className={`${styles.n15} text-center`}>
                Małgorzata Adamczyk, Założyciel i Menedżer Przedszkola Planeta
                Dziecka
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondMain;
