
export default function items(state = {}, action) {

	const newState = [...state];

	switch (action.type) {

		case "REMOVE_ITEM": 
			return state.filter((item) => {
				return item.id !== action.id;
			});

		case "REMOVE_ALL_ITEMS": 
			return [];

		case "INCREASE_ITEM_QUANTITY": 
			newState.map((item) => {
				if (item.id === action.id) {
					item.quantity = item.quantity + 1;
					return item;
				}
				return item;
			});
			return newState;

		case "DECREASE_ITEM_QUANTITY": 
			newState.map((item) => {
				if (item.id === action.id) {
					if (item.quantity > 0) {
						item.quantity = item.quantity - 1;
					}
					return item;
				}
				return item;
			});
			return newState;

		default:
			return state;
	}	
}