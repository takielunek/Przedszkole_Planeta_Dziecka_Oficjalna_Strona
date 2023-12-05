import styles from "../../style";
import { about } from "../../index.js";
import arrow3 from "../../assets/arrows/Arrow_3.png";
import arrow2 from "../../assets/arrows/Arrow_2.png";
import blueHand from "../../assets/graphics/blueHand.png";
import yellowHand from "../../assets/graphics/yellowHand.png";
import cloud2 from "../../assets/graphics/cloud2.png";

const AboutUs = () => {
  return (
    <section className="bg-white px-[40px] sm:px-[72px] relative">
      <div className="text-center">
        <h1 className={`${styles.n50} mt-[170px] ss:mt-[71px] mb-[33px]`}>
          O NAS
        </h1>
        <h4 className={`${styles.n25} mb-[67px]`}>
          Naszym celem jest zapewnienie możliwości edukacji odpowiedniej do
          wieku, oszczędzanie kontrolowanej zabawy{" "}
          <br className="hidden md:block" /> i rozwoju społecznego oraz
          interakcji z innymi dziećmi.
        </h4>
      </div>
      <div className="flex flex-wrap justify-evenly  gap-y-11 mb-[108px]">
        {about.map((ab) => (
          <div key={ab.id} className="flex flex-row w-[384px] items-center">
            <img
              src={ab.image}
              
              alt="icon"
              className="w-[49px] h-[49px] mr-[21px]"
            />
            <h4 className={`${styles.s25} leading-7`}>{ab.description}</h4>
          </div>
        ))}
      </div>{" "}
      <img
        src={arrow3}
        alt="Kreskowana krzywa"
        className="absolute -bottom-[108px] right-0"
      />
      <img
        src={arrow2}
        alt="Kreskowana krzywa"
        className="absolute -top-[170px] ss:-top-[72px] left-0"
      />
      <img
        src={blueHand}
        alt="Niebieska dłoń"
        className="absolute -top-[150px] ss:-top-[50px] left-0"
      />
      <img
        src={yellowHand}
        alt="Żółta dłoń"
        className="absolute -top-[170px] ss:-top-[70px] left-[90px]"
      />
      <img
        src={cloud2}
        alt="Chmurka"
        className="absolute -top-[70px] right-[0px] hidden ss:block"
      />
    </section>
  );
};

export default AboutUs;
