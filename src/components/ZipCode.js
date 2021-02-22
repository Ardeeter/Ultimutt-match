import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {changeLocation } from '../actions'
import { v1 as uuidv1 } from "uuid";
import { addDog } from '../actions'


const ZipCode = () => {

    const location = useSelector(state => state.location);
    const dogs = useSelector(state => state.dogs);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();

        const setData = async () => {
            const url = `https://radiant-savannah-56270.herokuapp.com/https://ultimuttmatchdogapi.herokuapp.com/${location}`;
            const response = await fetch (url)
            const data = await response.json()
            console.log(data)
    
            data.forEach((dog) => {
    
                let dogObj = {
                    id: uuidv1(),
                    name: dog.name,
                    gender: dog.gender,
                    breed: dog.breed,
                    age: dog.age,
                    size: dog.size,
                    location: dog.location,
                    bio: dog.bio,
                    contact: dog.contact,
                    picture: dog.picture
                }
    
                if ((dogs.length < 11)){
                    dispatch(addDog(dogObj))
                }
            })
            
        } 
    
        // useEffect(() => {
    
        //     setData();
    
        // }, []);
    
    }

    
  return (
    <>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Choose Zip Code:</label>
                <select className="form-control" id="dropdown" name="dropdown" onChange={(e) => dispatch(changeLocation(e.target.value))}>
                    <option id="93101">93101</option>
                    <option value="93103">93103</option>
                    <option value="93105">93105</option>
                    <option value="93109">93109</option>
                    <option value="93110">93110</option>
                    <option value="93111">93111</option>
                    <option value="93117">93117</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default ZipCode
