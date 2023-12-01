import { useState } from "react";
import styles from "../../style";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="sm:hidden">
      <div className=" flex text-2xl xs:text-3xl ss:text-4xl pt-5 xs:pt-6 ss:pt-7 space-x-6 cursor-pointer text-white pr-[30px]">
        <a href="tel:501 806 012">
          {" "}
          <FaPhoneVolume />
        </a>
        <div onClick={() => setOpenMenu(true)}>
          <FaBars />
        </div>
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-purple shadow-2xl w-full absolute top-0 right-0 max-w-s h-screen z-20 "
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-2xl xs:text-3xl ss:text-4xl text-white absolute z-30 left-6 top-14 cursor-pointer"
        >
          <IoClose />
        </div>
        <ul className="h-full flex flex-col justify-center text-center space-y-8 ">
          <Link to={"/"} className={`${styles.textHover} ${styles.mobile}`}>
            O nas
          </Link>
          <Link
            to={"/program"}
            className={`${styles.textHover} ${styles.mobile}`}
          >
            Program
          </Link>
          <Link
            to={"/organisation"}
            className={`${styles.textHover} ${styles.mobile}`}
          >
            Organizacja
          </Link>
          <Link
            to={"/enrollment"}
            className={`${styles.textHover} ${styles.mobile}`}
          >
            Zapisy
          </Link>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNavbar;
