import {
	RECEIVE_PRODUCTS,
	ADD_TO_CART,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS
} from '../mutation-types'

// initial state
const state = {
  all: [],
  allDecCart: []
}

// const actions = {
//   getProductsDecCart: function({commit, state, rootState}){
//     console.log(state, rootState)
//   }
// }
// mutations
const mutations = {
  [RECEIVE_PRODUCTS] (state, products) {
    state.all = JSON.parse(products);
    state.allDecCart = JSON.parse(products);

  },

  [ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--;
  }
}

export default {
  state,
  // actions,
  mutations
}