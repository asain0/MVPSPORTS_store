import {  Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Catalogo from './components/pages/Catalogo';
import Carrinho from './components/pages/Carrinho';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
        <div>
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Login" element={<Login/>}/> 
            <Route path= "/Cadastro" element={<Cadastro/>}/> 
            <Route path= "/Catalogo" element={<Catalogo/>}/>
            <Route path= "/Carrinho" element={<Carrinho/>}/> 
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
