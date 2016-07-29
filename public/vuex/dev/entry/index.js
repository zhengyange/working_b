//es6语法：
import Vue from "vue";

//其实不用写完，会自动查找。
//外部引入别的库都可以用这样的方式，比如jquery等。。
//引入我们编写的测试用vue文件。
// import app from '../js/app.vue';
import app from '../js/components/App.vue';
Vue.config.debug = true;//开启错误提示
//必须在实例话之前设置
// Vue.transition('expand', {
// 	beforeEnter: function(el){
// 		alert('确定了？')
// 		return false;
// 	}
// })
Vue.transition('stagger', {
  stagger: function (index) {
    // 每个过渡项目增加 50ms 延时
    // 但是最大延时限制为 300ms
    return Math.min(300, index * 50)
  }
})

var vm = new Vue(app);

// console.log(vm.$data);
// console.log(vm.$el);
// vm.$watch('message', function(newVal, oldVal){
// 	console.log(newVal, oldVal)
// });
// vm.message = 'akjflasdjkf;lasjf'
// vm.todos[1] = {text:'测试用例'};
vm.todos.$set(3, {text: '测试工工   '});

setTimeout(function(){
	vm.todos.splice(0, 1);
}, 1000);
