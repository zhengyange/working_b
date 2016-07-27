/*
 * 一个action，是一个函数，第一个参数为store
 * 实际中，我们最想要的是dispatch和state
 * 可以使用ES6的解构语法，传递两个参数到action
 */

export const incrementCounter = function({dispatch, state}, payload){
	dispatch('INCREMENT', payload);
}

export const decrementCounter = function(store){
	console.log(store)
	let {dispatch, state} = store;
	setTimeout(function(){
		dispatch('DECREMENT', 1)
		
	}, 500)
}