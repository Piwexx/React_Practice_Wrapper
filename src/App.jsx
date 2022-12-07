import  './modal.css'
import {Modal} from "./componentes/Modal"
import useModal from "./hooks/useModal"


function App() {

  const [isOpenModal,openModal,closeModal] = useModal()
  const [isOpenModalForm,openModalForm,closeModalForm] = useModal()

  return (
    <>
     <button onClick={openModal}>Modal</button>
     <button onClick={openModalForm}>Modal Form</button>
     <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
      <h1>Modal Desde hijo</h1>
     </Modal>
     <Modal isOpenModal={isOpenModalForm} closeModal={closeModalForm}>
      <h1>Segundo Modal FORM</h1>
      <form>
        <label>Input</label>
        <input type="text"></input>
      </form>
     </Modal>
    </>
  )
}

export default App
