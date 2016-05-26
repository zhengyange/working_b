import {combineReducers} from 'redux';


let initState = {};

function SmartReducer(state = initState, action) {
    let {actionType} = action;
    switch(actionType){
        default:
            return Object.assign({},state);
    }
}

const IndexReducer = combineReducers({
	SmartReducer
})

export default IndexReducer;