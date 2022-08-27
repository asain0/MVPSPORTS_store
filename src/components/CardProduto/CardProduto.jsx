import './CardProduto.css'

function CardProduto({dadosProduto}) {
   return ( 
      <div className="cardProduto" key={dadosProduto.id}>
         <div className="image">
            <img src={dadosProduto.image} alt={dadosProduto.name} object-fit={'fill'} />
         </div>
         <div className="info">
            {dadosProduto.name && dadosProduto.oldPrice && dadosProduto.price && (
              <div>
                <span className="name">{dadosProduto.name}</span>
                <span className="oldPrice">R$ {dadosProduto.oldPrice}</span>
                <span className="price">R$ {dadosProduto.price}</span>
              </div>
            )}
         </div>
      </div>
    );
}

export default CardProduto;