import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	count: 0
}

const mutations = {
	increment(state){
		state.count++
	},
	decrement(state){
		state.count--
	}
}

export default new Vuex.Store({
	state,
	mutations
})