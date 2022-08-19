import './AsainChck.css'

function AsainChck({opcoes, name}) {
   return ( 
/*Deverá receber um objeto contendo:
 Classe: alguma classe adicional para estilização do componente
 name: nome do grupo do componente
 value: valor do componente selecionado
 id,  for: link entre label e input componente selecionado
 conteudo: conteúdo a ser apresentado no componente
*/
      <div class="produto__cores__opcoes">
         {opcoes.map(opcao => {
            return(
            // <div>{opcao}</div>
            <div className="produto__cores__opcoes__item input-radio-hckdv">
               <input type="radio" name={name} value={opcao.value} id={opcao.id + name}/>
               <label for={opcao.id + name} id={opcao.id + name}>{opcao.conteudo}</label>
            </div>
            )
         })}
       
         {/* <div class="produto__cores__opcoes__item input-radio-hckdv">
            <input type="radio" name="cor" value="branca" id="corBranca"/>
            <label for="corBranca" id="corBranca"> </label>
         </div>
         <div class="produto__cores__opcoes__item input-radio-hckdv">
            <input type="radio" name="cor" value="verde" id="corMesclada" checked/>
            <label for="corMesclada" id="corPreta"> </label>
         </div> */}
      </div>
         

    );
}

export default AsainChck;