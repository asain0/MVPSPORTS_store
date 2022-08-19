import "./AsainBtn.css"

function AsainBtn(props) {
   return ( 
      <div className="produto_opcoes button-hckdv">
         <a href={props.acao}>{props.titulo}</a>
      </div>
    );
}

export default AsainBtn;