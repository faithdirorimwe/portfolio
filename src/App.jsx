import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Image from './components/Image'
function App() {
  

  return (
  <Router>
    <div className="app">
      <Navbar/>
      <Image/>
      <Routes>
      <Route exact path='/' element={ <Home/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  )
}

export default App
