//es6语法：
import Vue from "vue";
import VueRouter from 'vue-router';

import App from '../js/App.vue';
import { configRouter } from '../js/routers/route-config.js';

//安装使用vue-router插件
Vue.use(VueRouter);

//创建router
const router = new VueRouter({
	history: true,
	saveScrollPosition: true
});

//配置路由
configRouter(router)

//启动路由
router.start(App, '#app');



// // import Foo from '../js/components/Foo.vue';
// import Bar from '../js/components/Bar.vue';
// import Baz from '../js/components/Baz.vue';
// import Default from '../js/components/Default.vue';


// Vue.config.debug = true;//开启错误提示

// Vue.use(VueRouter);

// var router = new VueRouter({
// 	history: true,
// 	root: '/'
// });
// // router.beforeEach(function(transition){
// // 	console.log(transition);
// // 	transition.next();
// // });
// router.map({
// 	'/': {
// 		component: Default,
// 		name: 'defaultRoute'
// 	},
// 	'/foo': {
//         // component: Foo,
//         component: function (resolve) {
// 	      require(['../js/components/Foo.vue'], resolve)
// 	    },        
// 	    auth: true,
//         name: 'foo',
//         subRoutes: {
//         	'/': {
//         		component: Default
//         	},
//         	'/bar/:username': {
// 		        // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
// 		        // 一个Bar组件
// 		        component: Bar
// 		    },
// 		    '/baz': {
// 		        // Baz也是一样，不同之处是匹配的路由会是/foo/baz
// 		        component: Baz
// 		    }
//         }
//     },
//     '/bar': {
//         component: Bar
//     }
// });

// // var vm = new Vue(app);
// router.start(App, '#app');

