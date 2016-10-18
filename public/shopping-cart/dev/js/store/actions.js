import shop from '../api/shop.js';
import {
	RECEIVE_PRODUCTS,
	ADD_TO_CART,
	CHECKOUT_REQUEST,
	CHECKOUT_SUCCESS,
	CHECKOUT_FAILURE,
	PRODUCTS_DEC_CART
} from './mutation-types';

export const getAllProducts = function({commit, state}){
	shop.getProducts(function(products){
		commit(RECEIVE_PRODUCTS, products);
	})
}

export const addToCart = function({commit}, product){
	if(product.inventory > 0){
		commit(ADD_TO_CART, {id: product.id});
	}
}

export const checkOut = function({commit, state}, products){
	const savedCartItems = [...state.cart.added]

	commit(CHECKOUT_REQUEST);
	shop.buyProducts(
		products,
		() => {
			commit(CHECKOUT_SUCCESS);
			getAllProducts({commit, state});	
		},
		() => commit(CHECKOUT_FAILURE, { savedCartItems })
	)
}
