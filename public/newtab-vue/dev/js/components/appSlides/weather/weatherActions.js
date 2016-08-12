import { httpGetRequest, httpJsonpRequest } from '../../../utils/http.js';
import { ipApi, apiKey, hfApi, hfKey } from '../../../utils/config.js';


export const initData = function({dispatch, state}, done){
	httpGetRequest('http://pv.sohu.com/cityjson?ie=utf-8', {
				
	}, function(res){
		let bindex = res.data.indexOf('=');
		let resB = res.data.substring(bindex+1, res.data.length-1);
		let resL = JSON.parse(resB)
		console.log(resL)
		httpGetRequest(hfApi, {
			params: {
				cityip: resL.cip,
				key: hfKey
			}

		}, function(res){
			console.log(res)
			dispatch('INIT_DATA', res.data['HeWeather data service 3.0'][0]);
			done();
		})
	})
}