
const initialState = {
    location: ["93101"],
    dogs: [{
        id: 1,
        name: "Buddha",
        gender: "Male",
        breed: "Husky Pit",
        age: "Adult",
        size: "Large",
        location: "93101",
        bio: "Buddha is the world's best (but craziest) dog.",
        contact: "adoptbuddha@ultimuttmatch.com",
        picture: "./images/buddha.jpg"
    }]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_DOG" : 

            return {
                ...state,
                dogs: [...state.dogs, action.data]
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