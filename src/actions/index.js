
export const addDog = (dog) => {

    return {
        type: "ADD_DOG",
        data: dog
    }
}

export const changeLocation = (zipcode) => {

    return {
        type: "CHANGE_LOCATION",
        data: zipcode
    }
}