import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import changeNumber from "../Redux/Reducer/index";

const reducer = combineReducers({
    changeNumber: changeNumber
})

let initialState = {
    changeNumber: {
        changeNumber: localStorage.getItem('changeNumber') 
            ? JSON.parse(localStorage.getItem('changeNumber'))
            : [],
           
    }
}
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;