import styles from "../../style.js";
import { images } from "../../index.js";








const CarouselSwiper = () => {
  return (
    <section className="pt-[30px] sm:pt-[64px] pb-[30px] sm:pb-[40px] px-[20px] sm:px-[72px]">
      <div className="slide-container w-[100%] mr-auot ml-auto">  


        <div className="slider-content grid-container">


          {images.map((img) => (
            <div className="swiper-slide w-[420px] h-[420px] flex justify-center items-center" key={img.id}>
              <img
                src={img.image}
                alt="Dzieci w przedszkolu"
                className={`${styles.carouselImg} `}
              />
            </div>
          ))}



        </div>


        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default CarouselSwiper;
