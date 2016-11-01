import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	todos: [
		{text: 'todo--aaaaaaaaaa', done: false},
		{text: 'todo--aaaaaaaaaa', done: false},
		{text: 'todo--bbbbbbbbbb', done: false},
		{text: 'todo--cccccccccc', done: true},
		{text: 'todo--dddddddddd', done: false}
	]
};

const mutations = {
	ADD_TODO (state, text){
		state.todos.unshift({
			text: text,
			done: false
		})
	},
	TOGGLE_TODO (state, todo){
		todo.done = !todo.done;
	},
	EDIT_TODO (state, todo, text){
		todo.text = text;
	},
	DELETE_TODO (state, KI){
		state.todos.splice(KI, 1)
	},
	TOGGLE_ALL (state, done){
		state.todos.forEach((todo) => {
			todo.done = done
		})
	},
	CLEAR_COMPLETED (state){
		state.todos = state.todos.filter(todo => !todo.done);
	}
}

export default new Vuex.Store({
	state,
	mutations
})