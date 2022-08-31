import './Cart.css'
import { AiOutlineShoppingCart } from "react-icons/ai"
import CardProdutoCarrinho from '../CardProdutoCarrinho/CardProdutoCarrinho';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MvpButton from '../MvpButton/MvpButton';

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
function Cart(props){
    const [listaProdutos, setListaProdutos] = useState(produtosCarrinho);

    const handleLimparListaProduto = () =>{
        setListaProdutos([])
    }

    const handleListaProdutoRemoverItem = (produtoId) =>{
        setListaProdutos(listaProdutos.filter(
            produto => produto.id !== produtoId
        ))
    }
    return (
        <div className="menuCart">
            <input type="checkbox" className="check_cart" id="check_cart"/>
            <label for="check_cart" className="checkbtn_cart">
                <i className="menu_cart">  < AiOutlineShoppingCart /></i>
            </label>

            <div className="itens_cart">
                <div className="titulo_cart">MEU CARRINHO</div>

                {listaProdutos.map( (produto, indice) => <CardProdutoCarrinho eventoRemover={handleListaProdutoRemoverItem} key={indice} produto={produto} />)}
                
                <div className="itens_cart__total">
                    TOTAL: R$ 1500,00
                </div>
                <div><Link to="/Checkout">
                    <button className="button_finalizarCompra">
                            Fechar pedido
                    </button>
                        </Link>
                    <button className="button_finalizarCompra" onClick={handleLimparListaProduto}>Esvaziar Carrinho</button>
                    <MvpButton onClick={handleLimparListaProduto} tittle="teste"></MvpButton>
                </div>
            </div>
        </div>
    )
   }
   
export default Cart