import './MVPProdutoGaleria.css'
import imgProduto from "../../data/img/bermuda-img.jpg"

function MVPProdutoGaleria() {
   return ( 
      <div class="produto__imagem">
         <aside class="produto__galeria">
            {/* Acrescentar para renderizar a lista de imagens que será recebida por props, limitando até x imagens ou com efeito carrossel */}
            
            {/* <a href="#"><img src={imgProduto} alt=""/></a>
            <a href="#"><img src={imgProduto} alt=""/></a>
            <a href="#"><img src={imgProduto} alt=""/></a>
            <a href="#"><img src={imgProduto} alt=""/></a> */}
         </aside>
         <div class="produto__vizualizacao">
            <img src={imgProduto} alt=""/>
         </div>
      </div>
    );
}

export default MVPProdutoGaleria;