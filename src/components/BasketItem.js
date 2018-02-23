import React from "react";
import ReactDOM from "react-dom";
import * as actionTypes from "../actions/actions";

class BasketItem extends React.Component {

	constructor(props) {
		super(props);
		this.removeItem = this.removeItem.bind(this);
		this.increaseQuantity = this.increaseQuantity.bind(this);
		this.decreaseQuantity = this.decreaseQuantity.bind(this);
	}

	removeItem () {
		const id = this.props.item.id;
		this.props.dispatch({
			type: actionTypes.REMOVE_ITEM,
			id: id
		});
	}

	increaseQuantity () {
		const id = this.props.item.id;
		this.props.dispatch({
			type: actionTypes.INCREASE_ITEM_QUANTITY,
			id: id
		});
	}

	decreaseQuantity () {
		const id = this.props.item.id;
		this.props.dispatch({
			type: actionTypes.DECREASE_ITEM_QUANTITY,
			id: id
		});
	}

	render() {

		const item = this.props.item || {};

		return (<article>
				<h2>{item.name}</h2>
				<p>Unit cost: £{item.price.toFixed(2)}</p>
				<p>Quantity: {item.quantity}</p>
				<div className="button-group">
					<button className="button button--clear-all" onClick={this.removeItem}>Remove</button>
					<button className="button button--decrease" onClick={this.decreaseQuantity}>-</button>
					<button className="button button--increase" onClick={this.increaseQuantity}>+</button>
				</div>
			</article>);
	}
}

export { BasketItem };