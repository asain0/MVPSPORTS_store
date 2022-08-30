import { useEffect, useState } from "react";

function TestBD() {
   const [listaCarrinho, setListaCarrinho] = useState([]);

   const URL = 'http://localhost:3000/static/carrinho.json';

   useEffect (() => {
   
    const fetchData = async() => {
      try{
         
      const res = await fetch(URL); //Recebendo dados do endereço
      const data = await res.json(); //transformando em json
      console.log(data);
      setListaCarrinho(data)
      }catch(error){
         console.log(error)
      }
      
    }
    fetchData();
  },[URL]);

   console.log("Imprimindo lista carrinho")
   console.log(listaCarrinho)
   
   return ( 
      <>
         <h1>oi</h1>
         {listaCarrinho.map(produto => (
            <>
            <h2>{produto.id}</h2>
            <h1>{produto.nome}</h1>
            </>
         ))}
      </>
    );
}

export default TestBD;