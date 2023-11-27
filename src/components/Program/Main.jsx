import styles from "../../style";
import arrow1 from "../../assets/arrows/Arrow_1.png";
import arrow6 from "../../assets/arrows/Arrow_6.png";
import img4 from "../../assets/kids/img_4.png";
import img2 from "../../assets/kids/img_2.png";
import img3 from "../../assets/kids/img_3.png";
import img5 from "../../assets/kids/img_5.png";

const Main = () => {
  return (
    <section className="relative">
      <div className="bg-cream h-[148px]">
        <img
          src={arrow6}
          alt="Kreskowana krzywa"
          className="absolute top-[0px] left-[230px]"
        />
      </div>
      <div>
        <div className="bg-purple">
          <div className="ml-[72px] pt-[85px] pb-[157px] space-y-[51px]">
            <h4 className={`${styles.r25} text-white`}>Grupa żłobkowa</h4>
            <h4 className={`${styles.r05} text-white w-[600px]`}>
              Opieka nad niemowlęciem jest dla nas niezwykle ważna.
              Bezpieczeństwo <br className="hidden md:block" />i przytulanie są
              w naszym przedszkolu sprawą priorytetową. Każde dziecko jest
              wyjątkowe i ma inne potrzeby. Jesteśmy tutaj, aby zapewnić
              zaspokojenie tych potrzeb w czystym i opiekuńczym otoczeniu.
            </h4>
          </div>
        </div>
        <div className="bg-yellow h-[562px] w-[526px] rounded-[15px] absolute top-[80px] right-[72px]">
          <img src={img4} alt="Chłopczyk" className="absolute bottom-0" />
        </div>
      </div>
      <div className="bg-cream h-[222px]">
        <img
          src={arrow1}
          alt="Kreskowana krzywa"
          className="absolute top-[640px] right-[300px]"
        />
      </div>
      <div>
        <div className="bg-purple">
          <div className="mr-[72px] py-[85px] space-y-[51px] pl-[790px]">
            <h4 className={`${styles.r25} text-white`}>Grupa maluszków</h4>
            <h4 className={`${styles.r05} text-white w-[580px]`}>
              Grupa maluszków w przedszkolu to wyjątkowe miejsce, gdzie dzieci w
              wieku od 2 do 3 lat mają okazję do odkrywania świata w bezpiecznym
              i przyjaznym otoczeniu. W ramach tej grupy skoncentrowane są
              działania mające na celu rozwijanie podstawowych umiejętności oraz
              wsparcie w procesie socjalizacji. Nauczyciele tej grupy angażują
              się w tworzenie atmosfery opartej na trosce, cieple i zrozumieniu,
              aby maluszki czuły się komfortowo i bezpiecznie podczas swojego
              pierwszego doświadczenia edukacyjnego.
            </h4>
          </div>
        </div>
        <div className="bg-pink h-[562px] w-[526px] rounded-[15px] absolute top-[730px] left-[72px]">
          <img
            src={img2}
            alt="Dziewczynka"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>

      <div className="bg-cream h-[222px]">
        {" "}
        <img
          src={arrow6}
          alt="Kreskowana krzywa"
          className="absolute top-[1295px] left-[230px]"
        />
      </div>
      <div>
        <div className="bg-purple">
          <div className="ml-[72px] pt-[85px] pb-[61px] space-y-[51px]">
            <h4 className={`${styles.r25} text-white`}>Grupa przedszkolaków</h4>
            <h4 className={`${styles.r05} text-white w-[600px]`}>
              Grupa przedszkolaków w przedszkolu to miejsce, gdzie dzieci w
              wieku od 3 do 5 lat rozwijają się i uczą poprzez różnorodne i
              dostosowane do ich wieku zajęcia. Nauczyciele w tej grupie
              skupiają się na kształtowaniu umiejętności społecznych, językowych
              oraz przygotowywaniu maluchów do przyszłej edukacji szkolnej.{" "}
              <br className="hidden md:block" /> W atmosferze współpracy i
              zabawy dzieci uczą się samodzielności, dzielenia się{" "}
              <br className="hidden md:block" /> z innymi oraz rozumienia
              podstawowych zasad grupowego funkcjonowania. Zajęcia są
              zróżnicowane i obejmują różne dziedziny, takie jak matematyka,
              język, plastyka czy ruch.
            </h4>
          </div>
        </div>
        <div className="bg-yellow h-[562px] w-[526px] rounded-[15px] absolute top-[1380px] right-[72px]">
          <img
            src={img3}
            alt="Chłopczyk"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>

      <div className="bg-cream h-[222px]">
        {" "}
        <img
          src={arrow1}
          alt="Kreskowana krzywa"
          className="absolute top-[1945px] right-[300px]"
        />
      </div>
      <div>
        <div className="bg-purple">
          <div className="mr-[72px] pt-[85px] pb-[61px] space-y-[51px] pl-[780px]">
            <h4 className={`${styles.r25} text-white`}>Grupa starszaków</h4>
            <h4 className={`${styles.r05} text-white w-[590px]`}>
              Grupa starszaków w przedszkolu to miejsce przygotowane specjalnie
              dla dzieci <br className="hidden md:block" /> w wieku 5-6 lat,
              które zbliżają się do etapu przesiadki do szkoły podstawowej. W
              tej grupie nauczyciele kładą szczególny nacisk na rozwijanie
              umiejętności niezbędnych do samodzielnego funkcjonowania w nowym
              środowisku edukacyjnym. Program obejmuje również aktywności mające
              na celu wzmocnienie umiejętności interpersonalnych, budowanie
              zdrowej tożsamości oraz rozwijanie inicjatywy{" "}
              <br className="hidden md:block" /> i samodzielności. Przygotowując
              się do szkoły, dzieci w tej grupie uczą się również organizacji
              czasu, radzenia sobie z zadaniami i współpracy w grupie.
            </h4>
          </div>
        </div>
        <div className="bg-pink h-[562px] w-[526px] rounded-[15px] absolute top-[2030px] left-[72px]">
          <img src={img5} alt="Dziewczynka" className="absolute bottom-0" />
        </div>
      </div>

      <div className="bg-cream h-[222px]"></div>
    </section>
  );
};

export default Main;
