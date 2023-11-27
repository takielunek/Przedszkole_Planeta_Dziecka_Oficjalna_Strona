import styles from "../../style";

const Prices = () => {
  return (
    <section className="bg-purple px-[40px] sm:px-[72px] py-[44px]">
      <div>
        <h3 className={`${styles.n40} text-white text-center`}>Cennik</h3>
        <h4 className={`${styles.n20} text-white text-center mb-[93px]`}>
          wysokość opłat na rok 2023/24
        </h4>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <div className="bg-orange rounded-[20px] text-center">
            <div className="px-[80px] py-[155px]">
              <h3 className={`${styles.n40} text-black`}>Przedszkole</h3>
              <h4 className={`${styles.n20} text-pink`}>od 2,5 do 6 lat</h4>
              <h4 className={`${styles.n20} text-black mt-6`}>
                CZESNE <br /> <span className="font-bold">500 zł</span> pierwsze
                dziecko <br /> drugie dziecko -30% tj.{" "}
                <span className="font-bold">350 zł</span>, <br /> trzecie
                dziecko <span className="font-bold">GRATIS</span>
              </h4>
              <h4 className={`${styles.n20} text-black mt-6`}>
                WYŻYWIENIE / STAWKA DZIENNA{" "}
                <span className="font-bold">12 zł</span> <br /> WPISOWE{" "}
                <span className="font-bold">200 zł</span>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-orange rounded-[20px] text-center">
            <div className="px-[80px] pt-[155px] pb-[215px]">
              <h3 className={`${styles.n40} text-black`}>Żłobek</h3>
              <h4 className={`${styles.n20} text-pink`}>od 2 do 2,5 lat</h4>
              <h4 className={`${styles.n20} text-black mt-6`}>
                CZESNE <br /> <span className="font-bold">820 zł</span> pierwsze i kolejne
                dziecko
              </h4>
              <h4 className={`${styles.n20} text-black mt-6`}>
                WYŻYWIENIE / STAWKA DZIENNA{" "}
                <span className="font-bold">12 zł</span> <br /> WPISOWE{" "}
                <span className="font-bold">200 zł</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
