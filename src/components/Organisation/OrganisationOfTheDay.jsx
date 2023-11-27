import styles from "../../style";
import { day } from "../../index.js";

const OrganisationOfTheDay = () => {
  return (
    <section className="bg-cream pt-[126px] pb-[86px] px-[232px]">
      <div className="border-orange border-[7px] rounded-[20px]">
        <div className="m-[56px]">
          <h3 className={`${styles.s40} mb-[60px] text-center`}>
            Organizacja dnia
          </h3>
          <div className="space-y-5">
            {day.map((day) => (
              <div className={`${styles.n20} flex flex-row`}>
                <h4 className="font-bold w-[16%]">{day.time}</h4>
                <h4 className="w-[84%]">{day.action}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationOfTheDay;
