
const initialState = {
    location: [""],
    breed: [""],
    gender: [""],
    age: [""],
    size: [""],
    dogs: [""],
    liked: []
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

        case "ADD_LIKED_DOG" :
            console.log("liked", state.liked);
            return {
                ...state,
                liked: [...state.liked, action.data]
            }
        
        case "REMOVE_LIKED_DOG" :
            return{
                ...state,
                liked: state.liked.filter(liked => liked.id !== action.id)
            }
        
        default:
            return state    
        
    }
}

export default reducer;