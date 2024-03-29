function makeAction(type){
	return ({dispatch}, ...args) => dispatch(type, ...args);
}


export const addTodo = makeAction('ADD_TODO');
export const toggleTodo = makeAction('TOGGLE_TODO');
export const editTodo = makeAction('EDIT_TODO');
export const deleteTodo = makeAction('DELETE_TODO');
export const toggleAll = makeAction('TOGGLE_ALL');
export const clearCompleted = makeAction('CLEAR_COMPLETED');