import {createStore,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from '../reducer/RootReducer.js';

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
)(compose(

)(createStore))

const store = createStoreWithMiddleware(RootReducer);

export default store;
