import b5m from 'b5m_host';
import B5MApp from 'b5m_app';

import {
	urls,
	COLLECT,
	SHARE
} from '../constant/Constant.js';

//dispatch functions & normal functions here
//if need dispatch,call dispatch(function())
//if normal ,call function directly
export function init(){

}

export function collect(flag){
	console.log(flag)
	return {
		type: COLLECT,
		flag: flag
	}
};
export function share(flag){
	return {
		type: SHARE,
		flag: flag
	}
};


