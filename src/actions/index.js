
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