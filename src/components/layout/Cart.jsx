import './Cart.css'
import { AiOutlineShoppingCart } from "react-icons/ai"
import CardProdutoCarrinho from '../CardProdutoCarrinho/CardProdutoCarrinho';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MvpButton from '../MvpButton/MvpButton';
import {CarrinhoContext} from '../../context/CarrinhoContext'

function Cart(props){
    const {carrinho,removeCarrinho} = useContext(CarrinhoContext);
    const [listaProdutos, setListaProdutos] = useState(carrinho);

    const handleLimparListaProduto = () =>{
        setListaProdutos([])
    }

    const handleListaProdutoRemoverItem = (produto) =>{
        removeCarrinho(produto)
        
    }
    return (
        <div className="menuCart">
            <input type="checkbox" className="check_cart" id="check_cart"/>
            <label for="check_cart" className="checkbtn_cart">
                <i className="menu_cart">  < AiOutlineShoppingCart /></i>
            </label>

            <div className="itens_cart">
                <div className="titulo_cart">MEU CARRINHO</div>

                {carrinho.map( (produtosCarrinho) => 
                        <CardProdutoCarrinho key={produtosCarrinho.idCarrinho}
                            eventoRemover={handleListaProdutoRemoverItem} 
                            produto={produtosCarrinho} 
                        />
                    )
                }
                
                <div className="itens_cart__total">
                    TOTAL: R$ 1500,00 - Falta ajustar
                </div>
                <div><Link to="/Checkout">
                    <button className="button_finalizarCompra">
                            Fechar pedido
                    </button>
                        </Link>
                    <button className="button_finalizarCompra" onClick={handleLimparListaProduto}>Esvaziar Carrinho</button>
                </div>
            </div>
        </div>
    )
   }
   
export default Cart