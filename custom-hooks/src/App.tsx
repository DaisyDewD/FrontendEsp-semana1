import { useState } from 'react';
import { Modal, Sidebar } from './components';
import "./App.css";
import { useToggle } from './components/hooks/useToggle';

export default function App() {

  /* const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openSidebar = () => {
    setIsOpenSidebar(true);
  }

  const closeSidebar = () => {
    setIsOpenSidebar(false);
  }

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  } */

/*   const {isOpen: isOpenSidebar, close: closeSidebar, open:openSidebar} = useToggle()
  const {isOpen: isOpenModal, close: closeModal, open:openModal} = useToggle() */
  
  const {isOpen: isOpenSidebar, toggle: closeSidebar, } = useToggle()
  const {isOpen: isOpenModal, toggle: closeModal, } = useToggle()
  


  return (
    <div className="h-screen w-full">
      <div className="container">
        <Sidebar visible={isOpenSidebar} close={closeSidebar} />
        <h1>Custom Hook</h1>
        <div className="button-container">
          {/* <button onClick={openSidebar}>Open sidebar</button>
          <button onClick={openModal}>Open modal</button> */}
          <button onClick={closeSidebar}>Open sidebar</button>
          <button onClick={closeModal}>Open modal</button>
        </div>
        <Modal visible={isOpenModal} close={closeModal} />
      </div>
    </div>
  );
}
