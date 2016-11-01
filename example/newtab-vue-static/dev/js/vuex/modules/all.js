const state = {
	all: []
}

const mutations = {
	INIT_ALL (state, payload){
		state.all = [...state.all, ...payload]
	}
}

export default {
	state,
	mutations
}