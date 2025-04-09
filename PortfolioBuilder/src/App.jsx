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
import Template4 from "./components/templates/Template4";
import ProtectedRoute from "./components/Protectedroute";
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
          <Route path="/plans" element={<ProtectedRoute><Plansnpricing /></ProtectedRoute>}></Route>
          <Route path="/template" element={<ProtectedRoute><Template/></ProtectedRoute>}></Route>
          <Route path="/template1raw" element={<ProtectedRoute><Template1raw/></ProtectedRoute>}></Route>
          <Route path="/template1" element={<ProtectedRoute><Template1/></ProtectedRoute>}></Route>
          <Route path="/template2raw" element={<ProtectedRoute><Template2raw/></ProtectedRoute>}></Route>
          <Route path="/template2" element={<ProtectedRoute><Template2/></ProtectedRoute>}></Route>
          <Route path="/template3raw" element={<ProtectedRoute><Template3raw/></ProtectedRoute>}></Route>
          <Route path='/template3' element={<ProtectedRoute><Template3/></ProtectedRoute>}></Route>
          <Route path='/template4raw' element={<ProtectedRoute><Template4raw/></ProtectedRoute>}></Route>
          <Route path='/template4' element={<ProtectedRoute><Template4/></ProtectedRoute>}></Route>
          
        </Routes>

        <br /><br />
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
