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
   
  const adicionarItem = () =>{
   console.log("adicionar item")
   setListaCarrinho(...listaCarrinho, {
      "id": 5,
      "nome": "teste",
      "preco": 79.99,
      "image": "http://localhost:3000/static/media/bermuda-img.20edab4ef54d767e9866.jpg"
      },)
      console.log("item adicionado")
      console.log(listaCarrinho)
  }

   return ( 
      <>
         <h1>oi</h1>
         {listaCarrinho.map(produto => (
            <>
            <h2>{produto.id}</h2>
            <h1>{produto.nome}</h1>
            
            <button onClick={adicionarItem}>adicionar</button>
            </>
         ))}
      </>
    );
}

export default TestBD;