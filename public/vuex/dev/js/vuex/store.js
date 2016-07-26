import Vue from 'vue';
import Vuex from 'vuex';

//vue需要显示的使用插件
Vue.use(Vuex);

//相当于redux中的state
const state = {
	count: 0
}

//相当于redux中的reducer
const mutations = {
	INCREMENT (state, amount){
		state.count = state.count + amount
	},
	DECREMENT (state, amount){
		state.count = state.count - amount
	}
}

export default new Vuex.Store({
	state,
	mutations
})


