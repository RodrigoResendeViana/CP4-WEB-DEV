import {} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import Home from "./Home.jsx"
import Produtos from './Produtos.jsx'
import Sobre from './Sobre.jsx'
import Footer from "./Footer"

function App() {


  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Produtos" element={<Produtos />} />
            <Route path="/Sobre" element={<Sobre />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
