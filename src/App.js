import {BrowserRouter,Routes,Route} from "react-router-dom"
import './scss/Main.scss';
import Navbar from "./helper/Components/Navbar/Navbar";
import Footer from "./helper/Components/Footer/Footer";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Projects from "./Pages/Projects/Projects"
import Contact from "./Pages/Contact/Contact"
function App() {
  return (
    <>
 <BrowserRouter>
 <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/projects" element={<Projects/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>

 <Footer/>
 </BrowserRouter>
    </>
  );
}

export default App;
