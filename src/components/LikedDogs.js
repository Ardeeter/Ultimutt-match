import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import DogModal from './DogModal';

const Resources = () => {

  const likedDogs = useSelector(state => state.liked)

  const [show, setShow] = useState(false);
  const [currentDog, setCurrentDog] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (dog) => {
    setCurrentDog(dog)
    handleShow()     
  }

  const handleLike = (dog) => {
    // console.log(likedDogs);
    // if (!(dog.id in likedDogs)){
    //     dispatch(AddLikedDog(dog))
    // }
}


  return (
    <>
       <div className="card-deck p-3 m-0">
      {likedDogs.map((dog) => {
          const email = `mailto:${dog.contact}`

        return (

            <div className="card card-bg m-2" key={dog.id}>
                <div className="card-img-top">
                    <a className="heart btn" onClick={(e) => {handleLike(dog)}}><i className="fa fa-heart"></i></a>
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
                    <small className="text-muted contact"><Link to={email}> {dog.contact} </Link></small>
                </div>
            </div>


        )  
      })}
      
    </div>
    <DogModal show={show} handleClose={handleClose} handleShow={handleShow} dog={currentDog}/>
    </>
  )
}

export default Resources
