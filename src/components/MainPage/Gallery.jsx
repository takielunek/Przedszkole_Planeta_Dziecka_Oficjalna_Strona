import styles from "../../style";
import CarouselDefault from "./Carousel";


const Gallery = () => {
  return (
    <section className="bg-white">
      <div className="text-center">
        <h1 className={`${styles.n50} pt-[69px]`}>GALERIA</h1>
        <h4 className={`${styles.n25} mt-[46px]`}>
          Zależy nam na zapewnieniu wysokiej jakości wczesnej edukacji i opieki
          naszym dzieciom i ich rodzinom.
        </h4>
        <CarouselDefault />
      </div>
    </section>
  );
};

export default Gallery;
