

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { addDog } from '../actions'

export default function API () {

    const dogs = useSelector(state => state.dogs);
    const location = useSelector(state => state.location);

    const dispatch = useDispatch();

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

    useEffect(() => {

        setData();

    }, []);

    return (
    <>
        
    </>
    );
}