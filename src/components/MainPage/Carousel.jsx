import { Carousel } from "@material-tailwind/react";
import styles from "../../style.js";
import { images } from "../../index.js";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Grid, Pagination } from "swiper/modules";
import { useWindowSize } from "../../../hooks.js";

const CarouselDefault = () => {
  const { width } = useWindowSize();
  const isDestkop = width >= 720;
  console.log(isDestkop);
  // const size = useWindowSize();
  // console.log("size", size);

  // const [curr, setCurr] = useState(0);

  // const prev = () =>
  //   setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  // const next = () =>
  //   setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  console.log(chunkArray(images, 6), "test");

  return (
    <section className="pt-[64px] pb-[150px] relative">
      {/* <div className="absolute flex inset-0 items-center justify-between z-10">
        <button
          onClick={prev}
          className="text-pink ml-6 cursor-pointer hover:scale-125 duration-300"
        >
          <FaChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="text-purple mr-6 cursor-pointer hover:scale-125 duration-300"
        >
          <FaChevronRight size={40} />
        </button>
      </div> */}
      {/* <Carousel>
        <div className="overflow-hidden">
          <div
            className={`${styles.carouselImgs} transition-transform ease-out duration-500
        `}
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {images.map((img) => (
              <img
                src={img.image}
                alt="Dzieci w przedszkolu"
                className={`${styles.carouselImg} `}
              />
            ))}

          </div>
        </div>
      </Carousel> */}
      {/* <div className="absolute bottom-[50px] right-0 left-0">
        <div className="flex items-center justify-center gap-10">
          {images.map((_, i) => (
            <div
              className={`
              transition-all w-5 h-5 bg-purple rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div> */}

      {!isDestkop ? (
        <Swiper
          key="test"
          className="my-swiper"
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
                className={`${styles.carouselImg} `}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          modules={[Grid, Pagination]}
          className="my-swiper-destkop"
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
      )}
    </section>
  );
};

export default CarouselDefault;
