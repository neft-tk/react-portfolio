import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./style.css";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Github from "./assets/images/GitHub_Logo.png";
import Linkedin from "./assets/images/LI-In-Bug.png"
import Twitter from "./assets/images/clipart1963355.png"


function App() {
  return (
    <div className="App">
      <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>

<hr/>
      <div class="footer">
                <a href="https://github.com/neft-tk" target="blank"><img  src={Github} alt="github"/></a>
                <a href="www.linkedin.com/in/john-erik-buss" target="blank"><img  src={Linkedin} alt="linkedin"/></a>
                <a href="https://twitter.com/Neft_tk" target="blank"><img  src={Twitter} alt="twitter"/></a>
      </div>

      </Router>

    </div>
  );
}

export default App;