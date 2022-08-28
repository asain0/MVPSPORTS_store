import React from 'react'
import '../InputSearch/InputSearch.css'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faSearch } from '@fontawesome/free-solid-svg-icons'
import { FiSearch } from "react-icons/fi"

const InputSearch = () => {
 
  return (
    <form className='inputSearch'>
    {/* <FontAwesomeIcon icon={faSearch} /> */}
    <FiSearch/>
    <input
      type="text"
      name=""
      id="search-item"
      placeholder="Buscar Produtos" onkeyup="search()"
    />
  </form>
  )
}

export default InputSearch