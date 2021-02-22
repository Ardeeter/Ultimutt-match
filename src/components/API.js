

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
        dispatch(addDog(data))  
    } 

    useEffect(() => {

        setData();

    }, []);

    return (
    <>
        
    </>
    );
}