import React from 'react'

export const Modal = ({isOpenModal,closeModal,children}) => {

    const handleModalDialogClick = (e) =>{
        e.stopPropagation()
       
    }
  return (
    <div className={`modal ${isOpenModal && 'modal-open'}`} onClick={closeModal}>
        <div className="modal__dialog" onClick={handleModalDialogClick}>
             {children}
             <button onClick={closeModal}>Close</button>
        </div>
    </div>
  )
}
