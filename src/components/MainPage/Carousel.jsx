import { Carousel } from "@material-tailwind/react";
import styles from "../../style";
import { images } from "../../index.js";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

import { useState } from "react";

const CarouselDefault = () => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <section className="pt-[64px] pb-[150px] relative">
      <div className="absolute flex inset-0 items-center justify-between z-10">
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
      </div>
      <Carousel>
        <div className="overflow-hidden">
          <div
            className={`${styles.carouselImgs} transition-transform ease-out duration-500
        `}
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {images.slice(0, 6).map((img) => (
              <img
                src={img.image}
                alt="Dzieci w przedszkolu"
                className={`${styles.carouselImg}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
      <div className="absolute bottom-[50px] right-0 left-0">
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
      </div>
    </section>
  );
};

export default CarouselDefault;
