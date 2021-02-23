
export const addDog = (data) => {

    return {
        type: "ADD_DOG",
        data
    }
}

export const changeLocation = (zipcode) => {

    return {
        type: "CHANGE_LOCATION",
        data: zipcode
    }
}

export const changeBreed = (breed) => {

    return {
        type: "CHANGE_BREED",
        data: breed
    }
}

export const changeGender = (gender) => {

    return {
        type: "CHANGE_BREED",
        data: gender
    }
}

export const changeAge = (age) => {

    return {
        type: "CHANGE_BREED",
        data: age
    }
}

export const changeBreed = (size) => {

    return {
        type: "CHANGE_BREED",
        data: size
    }
}