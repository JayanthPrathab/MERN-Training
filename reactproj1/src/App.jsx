import Home from "./components/functional components/Home.jsx";
import About from "./components/functional components/About";
import Gallery from "./components/functional components/Gallery.jsx";
import Contact from "./components/functional components/Contact.jsx";
import ClassComp from "./components/class components/classComp.jsx";
import SignUp from "./components/functional components/SignUp.jsx";
import Navbar from "./components/functional components/navbar.jsx";
import UseEffect from "./components/functional components/UseEffect.jsx";
import './components/css/navbar.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoGin from "./components/functional components/loGin.jsx";
import UseState from "./components/functional components/UseState.jsx";
import UseEffectAPI from "./components/functional components/UseEffectAPI.jsx";
import UseRef from "./components/functional components/UseRef.jsx";
import UseMemo from "./components/functional components/UseMemo.jsx";
import UseCallback from "./components/functional components/UseCallback.jsx";
import UsecustomHook from "./components/functional components/useCustomHook.jsx";
import HoC from "./components/functional components/HoC/HoC.jsx";
import './App.css';
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
          <Route path="/UseEffect" element={<UseEffect/>}></Route>
          <Route path="/loGin" element={<LoGin />}></Route>
          <Route path="/UseState" element={<UseState/>}></Route>
          <Route path="/UseEffectAPI" element={<UseEffectAPI/>}></Route>
          <Route path="/UseRef" element={<UseRef/>}></Route>
          <Route path="/UseMemo" element={<UseMemo/>}></Route>
          <Route path="/UseCallback" element={<UseCallback/>}></Route>
          <Route path="/UseCustomHook" element={<UsecustomHook/>}></Route>
          <Route path="/hoc" element={<HoC />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;