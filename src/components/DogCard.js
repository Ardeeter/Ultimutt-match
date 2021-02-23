import React, {useState} from 'react';
import { useSelector } from "react-redux";
import API from './API';
import DogModal from './DogModal';
import ZipCode from './ZipCode';

export default function DogCard () {


    const dogs = useSelector(state => state.dogs);

    const [show, setShow] = useState(false);
    const [currentDog, setCurrentDog] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (dog) => {
        setCurrentDog(dog)
        handleShow()     
      }
    


  return (
    <>
    {/* <API /> */}
    {/* <ZipCode /> */}
    <div className="card-deck p-3 m-0">
      {dogs.map((dog) => {
        return (

            <div className="card card-bg m-2" key={dog.id} onClick={() => handleClick(dog)}>
                <img src={dog.picture} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title dog-title logo text-center m-1 p-0">{dog.name}</h5>
                    <div className="card-text">
                        <p className="dog-info breed text-center m-0 p-0">{dog.breed}</p>
                        <p className="dog-info size text-center m-0 p-0">{dog.gender} ◦ {dog.age} ◦ {dog.size}</p>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <small className="text-muted contact">{dog.contact}</small>
                </div>
            </div>


        )  
      })}
      
    </div>
    <DogModal show={show} handleClose={handleClose} handleShow={handleShow} dog={currentDog}/>
    </>
  );
}