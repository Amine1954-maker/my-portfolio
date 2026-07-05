import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./component/Navbar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import {ExperienceSection} from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./sections/Footer.jsx";
const App = () => {
    return (
<>
    <Navbar/>

<Hero/>
<ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
<ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contacts/>
    <Footer/>
</>
    )
}
export default App
