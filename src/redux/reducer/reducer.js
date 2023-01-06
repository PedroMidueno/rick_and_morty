import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER, SHOW_ALL } from "../actions/actionTypes";

const initialState = {
    myFavorites: [],
    allFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                allFavorites: [...state.allFavorites, payload],
                myFavorites: [...state.myFavorites, payload]
                
            }

        case DELETE_FAVORITE:
            var myFavorites = [...state.myFavorites]
            var deletedFavs = myFavorites.filter((elem) => {
                return elem.id !== payload;
            })
            return {
                ...state,
                myFavorites: deletedFavs,
                allFavorites: deletedFavs
            }

        case FILTER:
            var allCharacters = [...state.allFavorites];            
            var allCharsFilter = allCharacters.filter((elem) => {                
                return elem.gender == payload
            });
            return {
                ...state,
                myFavorites: allCharsFilter
            }

        case ORDER:
            var allCharacters = [...state.myFavorites];
            if (payload === "Ascendente") {
                allCharacters.sort((a, b) => a.id - b.id)
            } else if (payload === "Descendente") {
                allCharacters.sort((a, b) => b.id - a.id)
            }

            return {
                ...state,
                myFavorites: allCharacters
            }

        case SHOW_ALL:
            return {
                ...state,
                myFavorites: [...state.allFavorites]
            }



        default:
            return state;
    }
}

export default reducer;