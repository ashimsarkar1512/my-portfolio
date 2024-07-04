import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Exprience from "../Exprience/Experience";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";


const Home = () => {
            return (
                        <div>
                              <Banner></Banner>  
                              <About></About> 
                              <Skill></Skill>
                              <Contact></Contact> 
                              <Projects></Projects>  
                              <Exprience></Exprience>
                        </div>
            );
};

export default Home;