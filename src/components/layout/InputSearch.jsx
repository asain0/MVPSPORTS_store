import React from 'react'
import '../layout/InputSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const InputSearch = () => {
 
  return (
    <form>
    <FontAwesomeIcon icon={faSearch} />
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