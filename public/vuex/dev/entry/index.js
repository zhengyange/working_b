import Vue from "vue";
import app from '../js/app.vue';
Vue.config.debug = true;//开启错误提示

let vm = new Vue({
	el: '#app',
	render: h => h(app)
});
