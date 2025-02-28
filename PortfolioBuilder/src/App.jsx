import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Plansnpricing from "./components/Plansnpricing";
import "./components/css/navbar.css";
import "./components/css/footer.css";
import BlurText from "./components/Animations/BlurText";
import "./components/css/plans.css";
import './App.css';
function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/loGin" element={<Login />}></Route>
          <Route path="/plans" element={<Plansnpricing />}></Route>
        </Routes>

        <BlurText
          text="Wanna create cool Portfolios?!"
          delay={150}
          animateBy="words"
          direction="top"
          className="infblur"
        />
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
