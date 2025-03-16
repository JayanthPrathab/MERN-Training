import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Plansnpricing from "./components/Plansnpricing";
import Template from "./components/Template";
import Template1raw from "./components/templates/Template1raw";
import Template1 from "./components/templates/template1";
import Template2raw from "./components/templates/Template2raw";
import Template2 from "./components/templates/template2";
import Template3raw from "./components/templates/Template3raw";
import Template3 from "./components/templates/template3";
import Template4raw from "./components/templates/Template4raw";
import Template4 from "./components/templates/template4";
import "./components/css/navbar.css";
import "./components/css/footer.css";
import "./components/css/plans.css";
import './App.css';
import './components/css/template.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/loGin" element={<Login />}></Route>
          <Route path="/plans" element={<Plansnpricing />}></Route>
          <Route path="/template" element={<Template/>}></Route>
          <Route path="/template1raw" element={<Template1raw/>}></Route>
          <Route path="/template1" element={<Template1/>}></Route>
          <Route path="/template2raw" element={<Template2raw/>}></Route>
          <Route path="/template2" element={<Template2/>}></Route>
          <Route path="/template3raw" element={<Template3raw/>}></Route>
          <Route path='/template3' element={<Template3/>}></Route>
          <Route path='/template4raw' element={<Template4raw/>}></Route>
          <Route path='/template4' element={<Template4/>}></Route>
        </Routes>

        
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
