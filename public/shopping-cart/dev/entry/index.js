//es6语法：
import Vue from "vue";

import App from '../js/app.vue';
import store from '../js/store';
Vue.config.debug = true;//开启错误提示

window.vapp = new Vue({
	el: '#app',
	store,
	render: h => h(App)
});