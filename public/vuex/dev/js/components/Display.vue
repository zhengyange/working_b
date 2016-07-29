<script type="text/javascript">
	//引入vuex的getter函数
	import { getCount } from '../vuex/getters.js';

	/*
	 * vuex.getter使变量counterValue与getCount建立绑定关系
	 * ？？？为什么不直接使用getCount函数获取值？？？
	 * 1. 可以使用计算属性定义getters
	 * 2. 大型应用中，多个组件可以使用同一个getter函数
	 * 3. 如果store结构改变了，仅需要更新一个getter函数就可以
	 * 4. so on.....
	 */
	export default {
		data: function(){
			return {
				ifConsole: true,
				filtersValue: 'shanghai liale!'
			}
		},
		/*
		 * 获得所需state，从store
		 */
		created: function(){
			console.log(this.counter)
		},
		vuex: {
			getters: {
				/*
				 * getCount是在getters.js中定义的一个getter函数
				 * 作用：绑定组件所需要的state，例：store.state.count到组件上：this.counterValue
				 * getter函数相当于组件的计算属性，而计算属性会自动缓存值，
				 * 仅仅当依赖关系改变时，才会重新执行，
				 * 所以getter函数不会每次执行
				 */
				counter: getCount
			}
		},
		directives: {
			testdv: {
				bind: function(){
					console.log('binding..........')
				},
				update: function(args){
					console.log('directives', args)
				}
			}
		},
		filters: {
			reverse: function(value, ...args){
				console.log(value, args)
				return value.split('').reverse().join(',');
			}
		}
	}
</script>

<template>
	<div>
		<h3 v-testdv.literal="ifConsole">Count is {{ counter.count }}</h3>
		<h2>{{filtersValue | reverse 'before' 'after'}}</h2>
	</div>
</template>