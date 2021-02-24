import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import API from './API';
import DogModal from './DogModal';
import ZipCode from './ZipCode';
import { AddLikedDog, RemoveLikedDog } from '../actions/index'


export default function DogCard () {

    

    const dogs = useSelector(state => state.dogs);
    const likedDogs = useSelector(state => state.liked)


    const [show, setShow] = useState(false);
    const [currentDog, setCurrentDog] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleClick = (dog) => {
        setCurrentDog(dog)
        handleShow()     
      }

    const handleLike = (dog) => {
        console.log(likedDogs);
        if (!(dog.id in likedDogs)){
            dispatch(AddLikedDog(dog))
        }
    }

    const handleUnlike = (dog) => {
        dispatch(RemoveLikedDog(dog.id))
    }
    


  return (
    <>
    {/* <API /> */}
    {/* <ZipCode /> */}
    <div className="card-deck p-3 m-0">
      {dogs.map((dog) => {
          const email = `mailto:${dog.contact}`

        return (

            <div className="card card-bg m-2" key={dog.id}>
                <div className="card-img-top">
                  {dog.id in likedDogs ? <a className="heart-clicked btn" onClick={(e) => {handleUnlike(dog)}}><i className="fa fa-heart"></i></a> : <a className="heart-unclicked btn" onClick={(e) => {handleLike(dog)}}><i className="fa fa-heart"></i></a>}
                    <img src={dog.picture} alt="" className="card-img-top img-card" onClick={() => handleClick(dog)}/>
                </div>
                <div className="card-body" onClick={() => handleClick(dog)}>
                    <h5 className="card-title dog-title logo text-center m-1 p-0">{dog.name}</h5>
                    <div className="card-text">
                        <p className="dog-info breed text-center m-0 p-0">{dog.breed}</p>
                        <p className="dog-info size text-center m-0 p-0">{dog.gender} ◦ {dog.age} ◦ {dog.size}</p>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <small className="text-muted contact"><a href={email}> {dog.contact} </a></small>
                </div>
            </div>


        )  
      })}
      
    </div>
    <DogModal show={show} handleClose={handleClose} handleShow={handleShow} dog={currentDog}/>
    </>
  );
}