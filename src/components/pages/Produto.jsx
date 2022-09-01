import "./produto.css"
import AsainBtn from "../AsainBtn/AsainBtn";
import AsainChck from "../AsainChck/AsainChck";
import MVPProdutoGaleria from "../MVPProdutoGaleria/MVPProdutoGaleria";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import {MVPBD} from '../../data/MVPBD'
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
   const { id } = useParams();
   const produtoAtual = MVPBD.produtos.find(prod => prod.id ===parseInt(id))

   return ( 
         <div className="card_produto">
            <h1>{produtoAtual.nome}</h1>
            <main class="item__produto">

               <div class="identificao">
                  {/* <h2 class="identificacao__titulo">{produtoAtual.nome} </h2> */}
                  <span class="identificacao__referencia">REF.: {produtoAtual.ref}</span>
               </div>
               
               <section class="produto">

                  <MVPProdutoGaleria imagem={produtoAtual.imagem}/>

                  <div class="produto__dados">
                        <div class="produto__preco">
                           <div class="produto__preco__original">{produtoAtual.precoOriginal}</div>
                           <div class="produto__preco__atual">{produtoAtual.preco}</div>
                        </div>

                        <div class="produto__cores">
                           <span>COR: </span> <span class="produto_cores_selecionada">Preta</span>
                           <AsainChck opcoes={coresProduto} name="cor"/>
                        </div>

                        <div class="produto__tamanho">
                           <span>Tamanho:</span> <span class="produto__tamanho__selecionado">P</span>
                           <AsainChck opcoes={tamanhosProduto} name="tamanhos"/>
                        </div>
                        <AsainBtn onClick={()=>(saveCarrinho( produtoAtual                           
                        ))}>Comprar</AsainBtn>
                        <AsainBtn onClick={()=>(saveCarrinho( produtoAtual                           
                        ))}>Adicionar ao carrinho</AsainBtn>
                  </div>
               </section>
            </main>

         <div className="outrosProdutos">
         {/* <CarouselSection
        dataUrl={'http://localhost:3000/static/shoes.json'}
        title={'Novidades'}
      /> */}
                     </div>

         </div>
      
    );
}

export default Produto;