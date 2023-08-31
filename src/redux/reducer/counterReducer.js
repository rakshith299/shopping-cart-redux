let cart = [];

const counterReducer = (state = cart, action) => {
    if(action.type === "ADD"){
        return [...state, action.payload];
    }

    else if(action.type === "REMOVE"){
        return state.filter((each) => each.id !== action.payload);
    }

    else{
        return state = [];
    }
}

export default counterReducer;
