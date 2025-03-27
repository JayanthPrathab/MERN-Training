import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Dock from "./components/Dockmenu";
import SoftwareProj from "./components/SoftwareProj";
import HardwareProj from "./components/HardwareProj";
import './App.css';
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import "./App.css";

function App() {
  const items = [
    {
      icon: <Link className="link" to="/"><VscHome size={18} /></Link>,
      label: "Home",
    },
    {
      icon: <Link className="link" to="/projects"><VscArchive size={18} /></Link>,
      label: "Projects",
    },
    {
      icon: <Link className="link" to="/education"><VscAccount size={18} /></Link>,
      label: "Profile",
    },
    {
      icon: <Link className="link" to="/skills"><VscSettingsGear size={18} /></Link>,
      label: "Skills",
    },
  ];
  return (
    <main>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/hardwareproj" element={<HardwareProj/>}></Route>
          <Route path='/softwareproj' element={<SoftwareProj/>}></Route>
        </Routes>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </BrowserRouter>
    </main>
  );
}
export default App;
