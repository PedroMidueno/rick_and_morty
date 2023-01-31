import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER, SHOW_ALL } from "./actionTypes";
import axios from 'axios';

export const addFavorite = (char) => {
    return async function (dispatch) {
        try {
            const response = await axios.post(`http://localhost:3001/rickandmorty/fav`, char)
            dispatch({
                type: ADD_FAVORITE,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}

export const deleteFavorite = (id) => {
    return async function (dispatch) {
        try {
            await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }

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

export const showAll = () => {
    return {
        type: SHOW_ALL
    }
}