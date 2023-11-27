import Footer from "../components/ForAllPages/Footer"
import FirstMain from "../components/Organisation/FirstMain"
import Header from "../components/Organisation/Header"
import OrganisationOfTheDay from "../components/Organisation/OrganisationOfTheDay"
import SecondMain from "../components/Organisation/SecondMain"

const Organisation = () => {
  return (
    <section>
        <Header />
        <FirstMain />
        <OrganisationOfTheDay />
        <SecondMain />
        <Footer />
    </section>
  )
}

export default Organisation