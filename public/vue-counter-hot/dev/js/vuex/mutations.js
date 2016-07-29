import { INCREMENT, DECREMENT } from './mutation-types.js';

const mutations = {
	[INCREMENT] (state){
		state.count++;
		state.history.push('increment');
	},
	[DECREMENT] (state) {
	    state.count--;
	    state.history.push('decrement');
	}
}

export default mutations;