import React, {useState, createContext} from "react";
import {produtosCarrinho} from './carrinho.js'
import { MVPBD } from '../data/MVPBD'
export const CarrinhoContext = createContext();


export function CarrinhoProvider({children}) {
   const [carrinho,setCarrinho] = useState(MVPBD.carrinho);
   // const [carrinho,setCarrinho] = useState(produtosCarrinho);

   const saveCarrinho = produto =>{
      console.log(`dados do produto recebido ${produto}`)
      const newProduto = {
         idCarrinho:carrinho.length + 1,
         idProduto: produto.id,
         nome:produto.nome,
         preco:produto.preco,
         imagem:produto.imagem,
         quantidade: 1,
      };
      console.log(carrinho)
      console.log("ADD produto no carrinho")
      console.log(newProduto)
      setCarrinho(
         [...carrinho,newProduto]
      );
   }

   const removeCarrinho = (produtoRem) =>{
      console.log(`Produto a ser removido`)
      console.log(produtoRem)
      const newCarrinho = carrinho.filter(item => item.idProduto !== produtoRem.idProduto);
      
      setCarrinho(newCarrinho);
   }

   const listaCarrinho = ()=>{console.log(carrinho)}
   return(
      <CarrinhoContext.Provider value={{ carrinho, saveCarrinho, listaCarrinho, removeCarrinho }}>
         {children}
      </CarrinhoContext.Provider>
   )
}


export default CarrinhoProvider;