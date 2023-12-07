import styles from "../../style";

const Prices = () => {
  return (
    <section className="bg-purple px-[20px] xs:px-[40px] ss:px-[72px] lg:px-[100px] py-[44px]">
      <div>
        <h3 className={`${styles.n40} text-white text-center`}>Cennik</h3>
        <h4
          className={`${styles.n20} text-white text-center mb-[30px] md:mb-[93px]`}
        >
          wysokość opłat na rok 2023/24
        </h4>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div
          className="bg-orange rounded-[20px] text-center mb-[30px] md:mb-[0px]"
          data-aos="fade-right"
        >
          <div className="px-[40px] lg:px-[60px] xl:px-[80px] py-[50px] md:py-[155px]">
            <h3 className={`${styles.n40} text-black`}>Przedszkole</h3>
            <h4 className={`${styles.n20} text-pink`}>od 2,5 do 6 lat</h4>
            <h4 className={`${styles.n20} text-black mt-6`}>
              CZESNE <br /> <span className="font-bold">500 zł</span> pierwsze
              dziecko <br /> drugie dziecko -30% tj.{" "}
              <span className="font-bold">350 zł</span>, <br /> trzecie dziecko{" "}
              <span className="font-bold">GRATIS</span>
            </h4>
            <h4 className={`${styles.n20} text-black mt-6`}>
              WYŻYWIENIE / STAWKA DZIENNA{" "}
              <span className="font-bold">12 zł</span> <br /> WPISOWE{" "}
              <span className="font-bold">200 zł</span>
            </h4>
          </div>
        </div>

        <div
          className="bg-orange rounded-[20px] text-center"
          data-aos="fade-left"
        >
          <div className="px-[40px] lg:px-[60px] xl:px-[80px] pt-[50px] md:pt-[155px] pb-[50px] md:pb-[215px]">
            <h3 className={`${styles.n40} text-black`}>Żłobek</h3>
            <h4 className={`${styles.n20} text-pink`}>od 2 do 2,5 lat</h4>
            <h4 className={`${styles.n20} text-black mt-6`}>
              CZESNE <br /> <span className="font-bold">820 zł</span> pierwsze i
              kolejne dziecko
            </h4>
            <h4 className={`${styles.n20} text-black mt-6`}>
              WYŻYWIENIE / STAWKA DZIENNA{" "}
              <span className="font-bold">12 zł</span> <br /> WPISOWE{" "}
              <span className="font-bold">200 zł</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
