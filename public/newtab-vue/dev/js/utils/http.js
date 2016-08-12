import Vue from "vue";
import VueResource from 'vue-resource';

Vue.use(VueResource);


export function httpGetRequest(url, options, callback){
	Vue.http.get(url, options).then((response) => callback(response), (error, message) => {
		console.log(error, message);
	});
}
export function httpJsonpRequest(url, options, callback){
	Vue.http.jsonp(url, options).then((response) => callback(response), (error, message) => {
		console.log(error, message);
	});
}