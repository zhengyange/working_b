export const addTodo = function({dispatch}, todotext){
	dispatch('ADD_TODO', todotext)
}

export const toggleTodoDone = function({dispatch}, id, done){
	dispatch('TOGGLE_DONE', id, done);
}

export const clearTodoDone = function({dispatch}){
	dispatch('CLEAR_DONE');
}

export const getTodos = function({dispatch}){
	let todos = localStorage.getItem('todos');
	if(!todos){
		todos = [];
	}else{
		todos = JSON.parse(todos);
	}	
	dispatch('GET_TODOS', todos)
}