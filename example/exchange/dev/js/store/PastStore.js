import {createStore,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import PastReducer from '../reducer/PastReducer.js';

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
)(compose(

)(createStore))

const store = createStoreWithMiddleware(PastReducer);

export default store;
