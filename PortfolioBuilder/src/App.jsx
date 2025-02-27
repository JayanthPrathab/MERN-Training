import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import './components/css/navbar.css';
import './components/css/footer.css';
function App() {

  return (
    <main>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
