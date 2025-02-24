import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/home';
import Project from './components/Project';
import Skill from './components/Skill';
import './components/css/navbar.css';
import './App.css';
function App() {
  return (
    <main className="bgimg">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/skill' element={<Skill/>}></Route>
          <Route path="/resume"></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
