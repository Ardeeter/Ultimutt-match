import React, { useState } from 'react'
import Filter from './components/Filter'
import ModalFilter from './components/ModalFilter';
// import Photo from '../images/background.jpg';

const App = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        handleShow()     
      }


  return (
    <>
        <div className="d-flex justify-content-center">
            <h1 className="m-3 mt-4 title font-weight-bold">
                Ready to Find Your Best Friend?
            </h1>
        </div>
        <div className="d-flex justify-content-center">
            <button className="start-button" onClick={()=> handleClick()}>Get Started</button>
        </div>
        <img src="./images/header.jpg" className="header-img fixed-bottom" alt=""/>
        {/* <div className="container d-flex row justify-content-end bg-white full-size m-0">
            <div className="bg-white full-size">
                <button className="start-button" onClick={()=> handleClick()}>Get Started</button>
            </div>
            
        </div> */}
      {/* <button className="start-button" onClick={()=> handleClick()}>Get Started</button> */}

      <ModalFilter show={show} handleClose={handleClose} handleShow={handleShow}/>
    </>
  )
}

export default App
