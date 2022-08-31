import "./produto.css"
import imgProduto from "../../data/img/bermuda-img.jpg"
import AsainBtn from "../AsainBtn/AsainBtn";
import AsainChck from "../AsainChck/AsainChck";
import MVPProdutoGaleria from "../MVPProdutoGaleria/MVPProdutoGaleria";
import CarouselSection from "../CarouselSection/CarouselSection";
import { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";

let coresProduto = [{
   id: 1,
   value: "mista",
   conteudo: 1
},
 { id: 2,
   value: "preta",
   conteudo: 2
}
];

let tamanhosProduto = [
   {
   id: 1,
   value: "P",
   conteudo: "P"
},
   {
   id: 2,
   value: "M",
   conteudo: "M"
},
   {
   id: 3,
   value: "G",
   conteudo: "G"
},
]

function Produto() {
   const {listaCarrinho,saveCarrinho} = useContext(CarrinhoContext)
  
  
   return ( 
         <div className="card_produto">
            
            <main class="item__produto">

               <div class="identificao">
                  <h2 class="identificacao__titulo">Camiseta Manga Longa com Capuz Oxer - Masculina </h2>
                  <span class="identificacao__referencia">REF.: 968644</span>
               </div>
               
               <section class="produto">

                  <MVPProdutoGaleria item={imgProduto}/>

                  <div class="produto__dados">
                        <div class="produto__preco">
                           <div class="produto__preco__original">R$ 129,99</div>
                           <div class="produto__preco__atual">R$ 79,99</div>
                        </div>

                        <div class="produto__cores">
                           <span>COR: </span> <span class="produto_cores_selecionada">Preta</span>
                           <AsainChck opcoes={coresProduto} name="cor"/>
                        </div>

                        <div class="produto__tamanho">
                           <span>Tamanho:</span> <span class="produto__tamanho__selecionado">P</span>
                           <AsainChck opcoes={tamanhosProduto} name="tamanhos"/>
                        </div>
                        <AsainBtn onClick={listaCarrinho}>Comprar</AsainBtn>
                        <AsainBtn onClick={()=>(saveCarrinho({
                           nome:"Calção de Treino PROGNE SPORTS para Muay Thai",
                           preco:79.99,
                           image:"http://localhost:3000/static/media/bermuda-img.20edab4ef54d767e9866.jpg",
                        }))}>Adicionar ao carrinho</AsainBtn>
                  </div>
               </section>
            </main>

         <div className="outrosProdutos">
         <CarouselSection
        dataUrl={'http://localhost:3000/static/shoes.json'}
        title={'Novidades'}
      />
                     </div>

         </div>
      
    );
}

export default Produto;