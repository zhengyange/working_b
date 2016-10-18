//es6语法：
import Vue from "vue";
import VueRouter from 'vue-router';

import App from '../js/App.vue';
import routes from '../js/routers/route-config.js';

console.log(routes)

//安装使用vue-router插件
Vue.use(VueRouter);

//创建router
const router = new VueRouter({
	mode: 'history',
    base: __dirname,
	routes
});

//配置路由

//启动路由
// router.start(App, '#app');
const app = new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');

