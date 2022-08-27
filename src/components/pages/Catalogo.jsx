import React from 'react'
import ProductCard from '../layout/ProductCard'
import InputSearch from '../InputSearch/InputSearch'

function Catalogo(){
    return (
        <div>
            <InputSearch />
         <ProductCard 
           dataUrl={'http://localhost:3000/static/shoes.json'}
           title={'Tênis'}
           />
        </div>
           
           
    )
}
   
   export default Catalogo