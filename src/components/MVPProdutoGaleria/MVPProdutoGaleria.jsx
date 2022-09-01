import './MVPProdutoGaleria.css'

function MVPProdutoGaleria({imagem}) {
   return ( 
      <div class="produto__imagem">
         <aside class="produto__galeria">
            {/* Acrescentar para renderizar a lista de imagens que será recebida por props, limitando até x imagens ou com efeito carrossel */}
            
            <a href="#"><img src={imagem} alt=""/></a>
            {/* <a href="#"><img src={imagem} alt=""/></a>
            <a href="#"><img src={imagem} alt=""/></a>
            <a href="#"><img src={imagem} alt=""/></a> */}
         </aside>
         <div class="produto__vizualizacao">
            <img src={imagem} alt=""/>
         </div>
      </div>
    );
}

export default MVPProdutoGaleria;