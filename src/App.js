import Contact from "./componets/Contact";
import Experience from "./componets/Experience";
import Portfolio from "./componets/Portfolio";
import About from "./componets/About";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import SocialLinks from "./componets/SocialLinks";

function App() {
  return (
    <div>
    <NavBar />
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>



    <SocialLinks/>
    </div>
  );
}

export default App;
