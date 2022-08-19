import "./produto.css"
import imgProduto from "../../data/img/bermuda-img.jpg"
import AsainBtn from "../AsainBtn/AsainBtn";
import AsainChck from "../AsainChck/AsainChck";

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
//  Classe: alguma classe adicional para estilização do componente
//  name: nome do grupo do componente
//  value: valor do componente selecionado
//  id,  for: link entre label e input componente selecionado
//  conteudo: conteúdo a ser apresentado no componente
function Produto() {
   return ( 
      <div className="card_produto">
         
         <main class="item__produto">

            <div class="identificao">
               <h2 class="identificacao__titulo">Camiseta Manga Longa com Capuz Oxer - Masculina </h2>
               <span class="identificacao__referencia">REF.: 968644</span>
            </div>
            
            <section class="produto">

               <div class="produto__imagem">
                     <aside class="produto__galeria">
                        <a href="#"><img src={imgProduto} alt=""/></a>
                        <a href="#"><img src={imgProduto} alt=""/></a>
                        <a href="#"><img src={imgProduto} alt=""/></a>
                        <a href="#"><img src={imgProduto} alt=""/></a>
                     </aside>
                     <div class="produto__vizualizacao">
                        <img src={imgProduto} alt=""/>
                     </div>
               </div>

               <div class="produto__dados">
                     <div class="produto__preco">
                        <div class="produto__preco__original">R$ 129,99</div>
                        <div class="produto__preco__atual">R$ 79,99</div>
                     </div>

                     <div class="produto__cores">
                        <span>COR: </span> <span class="produto_cores_selecionada">Preta</span>
                        {/* <div class="produto__cores__opcoes">
                           <div class="produto__cores__opcoes__item input-radio-hckdv">
                                 <input type="radio" name="cor" value="branca" id="corBranca"/>
                                 <label for="corBranca" id="corBranca"> </label>
                           </div>
                           <div class="produto__cores__opcoes__item input-radio-hckdv">
                                 <input type="radio" name="cor" value="verde" id="corMesclada" checked/>
                                 <label for="corMesclada" id="corPreta"> </label>
                           </div>
                        </div> */}

                        <AsainChck opcoes={coresProduto} name="cor"/>
                        

                     </div>

                     <div class="produto__tamanho">
                        <span>Tamanho:</span> <span class="produto__tamanho__selecionado">P</span>
                        <AsainChck opcoes={tamanhosProduto} name="tamanhos"/>
                        {/* <div class="produto__tamanho__opcoes">
                           <div class="produto__tamanho__opcoes__item input-radio-hckdv">
                                 <input type="radio" name="tamanho" value="P" id="tamanhoP" checked/>
                                 <label for="tamanhoP">P</label>
                           </div>
                           <div class="produto__tamanho__opcoes__item input-radio-hckdv">
                                 <input type="radio" name="tamanho" value="M" id="tamanhoM"/>
                                 <label for="tamanhoM">M</label>
                           </div>
                           <div class="produto__tamanho__opcoes__item input-radio-hckdv">
                                 <input type="radio" name="tamanho" value="G" id="tamanhoG"/>
                                 <label for="tamanhoG">G</label>
                           </div>
                           <div class="produto__tamanho__opcoes__item input-radio-hckdv">
                                 <input type="radio" name="tamanho" value="GG" id="tamanhoGG"/>
                                 <label for="tamanhoGG">GG</label>
                           </div>

                        </div> */}
                     </div>
                     <AsainBtn titulo="Comprar"/>
                     <AsainBtn titulo="Adicionar ao carrinho"/>
               </div>
            </section>
         </main>


      </div>
    );
}

export default Produto;