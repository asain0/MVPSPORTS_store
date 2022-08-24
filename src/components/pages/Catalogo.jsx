import "./Catalogo.css"
import { Link } from 'react-router-dom'
import {produtos} from '../../data/fakeBD';
import CarouselSection from "../CarouselSection/CarouselSection";

const listaProdutos = produtos;
console.log(listaProdutos);
function Catalogo(){
    return (
        <div>
            <br></br>
            <h1>Catálogo </h1>
            <br></br>
            <CarouselSection
                dataUrl={'http://localhost:3000/static/shoes.json'}
                title={'Novidades'}
            />      
            <CarouselSection
            dataUrl={'http://localhost:3000/static/shoes.json'}
            title={'Novidades'}
            />
            <CarouselSection
                dataUrl={'http://localhost:3000/static/shoes.json'}
                title={'Novidades'}
            />

            {/* {
                listaProdutos.map( produto => (
                    <Link key={produto.id} to="/Produto">
                    <div className="cardProduto">
                        {console.log(produto.img)}
                        <img src = {produto.img} alt="produto"/>
                        <div className="cardTitulo">{produto.nome}</div>
                        <div className="cardPreco">{produto.preco}</div>
                    </div>
                    
                    </Link>
                ))
            } */}
            <br></br>
        </div>
    )
}
   
   export default Catalogo