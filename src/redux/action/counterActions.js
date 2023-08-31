

export  const addToCart = (item) => {
    return {
        type: "ADD",
        payload: item
    }
}


export const  removeCart = (id) => {
    return {
        type: "REMOVE",
        payload: id
    }
}


export const resetCart = () => {
    return {
        type: "RESET",
    }
}
