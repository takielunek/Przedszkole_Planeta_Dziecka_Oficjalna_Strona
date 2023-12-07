import CookieConsent from "react-cookie-consent";
import privacy from "../../assets/document/PolitykaPrywatnosci.pdf";

const Cookies = () => {
  return (
    <section>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{ background: "#fff", color: "#000", fontSize: "20px", padding: "10px" }}
        buttonStyle={{ background: "#dc7672", color: "#fff", borderRadius: "20px", padding: "10px 50px" }}
        buttonText="Akceptuję"
      >
        W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies.
        Ze szczegółowymi informacjami dotyczącymi cookies na tej stronie można
        się zapoznać tutaj:{" "}
        <a href={privacy} className="underline text-pink">
          polityka prywatności
        </a>
        .
      </CookieConsent>
    </section>
  );
};

export default Cookies;
