import styles from "../../style";

const Location = () => {
  return (
    <section className="bg-cream">
      <div className="text-center">
        <h1 className={`${styles.n50} pt-[44px]`}>LOKALIZACJA</h1>
        <h4 className={`${styles.n25} my-[46px]`}>
          Jesteśmy firmą rodzinną i zapewniamy każdemu dziecku atmosferę
          „domowego domu”.
        </h4>
        <h4 className={`${styles.n20} mb-[71px]`}>
          Planeta Dziecka zlokalizowana w Suchedniowie, została stworzona <br />{" "}
          z myślą o zapewnieniu dzieciom wychowywania, zabawy, nauki <br /> i
          bezpiecznego środowiska.
        </h4>
      </div>
      <div>
        <iframe
          className="w-[100%] h-[550px]"
          src="https://www.google.com/maps/embed/v1/place?q=Sportowa+1A,+26-130+Suchedniów,+Poland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>

      {/* <div>
        <div className="flex flex-row justify-center">
          <h4
            className={`${styles.s25} border-[3px] border-blue rounded-[40px] py-[10px] w-[34%] text-center absolute left-[242px] bottom-[264px]`}
          >
            Poniedziałek - Piątek
          </h4>
          <h4
            className={`${styles.s25} border-[3px] border-yellow rounded-[40px] py-[10px] w-[34%] text-center absolute right-[242px] bottom-[264px]`}
          >
            6:30 - 17:00
          </h4>
        </div>
        <div className="flex flex-row justify-center">
          <h4
            className={`${styles.s25} border-[3px] border-blue rounded-[40px] py-[10px] w-[34%] text-center absolute left-[242px] bottom-[172px]`}
          >
            Sobota - Niedziela
          </h4>
          <h4
            className={`${styles.s25} border-[3px] border-yellow rounded-[40px] py-[10px] w-[34%] text-center absolute right-[242px] bottom-[172px]`}
          >
            Zamknięte
          </h4>
        </div>
      </div> */}

      <div className="space-y-[20px] ss:space-y-[30px]">
        <div className="flex flex-col ss:flex-row justify-center mt-[55px] px-[15%] ss:px-[0%] ">
          <div className="border-[3px] border-blue rounded-[40px] py-[10px] w-[100%] ss:w-[34%] mb-[20px] ss:mb-[0px]">
            <h4 className={`${styles.s25} text-center`}>
              Poniedziałek - Piątek
            </h4>
          </div>
          <div className="border-[3px] border-yellow rounded-[40px] py-[10px] w-[100%] ss:w-[34%]">
            <h4 className={`${styles.s25}  text-center `}>6:30 - 17:00</h4>
          </div>
        </div>
        <div className="flex flex-col ss:flex-row justify-center px-[15%] ss:px-[0%]">
          <div className="border-[3px] border-blue rounded-[40px] py-[10px] w-[100%] ss:w-[34%] mb-[20px] ss:mb-[0px]">
            <h4 className={`${styles.s25}  text-center `}>
              Sobota - Niedziela
            </h4>
          </div>
          <div className="border-[3px] border-yellow rounded-[40px] py-[10px] w-[100%] ss:w-[34%]">
            <h4 className={`${styles.s25} text-center `}>Zamknięte</h4>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <form action="/enrollment">
          <button
            className={`${styles.button2} ${styles.s20} text-white mt-[66px] mb-[51px]`}
          >
            Zapisz dziecko
          </button>
        </form>
      </div>
    </section>
  );
};

export default Location;
