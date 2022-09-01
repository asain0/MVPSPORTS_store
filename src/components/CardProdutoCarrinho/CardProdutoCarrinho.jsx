import { useState } from "react";
import "./CardProdutoCarrinho.css";

function CardProdutoCarrinho({produto, eventoRemover}) {
    const [quantidade,setQuantidade] = useState(1)

    const handleQuantidadeProduto = (operacao) => {
        return operacao === '+' ? setQuantidade(quantidade+1) : setQuantidade(quantidade-1) ;
    };

    const removerProdutoCarrinho = (produtoRemovido)=>{
        console.log(produtoRemovido)
        eventoRemover(produtoRemovido)
    }
   return ( 
      <div className="cardProdutoCarrinho">
            <div className="cardProdutoCarrinho__imagem">
                    <img className="imagem_item" src={produto.imagem} alt={produto.name} />   
            </div>
            <div className="cardProdutoCarrinho__dados">
                <div className="produto_cart">
                    {produto.idCarrinho}
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
            <p className="remover_produto" onClick={()=>(removerProdutoCarrinho(produto))}>Remover item</p>
            </div>
        </div>
    );
}

export default CardProdutoCarrinho;