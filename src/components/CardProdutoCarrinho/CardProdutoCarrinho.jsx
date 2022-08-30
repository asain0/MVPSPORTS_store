import { useState } from "react";
import "./CardProdutoCarrinho.css";

function CardProdutoCarrinho({produto}) {
    const [quantidade,setQuantidade] = useState(1)

    const handleQuantidadeProduto = (operacao) => {
        return operacao === '+' ? setQuantidade(quantidade+1) : setQuantidade(quantidade-1) ;
    };

    const removerProdutoCarrinho = (idProduto)=>{
        let tempListaProdutos = JSON.parse(localStorage.getItem('mvpCart'))
        let produtoRemovido = tempListaProdutos.filter(item=>item.id!==idProduto)
        console.log(produtoRemovido)
        localStorage.setItem('mvpCart',JSON.stringify(produtoRemovido))
        // alert('Voce vai remover um produto!\n' + idProduto + "\n" + tempListaProdutos)
    }
   return ( 
      <div className="cardProdutoCarrinho">
            <div className="cardProdutoCarrinho__imagem">
                    <img className="imagem_item" src={produto.image} alt={produto.name} />   
            </div>
            <div className="cardProdutoCarrinho__dados">
                <div className="produto_cart">
                    <span >{produto.nome}</span>
                </div>
                <div className="produto_cart">
                    <span >Dados complementares do produto.</span>
                </div>
                <div className="produto_cart_valor">
                    <span>Valor unitário: R$ {produto.preco}</span>
                </div>
                <span> Quantidade: </span>
                <div className="cardProdutoCarrinho__dados__quantidade">
                        <button onClick={()=>(handleQuantidadeProduto('-'))}>-</button>
                        {quantidade}
                        <button onClick={()=>(handleQuantidadeProduto('+'))}>+</button>
                    </div>
                <div className="cardProdutoCarrinho__dados__subtotal">Sub-total:R$ {(quantidade*produto.preco).toFixed(2)}</div>
            <p className="remover_produto" onClick={()=>(removerProdutoCarrinho(produto.id))}>Remover item</p>
            </div>
        </div>
    );
}

export default CardProdutoCarrinho;