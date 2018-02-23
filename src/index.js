import React from "react";
import ReactDOM from "react-dom";
import { BasketConnect } from "./components/Basket";
import { store } from "./store/store";
import { Provider } from "react-redux"

ReactDOM.render(
	<Provider store={store}>
		<BasketConnect />
	</Provider>,
	document.getElementById("app")
);