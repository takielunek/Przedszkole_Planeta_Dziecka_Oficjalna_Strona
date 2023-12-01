import styles from "../../style";
import CarouselDefault from "./Carousel";
import cloud from "../../assets/graphics/cloud.png";
import cloud2 from "../../assets/graphics/cloud2.png";

const Gallery = () => {
  return (
    <section className="bg-white relative">
      <div className="text-center">
        <h1 className={`${styles.n50} pt-[140px] ss:pt-[69px]`}>GALERIA</h1>
        <h4 className={`${styles.n25} mt-[46px]`}>
          Zależy nam na zapewnieniu wysokiej jakości wczesnej edukacji i opieki
          naszym dzieciom i ich rodzinom.
        </h4>
        <CarouselDefault />
      </div>
      <img
        src={cloud2}
        alt="Chmurka"
        className="absolute top-[0px] right-[0px] "
      />
      <img
        src={cloud}
        alt="Chmurka"
        className="absolute top-[0px] left-[0px] hidden sm:block"
      />
    </section>
  );
};

export default Gallery;
