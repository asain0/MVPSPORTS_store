import React from 'react';
import AsainBtn from '../AsainBtn/AsainBtn';
import MvpInput from '../MvpInput/MvpInput';
// import MvpButton from '../MvpButton/MvpButton';
import './MvpModal.css'

function MvpModal({id = 'modal', onClose, title}) {
   const handleOutsideClick = (e) => {
      if( e.target.id === id) onClose();
   }

   return ( 
   <div id='modal' className="MvpModal" onClick={handleOutsideClick}>
      <div className="popup">
         <div className="popup__header">
            <button onClick={onClose} className='popup__close__button'>X</button>
         </div>
         <h2>{title}</h2>
         <div className="popup__content">
            <MvpInput textoLabel="E-mail"
                      typeInput="email" nameInput="email" id="email" placeholderInput="Digite Aqui.." />
            <AsainBtn titulo='enviar'/>
         </div>
      </div>
   </div>
    );
}

export default MvpModal;