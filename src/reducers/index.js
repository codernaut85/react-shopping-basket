import { combineReducers } from "redux";

import items from "./items";

const reducers = {
	items: items
};

const rootReducer = combineReducers(reducers);
export { rootReducer };
