
import { Link } from "react-router-dom";
import styles from "../../style";

const FooterNavbar = () => {
  return (
    <section>
      <div className="hidden sm:block">
        <div className="flex flex-row pt-[20px]">
          <div className="space-x-[32px]">
            <Link to={"/"} className={`${styles.textHover2} ${styles.s16}`}>
              O nas
            </Link>
            <Link
              to={"/program"}
              className={`${styles.textHover2} ${styles.s16}`}
            >
              Program
            </Link>
            <Link
              to={"/organisation"}
              className={`${styles.textHover2} ${styles.s16}`}
            >
              Organizacja
            </Link>
            <Link
              to={"/enrollment"}
              className={`${styles.textHover2} ${styles.s16}`}
            >
              Zapisy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNavbar;
