import React, {useState, useContext} from "react";

export const CarrinhoContext = useContext();

const produtosCarrinho = [
   {
   id:1,
   nome:"Calção de Treino PROGNE SPORTS para Muay Thai",
   preco:79.99,
   image:"http://localhost:3000/static/media/bermuda-img.20edab4ef54d767e9866.jpg",
   quantidade: 0
},
   {
   id:3,
   nome:"Calção de Treino PROGNE SPORTS para Muay Thai",
   preco:79.99,
   image:"http://localhost:3000/static/media/bermuda-img.20edab4ef54d767e9866.jpg",
   quantidade: 0
},
{
   id:4,
   nome:"CAMISA 1 SELEÇÃO DO BRASIL HOME 2020/2021",
   preco:299.99,
   image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/537/086/products/1671-3a98bd904b1ffe02cd16120221210090-640-0.jpg",
   quantidade: 0
},
{
   id:2,
   nome:"CAMISA 1 SELEÇÃO DO BRASIL HOME 2020/2021",
   preco:299.99,
   image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/537/086/products/1671-3a98bd904b1ffe02cd16120221210090-640-0.jpg",
   quantidade: 0
}
];

const CarrinhoProvider = ({children}) =>{
   const [carrinho,setCarrinho] = useState(produtosCarrinho);

   const saveCarrinho = produto =>{
      const newProduto = {
         id:carrinho.length +1,
         nome:produto.nome,
         preco:produto.preco,
         image:produto.image,
         quantidade: 1
      };
      setCarrinho(...carrinho, newProduto);
   }

   return(
      <CarrinhoContext.Provider>
         {children}
      </CarrinhoContext.Provider>
   )
}


export default CarrinhoProvider;