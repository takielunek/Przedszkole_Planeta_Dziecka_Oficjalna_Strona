import { useForm } from "react-hook-form";
import styles from "../../style";

const ContactForm = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();



  console.log(watch("name"));

  return (
    <section className="px-[10px] xs:px-[30px] ss:px-[60px] ">
      <form
        action="https://formsubmit.co/kontakt@przedszkole-planeta-dziecka.pl"
        method="POST"
      >
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-[24px] space-y-[20px] sm:space-y-[0px] justify-center">
          <div className="flex flex-col">
            <input
              required
              type="text"
              name="name"
              placeholder="Imię"
              {...register("name", { required: true })}
              className={`${styles.s25} p-[20px] border-[3px] w-[100%]  sm:w-[306px] h-[61px] rounded-[8px] border-black placeholder-gray`}
            />
            {errors.name && <span className="text-pink">Podaj imię.</span>}
          </div>

          <div className="flex flex-col">
            <input
              required
              type="text"
              name="number"
              placeholder="Numer telefonu"
              {...register("phone", { required: true })}
              className={`${styles.s25} p-[20px] border-[3px] w-[100%] sm:w-[306px] h-[61px] rounded-[8px] border-black placeholder-gray`}
            />
            {errors.phone && (
              <span className="text-pink">Podaj numer telefonu.</span>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col w-[100%] sm:w-[636px]">
            <textarea
              required
              type="text"
              name="message"
              placeholder="Napisz wiadomość..."
              {...register("message", { required: true })}
              rows="3"
              className={`${styles.s25} p-[20px] border-[3px] rounded-[8px] border-black placeholder-gray mt-[20px] sm:mt-[46px]`}
            />
            {errors.message && (
              <span className="text-pink">Napisz wiadomość.</span>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`${styles.button2} ${styles.s20} text-white mt-[20px] sm:mt-[46px] mb-[67px]`}
          >
            Wyślij
          </button>
        </div>
        <input type="hidden" name="_template" value="table"></input>
      </form>
    </section>
  );
};

export default ContactForm;
