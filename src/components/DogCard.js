import React from 'react';
import { useSelector } from "react-redux";
import API from './API';
import DogModal from './DogModal';
import ZipCode from './ZipCode';

export default function DogCard () {


    const dogs = useSelector(state => state.dogs);

    // const handleClick = (dog) => {

    //     setCurrentDog(dog)
    
    //     console.log(dog);
        
    //   }
    
    //   console.log(currentDog);


  return (
    <>
    <API />
    <ZipCode />
    <div className="card-deck p-3 m-0">
      {dogs.map((dog) => {
        return (

            <div className="card card-bg m-2" key={dog.id}>
                <img src={dog.picture} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title dog-title logo text-center m-1 p-0">{dog.name}</h5>
                    <div className="card-text">
                        <p className="dog-info breed text-center m-0 p-0">{dog.breed}</p>
                        <p className="dog-info size text-center m-0 p-0">{dog.age} ◦ {dog.size}</p>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <small className="text-muted contact">{dog.contact}</small>
                </div>
            </div>


        )  
      })}
      {/* <DogModal dog={currentDog} /> */}
    </div>
    </>
  );
}