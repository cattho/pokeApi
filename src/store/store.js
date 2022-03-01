import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { userReducer } from "../reducers/userReducer";
import { userRegisterReducer } from "../reducers/UserRegisterReducer";
import { pokemonReducer } from "../reducers/pokemonReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers= combineReducers({
    login:userReducer,
    register:userRegisterReducer,
    pokemon: pokemonReducer
})

export const store= createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)