import { applyMiddleware, createStore } from "redux";
import { productReducer } from "./productReducer";
import thunk from "redux-thunk";

const store = createStore(productReducer,applyMiddleware(thunk))

export {store}