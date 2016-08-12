import Vue from "vue";
import VueResource from 'vue-resource';

Vue.use(VueResource);


export function httpGetRequest(url, options, callback){
	Vue.http.get(url, options).then((response) => callback(response), (error, message) => {
		console.log(error, message);
	});
}