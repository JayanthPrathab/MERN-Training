import Home from "./components/functional components/home";
import About from "./components/functional components/About";
import Gallery from "./components/functional components/Gallery.jsx";
import Contact from "./components/functional components/Contact.jsx";
import ClassComp from "./components/class components/classComp.jsx";
import SignUp from "./components/functional components/SignUp.jsx";
import Navbar from "./components/functional components/navbar.jsx";
import './components/css/navbar.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App(){
  return(
    
    <main>
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Gallery" element={<Gallery/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/SignUp"  element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;