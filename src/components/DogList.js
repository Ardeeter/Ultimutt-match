import React from 'react';
import { useState, useEffect } from "react";
import DogCard from './DogCard';
import ModalFilter from './ModalFilter';

export default function DogList () {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
      handleShow()     
  }


  return (
    <>
    <div className="row d-flex justify-content-end mx-4 mt-3">
      <button className="filter-button btn" onClick={()=> handleClick()}>Filter</button>
    </div>
    <ModalFilter show={show} handleClose={handleClose} handleShow={handleShow}/>
    <DogCard />
    </>
  );
}

