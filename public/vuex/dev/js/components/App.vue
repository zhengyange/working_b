<script type="text/javascript">
	import Display from './Display.vue';
	import Increment from './Increment.vue';
	//引入store
	import store from '../vuex/store.js';

	export default {
		el: '#app',
		data: function(){
			return {
				message: '<span>Hello Vue.js</span>',
				todos: [
					{text: 'Learn JavaScript'},
					{text: 'Learn Vue.js'},
					{text: 'Build Something Awesome'}
				],
				newTodo: ''
			}
		},
		computed: {
			message_b: function(){
				return this.message.toUpperCase();
			}
		},
		methods: {
			reverseMessage: function(){
				this.message = this.message.split('').reverse().join('');
			},
			removeTodo: function(index){
				this.todos.splice(index, 1);
			},
			addTodo: function(){
				var text = this.newTodo.trim();
				if(text){
					this.todos.push({text: text});
					this.newTodo = '';
				}
			}
		},
		components: {
			Display: Display,
			Increment: Increment
		},
		store: store	//向所有的子组件注入store,也可以通过this.$store获得
	}
</script>

<template>
	<div>
		<h3>{{message}}{{message_b}}</h3>
		<input type="text" v-model="message">
		<input type="text" v-model="newTodo" @keyup.enter="addTodo">
		<ul>
			<li v-for="todo in todos">
				<span>{{todo.text}}</span>
				<button @click="removeTodo($index)">X</button>
			</li>
		</ul>
		<button v-on:click="reverseMessage">Reverse Message</button>
		<Display></Display>
		<Increment></Increment>
	</div>
</template>