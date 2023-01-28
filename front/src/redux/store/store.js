import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import reducer from '../reducer/reducer'


const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleWare)
)

export default store;