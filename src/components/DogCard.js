import React from 'react';
import { useState, useEffect } from "react";
import DogModal from './DogModal';

export default function DogCard () {

  const [dogData, setDogData] = useState([])
  const [currentDog, setCurrentDog] = useState([])

  useEffect(() => {
    const setData = async () => {
      const url = " https://radiant-savannah-56270.herokuapp.com/https://ultimuttmatchdogapi.herokuapp.com/93105";
      const response = await fetch (url)
      const data = await response.json()
      console.log(data)
      setDogData(data)
    } 
    setData();
  }, []);

  const handleClick = (dog) => {


    setCurrentDog(dog)

    console.log(dog);
    
  }

  console.log(currentDog);




  return (
    <>
    <div>
      {dogData.map((dog) => {
        return (
            <div className="">
                <div className="">
                    <button className="card-bg card-deck m-3 w-25 h-50"onClick={() => handleClick(dog)}>
                            <div className="card">
                                <img src={dog.picture} alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title dog-title logo">{dog.name}</h5>
                                    <p className="card-text dog-info">{dog.age} ◦ {dog.breed} ◦ {dog.size}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted contact">Contact: {dog.contact}</small>
                                </div>
                            </div>
                    </button>
                </div>
            </div>
        )  
      })}
      <DogModal dog={currentDog} />
    </div>
    </>
  );
}