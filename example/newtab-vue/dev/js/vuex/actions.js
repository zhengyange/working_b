import { httpGetRequest } from './http.js';

export const initData = function({dispatch, state}, data){
	httpGetRequest(data.url, data.options, data.callback);
}
