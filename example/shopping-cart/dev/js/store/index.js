import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import * as getters from './getters.js';
import products from './modules/products.js';
import cart from './modules/cart.js';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		products,
		cart
	}
});