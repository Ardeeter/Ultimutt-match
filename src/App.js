import React, { useState } from 'react'
import ModalFilter from './components/ModalFilter';

const App = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        handleShow()     
      }


  return (
    <>
    <div className="app-container">
        <div className="d-flex justify-content-center">
                <h1 className="m-3 mt-4 title font-weight-bold">
                    Ready to Find Your Best Friend?
                </h1>
            </div>
            <div className="d-flex justify-content-center">
                <button className="start-button" onClick={()=> handleClick()}>Get Started</button>
            </div>
            <img src="./images/header.jpg" className="header-img" alt=""/>
        <ModalFilter show={show} handleClose={handleClose} handleShow={handleShow}/>
    </div>
        
    </>
  )
}

export default App
