import React, {useState, createContext} from "react";
import {produtosCarrinho} from './carrinho.js'
export const CarrinhoContext = createContext();

export function CarrinhoProvider({children}) {
   const [carrinho,setCarrinho] = useState(produtosCarrinho);

   const saveCarrinho = produto =>{
      const newProduto = {
         id:carrinho.length +1,
         nome:produto.nome,
         preco:produto.preco,
         image:produto.image,
         quantidade: 1,
      };
      console.log(carrinho)
      console.log("ADD produto no carrinho")
      console.log(newProduto)
      setCarrinho(
         [...carrinho,newProduto]
      );
   }

   const listaCarrinho = ()=>{console.log(carrinho)}
   return(
      <CarrinhoContext.Provider value={{ carrinho, saveCarrinho, listaCarrinho }}>
         {children}
      </CarrinhoContext.Provider>
   )
}


export default CarrinhoProvider;