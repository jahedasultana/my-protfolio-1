import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Experience></Experience>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;