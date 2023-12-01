import styles from "../../style";

const FirstMain = () => {
  return (
    <section className="bg-cream px-[20px] xs:px-[40px] ss:px-[72px]">
      <div className="pt-[129px]">
        <div className="border-t-[7px] border-l-[7px] border-purple mb-[79px]">
          <div className="mt-[44px] ml-[30px] xs:ml-[50px] ss:ml-[72px] pb-[61px]">
            <h3 className={`${styles.s40} mb-[77px]`}>Godziny otwarcia</h3>
            <div className={`${styles.n20} space-y-4`}>
              <li>
                Nasze przedszkole otwarte jest od{" "}
                <span className="font-bold">
                  poniedziałku do piątku w godzinach 6:30 - 17:00
                </span>{" "}
                z wyjątkiem na święta i dni ustawowo wolne od pracy.
              </li>
              <li>
                W <span className="font-bold">Wigilię i Sylwestra</span>{" "}
                przedszkole pełni dyżur w godzinach 7:00 - 13:00 lub jest
                zamknięte (uzgadniane co roku).
              </li>
              <li>
                W sytuacjach szczególnych zapewniamy dziecku opiekę po godzinie
                17:00, po wcześniejszym poinformowaniu wychowawcy lub dyrektora
                przez rodzica/opiekuna prawnego. Opłata za taką opiekę wynosi{" "}
                <span className="font-bold">40 zł/h</span>.
              </li>
              <li>
                W dniach{" "}
                <span className="font-bold">pomiędzy świętami a weekendem</span>{" "}
                z uwagi na nieliczną obecność dzieci Przedszkole pełni dyżur w
                godzinach 7:00 – 15:00 lub jest zamknięte (uzgadniane
                corocznie).
              </li>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-t-[7px] border-l-[7px] border-pink">
          <div className="mt-[44px] ml-[30px] xs:ml-[50px] ss:ml-[72px] pb-[77px]">
            <h3 className={`${styles.s40} mb-[77px]`}>Posiłki</h3>
            <div className={`${styles.n20}`}>
              <h4>
                Codziennie każde z dzieci dostanie 3 zbalansowane i odżywcze
                posiłki:
              </h4>
              <div className="font-bold mb-10">
                <li>śniadanie</li>
                <li>obiad</li>
                <li>podwieczorek</li>{" "}
              </div>
              <h4>
                Restauracja „ARAMIS” przygotowuje obiady dla naszego przedszkola
                zgodnie z jadłospisem opracowanym przez dietetyka i normami
                sanitarnymi. Dbamy o zdrowe nawyki żywieniowe dzieci,
                zapewniając nieograniczony dostęp do wody źródlanej oraz
                stosując rygorystyczne zasady higieny, w tym System HACCP, w
                procesie przygotowywania posiłków.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstMain;
