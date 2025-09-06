import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Projects from './Pages/Projects'
function App() {

  return (
    <>
     
    <Navbar/>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element= {<About/>} />
    <Route path='/projects' element = {<Projects/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
