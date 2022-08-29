import "./AsainBtn.css"

function AsainBtn(props) {
   return ( 
      <div className="produto_opcoes button-hckdv">
         <a href='/Checkout'>{props.titulo}</a>
         {/* <a href={props.acao}>{props.titulo}</a> */}
      </div>
    );
}

export default AsainBtn;