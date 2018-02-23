import React from "react";
import ReactDOM from "react-dom";
import { BasketItem } from "./BasketItem";
import {connect} from "react-redux";
import * as actionTypes from "../actions/actions";

class Basket extends React.Component {

	constructor(props){
		super(props);
		this.removeAllItems = this.removeAllItems.bind(this);
		this.getBasketSubtotal = this.getBasketSubtotal.bind(this);
		this.getBasketTotalTax = this.getBasketTotalTax.bind(this);
		this.getBasketTotal = this.getBasketTotal.bind(this);
	}

	removeAllItems() {
		this.props.dispatch({
			type: actionTypes.REMOVE_ALL_ITEMS
		})
	}

	getBasketSubtotal() {
		let subtotal = 0;
		let items = this.props.items;

		items.map((item) => {
			subtotal += item.price * item.quantity;
		})

		return subtotal;
	}

	getBasketTotalTax() {
		return this.getBasketSubtotal() * 0.2;
	}

	getBasketTotal() {
		return this.getBasketSubtotal() + this.getBasketTotalTax();
	}

	render() {
		const items = this.props.items || []; 
		const list = [];

		for (let i = 0; i < items.length; i++) {
			list.push(<li className="shopping-basket-app__todo-list__item " key={i}>{<BasketItem item={items[i]} dispatch={this.props.dispatch} />}</li>);
		}

		return <section className="shopping-basket-app">
			<h1>React Shopping Basket App</h1>
			{this.props.items.length ? 			
			<div className="shopping-basket-app__clear-all" onClick={this.clearAll} >
				<button className="button button--clear-all" onClick={this.removeAllItems}>Clear all</button>
			</div>
			: 
			<div className="shopping-basket-app__alert shopping-basket-app__alert--error">Your shopping basket is empty</div>}
			<ul className="shopping-basket-app__todo-list" >{list}</ul>
			<footer className="shopping-basket-app__basket_total">
				<div className="shopping-basket-app__basket_total__row shopping-basket-app__basket_total__subtotal">Sub-total: <span className="shopping-basket-app__basket_total__row__figure">£{this.getBasketSubtotal().toFixed(2)}</span></div>
				<div className="shopping-basket-app__basket_total__row shopping-basket-app__basket_total_tax">VAT: <span className="shopping-basket-app__basket_total__row__figure">£{this.getBasketTotalTax().toFixed(2)}</span></div>
				<div className="shopping-basket-app__basket_total__row shopping-basket-app__basket_total_final-total">Total: <span className="shopping-basket-app__basket_total__row__figure"><strong>£{this.getBasketTotal().toFixed(2)}</strong></span></div>
			</footer>
		</section>;
	}
}

function mapStateToProps(state) {
	return { items: state.items };
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

const BasketConnect = connect(mapStateToProps, mapDispatchToProps)(Basket);

export { BasketConnect };
