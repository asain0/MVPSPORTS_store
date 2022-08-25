import styles from './Cart.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Produto from '../pages/Produto'

function Cart(props){
    return (
        <div className={styles.menuCart}>
                <input type="checkbox" className={styles.check_cart} id="check_cart"/>
                <label for="check_cart" className={styles.checkbtn_cart}>
                    <i className={styles.menu_cart}>  < AiOutlineShoppingCart /></i>
                </label>
                <ul className={styles.itens_cart}>
                    <li className={styles.titulo_cart}>MEU CARRINHO</li>
                    <li className={styles.item_cart}>
                        <div className={styles.produto_cart}>
                            <li >
                                <img className={styles.imagem_item} src="http://localhost:3000/static/media/bermuda-img.20edab4ef54d767e9866.jpg" alt={props.name} />   
                            </li>
                        </div>
                        <div className={styles.produto_cart}>
                            <li >Calção de Treino PROGNE SPORTS para Muay Thai</li>
                        </div>
                        <div className={styles.produto_cart_valor}>
                            <li >R$ 79,99</li>
                        </div>
                        <p className={styles.remover_produto}>Remover item</p>
                    </li>
                    <li className={styles.item_cart}>
                        <div className={styles.produto_cart}>
                            <li >
                                <img className={styles.imagem_item} src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/537/086/products/1671-3a98bd904b1ffe02cd16120221210090-640-0.jpg" alt={props.name} />   
                            </li>
                        </div>
                        <div className={styles.produto_cart}>
                            <li >CAMISA 1 SELEÇÃO DO BRASIL HOME 2020/2021</li>
                        </div>
                        <div className={styles.produto_cart_valor}>
                            <li >R$ 299,99</li>
                        </div>
                        <p className={styles.remover_produto}>Remover item</p>
                    </li>
                    <div><button className={styles.button_finalizarCompra}>Finalizar Compra</button></div>
                </ul>
        </div>
    )
   }
   
export default Cart