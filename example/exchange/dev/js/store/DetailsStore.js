import {createStore,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import DetailsReducer from '../reducer/DetailsReducer.js';

//devTools
// import { devTools, persistState } from 'redux-devtools';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// import DiffMonitor from 'redux-devtools-diff-monitor';

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
)(compose(
  // devTools(),
  // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore))

const store = createStoreWithMiddleware(DetailsReducer);

export default store;
