
const initialState = {
    location: ["93101"],
    dogs: []
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
        
        default:
            return state    
        
    }
}

export default reducer;