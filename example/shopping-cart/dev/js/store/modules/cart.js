import {
	ADD_TO_CART,
	CHECKOUT_REQUEST,
	CHECKOUT_SUCCESS,
	CHECKOUT_FAILURE
} from '../mutation-types.js';

const state = {
	added: [],
	checkoutStatus: null
}

const mutations = {
	[ADD_TO_CART](state, {id}){
		const record = state.added.find(function(p){
			return p.id === id
		});

		if(!record){
			state.added.push({
				id,
				quantity: 1
			})
		}else{
			record.quantity++;
		}
	},
	//clear cart
	[CHECKOUT_REQUEST](state){
		state.added = [];
		state.checkoutStatus = null;
	},

	[CHECKOUT_SUCCESS](state){
		state.checkoutStatus = 'successful';
	},

	[CHECKOUT_FAILURE](state, { savedCartItems }){
		state.added = savedCartItems;
		state.checkoutStatus = 'failed';
	}	
}

export default {
	state,
	mutations
}