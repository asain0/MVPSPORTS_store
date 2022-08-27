import React from 'react'
import ProductCard from '../layout/ProductCard'
import InputSearch from '../layout/InputSearch'

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
   
=======
import React from 'react'
import ProductCard from '../layout/ProductCard'
import InputSearch from '../layout/InputSearch'

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
   
>>>>>>> jean
   export default Catalogo