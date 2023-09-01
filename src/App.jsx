import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Image from './components/Image'
import About from './pages/About'
function App() {
  

  return (
  <Router>
    <div className="app">
      <Navbar/>
      <Image/>
      <Routes>
      <Route exact path='/' element={ <Home/>}/>
      <Route exact path ='/About' element= {<About/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  )
}

export default App
