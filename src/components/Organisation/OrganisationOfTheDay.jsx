import styles from "../../style";
import { day } from "../../index.js";
import cloud from "../../assets/graphics/cloud.png";
import cloud2 from "../../assets/graphics/cloud2.png";

const OrganisationOfTheDay = () => {
  return (
    <section className="bg-cream pt-[180px] md:pt-[126px] pb-[50px] sm:pb-[86px] flex justify-center relative">
      <div className="border-orange border-[7px] rounded-[20px] w-[90%] xxs:w-[90%] xs:w-[85%] ss:w-[75%] sm:w-[70%] md:w-[67%]">
        <div className="m-[20px] sm:m-[40px] md:m-[56px]">
          <h3 className={`${styles.s40} mb-[60px] text-center`}>
            Organizacja dnia
          </h3>
          <div className="space-y-5">
            {day.map((day) => (
              <div key={day.id} className={`${styles.n20} flex flex-col xl:flex-row `}>
                <h4 className="font-bold w-[100%] xl:w-[16%]">{day.time}</h4>
                <h4 className="w-[100%] xl:w-[84%]">{day.action}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={cloud2}
        alt="Chmurka"
        className="absolute top-[0px] right-[0px] "
      />
      <img
        src={cloud}
        alt="Chmurka"
        className="absolute top-[0px] left-[0px] hidden md:block"
      />
    </section>
  );
};

export default OrganisationOfTheDay;
