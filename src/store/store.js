import { createStore } from "redux";
import { rootReducer } from "../reducers";

const initialState = {
	items: [
		{id: 1, name: "Apple", price: 0.5, quantity: 1},
		{id: 2, name: "Orange", price: 1, quantity: 1},
		{id: 3, name: "Banana", price: 0.75, quantity: 1},
	]
};

let store = createStore(
	rootReducer, 
	initialState
);

export { store }
