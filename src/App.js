import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


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

      <h1>Footer</h1>

      </Router>

    </div>
  );
}

export default App;