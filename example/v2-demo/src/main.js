//es6语法：
import Vue from "vue";
//其实不用写完，会自动查找。
//外部引入别的库都可以用这样的方式，比如jquery等。。
//引入我们编写的测试用vue文件。
import App from './pages/app.vue';


//   beforeEnter: function (el) {
//     el.textContent = 'beforeEnter'
//   },
//   enter: function (el) {
//     el.textContent = 'enter'
//   },
//   afterEnter: function (el) {
//     el.textContent = 'afterEnter'
//   },
//   enterCancelled: function (el) {
//     // handle cancellation
//   },

//   beforeLeave: function (el) {
//     el.textContent = 'beforeLeave'
//   },
//   leave: function (el) {
//     el.textContent = 'leave'
//   },
//   afterLeave: function (el) {
//     el.textContent = 'afterLeave'
//   },
//   leaveCancelled: function (el) {
//     // handle cancellation
//   }
// })
Vue.config.debug = true;//开启错误提示

window.vapp = new Vue({
	el: '#app',
	render: h => h(App)
});

