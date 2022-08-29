import { useState } from "react";
import "./CardProdutoCarrinho.css";

function CardProdutoCarrinho({produto}) {
    console.log('iniciando cardProdutoCarrinho')
    console.log(produto)
    const [quantidade,setQuantidade] = useState(1)

    const handleQuantidadeProduto = (operacao) => {
        return operacao === '+' ? setQuantidade(quantidade+1) : setQuantidade(quantidade-1) ;
    };

    const removerProdutoCarrinho = (idProduto)=>{
        let tempListaProdutos = JSON.parse(localStorage.getItem('mvpCart'))
        let produtoRemovido = tempListaProdutos.filter(item=>item.id!=idProduto)
        console.log(produtoRemovido)
        localStorage.setItem('mvpCart',JSON.stringify(produtoRemovido))
        // alert('Voce vai remover um produto!\n' + idProduto + "\n" + tempListaProdutos)
    }
   return ( 
      <div className="cardProdutoCarrinho">
            <div className="cardProdutoCarrinho__imagem">
                {/* <li > */}
                    <img className="imagem_item" src={produto.image} alt={produto.name} />   
                {/* </li> */}
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
    
    //  backup do arquivo original
    //   <li className="item_cart">
    //         <div className="produto_cart">
    //             <li >
    //                 <img className="imagem_item" src={produto.image} alt={produto.name} />   
    //             </li>
    //         </div>
    //         <div className="produto_cart">
    //             <li >{produto.nome}</li>
    //         </div>
    //         <div className="produto_cart_valor">
    //             <li >{produto.preco}</li>
    //         </div>
    //         <p className="remover_produto">Remover item</p>
    //     </li>
    );
}

export default CardProdutoCarrinho;