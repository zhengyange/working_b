export const testPlugin = store => {
	// let prevState = store.state;
	let prevState = Object.assign({}, store.state);
	store.subscribe((mutation,state) => {
		console.log(PRODUCTION)
		// let nextState = state;
		let nextState = Object.assign({}, state);
		console.log(prevState.count, nextState.count)
		prevState = nextState;
	})
}