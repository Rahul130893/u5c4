import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { AuthReducer } from "./Auth/reducer";
import { ProductReducer } from "./Product/reducer";
import thunk from "redux-thunk"



const rootReducer=combineReducers({
    auth: AuthReducer,
    product: ProductReducer
})

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk),
);