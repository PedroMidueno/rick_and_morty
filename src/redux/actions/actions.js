import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER, SHOW_ALL } from "./actionTypes";

export const addFavorite = (char) => {
    return {
        type: ADD_FAVORITE,
        payload: char
    }
}

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const filterCards = (status) => {
    return {
        type: FILTER,
        payload: status
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}

export const showAll =()=>{
    return{
        type: SHOW_ALL
    }
}