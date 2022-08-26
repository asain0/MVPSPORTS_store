import "./CardProdutoCarrinho.css";

function CardProdutoCarrinho({produto}) {
   return ( 
      <li className="item_cart">
                            <div className="produto_cart">
                                <li >
                                    <img className="imagem_item" src={produto.image} alt={produto.name} />   
                                </li>
                            </div>
                            <div className="produto_cart">
                                <li >{produto.nome}</li>
                            </div>
                            <div className="produto_cart_valor">
                                <li >{produto.preco}</li>
                            </div>
                            <p className="remover_produto">Remover item</p>
                        </li>
    );
}

export default CardProdutoCarrinho;