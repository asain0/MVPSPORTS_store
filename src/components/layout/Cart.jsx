// import styles from './Cart.module.css'
import './Cart.css'
import { AiOutlineShoppingCart } from "react-icons/ai"
import CardProdutoCarrinho from '../CardProdutoCarrinho/CardProdutoCarrinho';
import { useState } from 'react';
const listaProdutos = [
    {
    id:1,
    nome:"Calção de Treino PROGNE SPORTS para Muay Thai",
    preco:79.99,
    image:"http://localhost:3000/static/media/bermuda-img.20edab4ef54d767e9866.jpg"
},
    {
    id:3,
    nome:"Calção de Treino PROGNE SPORTS para Muay Thai",
    preco:79.99,
    image:"http://localhost:3000/static/media/bermuda-img.20edab4ef54d767e9866.jpg"
},
{
    id:4,
    nome:"CAMISA 1 SELEÇÃO DO BRASIL HOME 2020/2021",
    preco:299.99,
    image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/537/086/products/1671-3a98bd904b1ffe02cd16120221210090-640-0.jpg"
},
{
    id:2,
    nome:"CAMISA 1 SELEÇÃO DO BRASIL HOME 2020/2021",
    preco:299.99,
    image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/537/086/products/1671-3a98bd904b1ffe02cd16120221210090-640-0.jpg"
}
];
function Cart(props){
    const[produtosCarrinho, setProdutosCarrinho]=
         useState(JSON.parse(localStorage.getItem('mvpCart')))

    localStorage.setItem('mvpCart',JSON.stringify(listaProdutos))

    return (
        <div className="menuCart">
            <input type="checkbox" className="check_cart" id="check_cart"/>
            <label for="check_cart" className="checkbtn_cart">
                <i className="menu_cart">  < AiOutlineShoppingCart /></i>
            </label>

            <div className="itens_cart">
                <div className="titulo_cart">MEU CARRINHO</div>

                {produtosCarrinho.map( (produto, indice) => <CardProdutoCarrinho key={indice} produto={produto}/>)}
                
                <div className="itens_cart__total">
                    TOTAL: R$ 1500,00
                </div>
                <div>
                    <button className="button_finalizarCompra">Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
   }
   
export default Cart