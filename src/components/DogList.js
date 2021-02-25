import React from 'react';
import { useState } from "react";
import { Dropdown, Button } from 'react-bootstrap'
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
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="sort-button btn mr-2">
          Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Nearest</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Farthest</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Newest Addition</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Oldest Addition</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button className="filter-button btn" onClick={()=> handleClick()}>Filter</Button>
    </div>
    <ModalFilter show={show} handleClose={handleClose} handleShow={handleShow}/>
    <DogCard />
    </>
  );
}
