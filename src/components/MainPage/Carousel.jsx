import styles from "../../style.js";
import { images } from "../../index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";
import { useWindowSize } from "../../hooks.js";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const CarouselDefault = () => {
  const { width } = useWindowSize();
  const isDestkop = width >= 480;

  return (
    <section className="pt-[30px] sm:pt-[64px] pb-[30px] sm:pb-[40px] px-[20px] sm:px-[72px] relative">
      <div className="absolute flex inset-0 items-center justify-between">
        <div className="swiper-button-prev text-pink ml-6 mb-20 cursor-pointer hover:scale-125 duration-300">
          <FaChevronLeft size={40} />
        </div>
        <div className="swiper-button-next text-purple mr-6 mb-20 cursor-pointer hover:scale-125 duration-300">
          <FaChevronRight size={40} />
        </div>
      </div>

      {isDestkop ? (
        <Swiper
          slidesPerView={3}
          slidesPerColumn={3}
          slidesPerGroup={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          modules={[Grid, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="my-swiper-destkop  pb-[70px] md:pb-[100px] "
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.image}
                alt="Dzieci w przedszkolu"
                className={`${styles.carouselImg} `}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          className="my-swiper pb-[50px]"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.image}
                alt="Dzieci w przedszkolu"
                className={`${styles.carouselImg}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default CarouselDefault;
