import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addDog, changeLocation, changeBreed, changeGender, changeAge, changeSize } from '../actions';

const Filter = () => {

    const location = useSelector(state => state.location);
    const breed = useSelector(state => state.breed);
    const gender = useSelector(state => state.gender);
    const age = useSelector(state => state.age);
    const size = useSelector(state => state.size);

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
                <label className="col-2 text-right m-3" for="exampleFormControlSelect1">Select Zip Code:</label>
                <select className="form-control col-3 m-3" id="location" name="location" onChange={(e) => dispatch(changeLocation(e.target.value))}>
                    <option value="93101">93101</option>
                    <option value="93103">93103</option>
                    <option value="93105">93105</option>
                    <option value="93109">93109</option>
                    <option value="93110">93110</option>
                    <option value="93111">93111</option>
                    <option value="93117">93117</option>
                </select>
                {/* <button type="submit" className="btn btn-primary my-3 mr-4 submit-button border-0">Submit</button> */}
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect2">Breed:</label>
                <select multiple class="form-control" id="breed" onChange={(e) => dispatch(changeBreed(e.target.value))}>
                    <option value="All">All</option>
                    <option value="Cattle">Australian Cattle Dog</option>
                    <option value="Kelpie">Australian Kelpie</option>
                    <option value="Alaskan Malamute">Alaskan Malamute</option>
                    <option value="Beagle">Beagle</option>
                    <option value="Bloodhound">Bloodhound</option>
                    <option value="Blue Heeler">Blue Heeler</option>
                    <option value="Border Collie">Border Collie</option>
                    <option value="Boston Terrier">Boston Terrier</option>
                    <option value="Boxer">Boxer</option>
                    <option value="Bulldog">Bulldog</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Chow Chow">Chow Chow</option>
                    <option value="Dachshund">Dachshund</option>
                    <option value="Doberman Pinscher">Doberman Pinscher</option>
                    <option value="Foxhound">Foxhound</option>
                    <option value="Great Dane">Great Dane</option>
                    <option value="Great Pyrenees">Great Pyrenees</option>
                    <option value="Gordon Setter">Gordon Setter</option>
                    <option value="Hound">Hound</option>
                    <option value="Husky">Husky</option>
                    <option value="Jack Russel">Jack Russel</option>
                    <option value="Jindo">Jindo</option>
                    <option value="Retriever">Labrador Retriever</option>
                    <option value="Rottweiler">Rottweiler</option>
                    <option value="Maltese">Maltese</option>
                    <option value="Mastiff">Mastiff</option>
                    <option value="Miniature Schnauzer">Miniature Schnauzer</option>
                    <option value="Pit Bull">Pit Bull</option>
                    <option value="Pointer">Pointer</option>
                    <option value="Saint Bernard">Saint Bernard</option>
                    <option value="Shar-Pei">Shar-Pei</option>
                    <option value="Shepherd">Shepherd</option>
                    <option value="Spaniel">Spaniel</option>
                    <option value="Terrier">Terrier</option>
                    <option value="Weimaraner">Weimaraner</option>
                    
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Gender:</label>
                <select class="form-control" id="gender" onChange={(e) => dispatch(changeGender(e.target.value))}>
                    <option value="genderNone">No preference</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Age:</label>
                <select class="form-control" id="age" onChange={(e) => dispatch(changeAge(e.target.value))}>
                    <option value="ageNone">No preference</option>
                    <option value="Puppy">Puppy</option>
                    <option value="Young">Young</option>
                    <option value="Adult">Adult</option>
                    <option value="Senior">Senior</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Gender:</label>
                <select class="form-control" id="gender" onChange={(e) => dispatch(changeGender(e.target.value))}>
                    <option value="genderNone">No preference</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Size:</label>
                <select class="form-control" id="size">
                    <option value="sizeNone">No preference</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Filter
