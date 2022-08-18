import {  Routes, Route } from 'react-router-dom'
import Home from '../../components/pages/Home'
import Login from '../../components/pages/Login';

import Cadastro from '../../components/pages/Cadastro';
import Catalogo from '../../components/pages/Catalogo';
import Carrinho from '../../components/pages/Carrinho';

function Workplace() {
   return ( 
      <div className="workplace">
         <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Login" element={<Login/>}/> 
            <Route path= "/Cadastro" element={<Cadastro/>}/> 
            <Route path= "/Catalogo" element={<Catalogo/>}/>
            <Route path= "/Carrinho" element={<Carrinho/>}/> 
          </Routes>
      </div>
    );
}

export default Workplace;