import {createStore,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import IndexReducer from '../reducer/IndexReducer.js';

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
)(compose(
  // devTools(),
)(createStore))

const store = createStoreWithMiddleware(IndexReducer);

export default store;
