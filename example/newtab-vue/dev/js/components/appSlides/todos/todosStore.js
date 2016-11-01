const state = {
	todos: [
		// {id: 1, text: 'text1', done: false},
		// {id: 2, text: 'text2', done: false},
		// {id: 3, text: 'text3', done: true}
	]
}

const mutations = {
	GET_TODOS (state, todos){
		state.todos = [...state.todos, ...todos];
	},

	ADD_TODO (state, todotext){
		let todos = state.todos;
		state.todos.push({
			id: todos.length + 1,
			text: todotext,
			done: false
		});	
		localStorage.setItem('todos', JSON.stringify(state.todos));
	},
	TOGGLE_DONE (state, id, done){
		state.todos[id - 1].done = done;
		localStorage.setItem('todos', JSON.stringify(state.todos));
	},
	CLEAR_DONE (state){
		let todos = state.todos;
		state.todos = todos.filter(function(todo, index) {
			return !todo.done;
		});
		localStorage.setItem('todos', JSON.stringify(state.todos));
	}
}

export default {
	state,
	mutations
}