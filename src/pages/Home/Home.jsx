import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Experience from "./Experience";
import Projects from "./Projects";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Experience></Experience>
           <Projects></Projects>
        </div>
    );
};

export default Home;