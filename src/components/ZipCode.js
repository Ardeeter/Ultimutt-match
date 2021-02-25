import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {changeLocation } from '../actions'
import { addDog } from '../actions'


const ZipCode = () => {

    const location = useSelector(state => state.location);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const url = `https://radiant-savannah-56270.herokuapp.com/https://ultimuttmatchdogapi.herokuapp.com/${location}`;
        const response = await fetch (url)
        const data = await response.json()
        console.log(data)

        dispatch(addDog(data))
    }

    
  return (
    <>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group row d-flex justify-content-end m-0">
                {/* <label className="col-2 text-right m-3" for="exampleFormControlSelect1">Choose Zip Code:</label> */}
                <select className="form-control col-3 m-3" id="dropdown" name="dropdown" onChange={(e) => dispatch(changeLocation(e.target.value))}>
                    <option id="93101">93101</option>
                    <option value="93103">93103</option>
                    <option value="93105">93105</option>
                    <option value="93109">93109</option>
                    <option value="93110">93110</option>
                    <option value="93111">93111</option>
                    <option value="93117">93117</option>
                </select>
                <button type="submit" className="btn btn-primary my-3 mr-4 submit-button border-0">Submit</button>
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        </form>
    </>
  )
}

export default ZipCode
