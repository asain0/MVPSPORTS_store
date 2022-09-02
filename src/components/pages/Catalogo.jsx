// import React, { useState } from 'react'
import InputSearch from '../InputSearch/InputSearch'
import CardProduto from '../CardProduto/CardProduto';
import '../pages/Catalogo.css'
import {MVPBD} from '../../data/MVPBD'

function Catalogo(){
  // DEV informou que fez esse trecho para acessar a lista de produtos 
    const data = MVPBD.produtos
  // let data = MVPBD.produtos
  
  //Alterar para ficar mais dinâmico 
  // let dataUrl = 'http://localhost:3000/static/shoes.json';
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(dataUrl)
  //       const data = await response.json()
  //       setData(data)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }
  //       fetchData()
  //   }, [dataUrl])

    return (
        <div className='catalogo'>
            <InputSearch />
            <div className="catalogo__produtos">
                {data.map(produto => (
                    <>
                    <CardProduto dadosProduto={produto} />
                    </>
                ))}
            </div>
        </div>
           
           
    )
}
   
   export default Catalogo