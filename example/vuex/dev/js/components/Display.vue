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
				filtersValue: 'shanghai liale!',
				isRed: true,
				checkedNames: [],
				picked: '',
				query: '',
				list: [
					{msg: 'Bruce Lee'},
					{msg: 'Jackie Chan'},
					{msg: 'Chunk Norris'},
					{msg: 'Jet Li'},
					{msg: 'Kung Fury'},
					{msg: 'Bruce Lee'}
				]
			}
		},
		props: ['testProp'],
		methods: {
			changeColor: function(){
				this.isRed = !this.isRed;
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
		<h3 v-bind:class="{'class-red': isRed, 'class-green': !isRed}">Count is {{ counter.count }}</h3>
		<div v-show="isRed" transition="bounce">
			Look at me!
		</div>
		<br />
		<h1 v-show="isRed" transition="expand">
			Count要显示了
			<p>这是副标题</p>
		</h1>
		<h2 v-else transition="expand">这里是else的显示</h2>
		<button @click="changeColor">ChangeColor</button>
		<br />
		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames">
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		<label for="mike">Mike</label>
		<br>
		<span>Checked names: {{ checkedNames | json }}</span>
		<br>
		<input type="radio" id="one" value="One" v-model="picked">
		<label for="one">One</label>
		<br>
		<input type="radio" id="two" value="Two" v-model="picked">
		<label for="two">Two</label>
		<br>
		<span>Picked: {{ picked }}</span>
		<div id="demo">
			<input type="text" v-model="query">
			<ul>
		        <li v-for="item in list | filterBy query"
		            transition="staggered"
		            stagger="100">
		          {{item.msg}}
		         </li>
		    </ul>
		</div>
	</div>
</template>

<style lang="sass">
	.class-red{color: red;}
	.class-green{color: green;}

	/* 动画效果 */
	.expand-transition{
		transition: all .3s ease;
		height: 30px;
		padding: 10px;
		background-color: #eee;
		overflow: hidden;
	}
	.expand-enter, .expand-leave{
		height: 0;
		padding: 0 10px;
		opacity: 0;
	}
	.bounce-transition{
		display: inline-block;
	}
	.bounce-enter{
		animation: bounce-in .5s;
	}
	.bounce-leave{
		animation: bounce-out .5s;
	}

	@keyframes bounce-in{
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes bounce-out{
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(0);
		}
	}
	ul {
	    padding-left: 0;
	    font-family: Helvetica, Arial, sans-serif;
	}
	.staggered-transition {
	    transition: all .5s ease;
	    overflow: hidden;
	    margin: 0;
	    height: 20px;
	}
	.staggered-enter, .staggered-leave {
	    opacity: 0;
	    height: 0;
	}

</style>