
const initialState = {
    location: [""],
    breed: [""],
    gender: [""],
    age: [""],
    size: [""],
    dogs: [""]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_DOG" : 
        console.log('ADDING', action.data)

            return {
                ...state,
                dogs: action.data
            }
        
        case "CHANGE_LOCATION" :
            return {
                ...state,
                location: [action.data]
            }

        case "CHANGE_BREED" :
            return {
                ...state,
                breed: [action.data]
            }
        
        case "CHANGE_GENDER" :
            return {
                ...state,
                gender: [action.data]
            }
        
        case "CHANGE_AGE" :
            return {
                ...state,
                age: [action.data]
            }
        
        case "CHANGE_SIZE" :
            return {
                ...state,
                size: [action.data]
            }
        
        default:
            return state    
        
    }
}

export default reducer;