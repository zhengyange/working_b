//初始化state

const state = {
	count: 0
}

const mutations = {
	INCREMENT (state, amount){
		state.count = state.count + amount
	},
	DECREMENT (state, amount){
		state.count = state.count - amount
	}
}

export default {
	state,
	mutations
}