import {
	COLLECT,
	SHARE
} from '../constant/Constant.js';

let initState = {
	isCollected: false,
	isShared: false
};

export default function SmartReducer(state = initState, action) {
    
    switch(action.type){
    	case COLLECT:
    		return Object.assign({}, state, {isCollected: action.flag});
    	case SHARE:
    		return Object.assign({}, state, {isShared: action.flag});
        default:
            return Object.assign({},state);
    }
}
