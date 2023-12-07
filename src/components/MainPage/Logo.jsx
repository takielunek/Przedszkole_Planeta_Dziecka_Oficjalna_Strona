import img6 from "../../assets/kids/img_6.png";
import logo from "../../assets/logo/logo.png";
import logo1 from "../../assets/logo/logo1.png";
import arrow4 from "../../assets/arrows/Arrow_4.png";

const Logo = () => {
  return (
    <section className="bg-orange pl-[10px] xs:pl-[40px] sm:pl-[72px] relative h-[200px] xs:h-[250px] ss:h-[400px] sm:h-[450px] md:h-[510px]">
      <div className="flex flex-row pt-4" data-aos="fade-right">
        <img
          src={logo}
          alt="Logo firmy"
          className="h-[60px] xs:h-[70px] ss:h-[156px]"
        />
        <img
          src={logo1}
          alt="Logo firmy"
          className="h-[60px] xs:h-[70px] ss:h-[100px] my-0 ss:my-6 ml-3"
        />
      </div>
      <img
        src={img6}
        alt="Dzieci czytające książki"
        className="absolute bottom-0 right-0"
      />
      <img
        src={arrow4}
        alt="Kreskowana krzywa"
        className="absolute bottom-0 left-0 hidden md:block"
      />
    </section>
  );
};

export default Logo;
