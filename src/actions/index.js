
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
        type: "CHANGE_GENDER",
        data: gender
    }
}

export const changeAge = (age) => {

    return {
        type: "CHANGE_AGE",
        data: age
    }
}

export const changeSize = (size) => {

    return {
        type: "CHANGE_SIZE",
        data: size
    }
}

export const AddLikedDog = (dog) => {

    return {
        type: "ADD_LIKED_DOG",
        data: dog
    }
}

export const RemoveLikedDog = (id) => {

    return {
        type: "REMOVE_LIKED_DOG",
        id: id
    }
}