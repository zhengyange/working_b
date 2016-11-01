<script type="text/javascript">
	import Display from './Display.vue';
	import Increment from './Increment.vue';
	import SlotComponent from './Slot.vue';
	import AliveComponent from './AliveComponent.vue';
	//引入store
	import store from '../vuex/store.js';

	export default {
		el: '#app',
		data: function(){
			return {
				message: 'Hello Vue.js',
				todos: [
					{text: 'Learn JavaScript'},
					{text: 'Learn Vue.js'},
					{text: 'Build Something Awesome'}
				],
				newTodo: '',
				object: {
					FirstName: 'John',
					LastName: 'Doe',
					Age: 30
				}
			}
		},
		computed: {
			message_b: function(){
				return this.message.toUpperCase();
			}
		},
		methods: {
			reverseMessage: function(event){
				this.message = this.message.split('').reverse().join('');
				console.log(this.$el.querySelector('h3').textContent)
				this.$nextTick(function(){
					console.log(this.$el.querySelector('h3').textContent)
					
				})
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
			},
			handleKeyup: function(event){
				console.log(event.target.value)
			},
			handleUpdate: function(msg){
				this.message = msg;
				console.log(this.$refs.inc.$el)
			}
		},
		created: function(){
			let that = this;
			// setTimeout(function(){
			// 	that.todos.splice(0, 1)
			// }, 1000);
		},
		events: {
			// 'child-msg': function(msg){
			// 	this.message = msg
			// }
		},
		components: {
			Display: Display,
			Increment: Increment,
			SlotComponent: SlotComponent,
			AliveComponent
		},
		store: store	//向所有的子组件注入store,也可以通过this.$store获得
	}
</script>

<template>
	<div>
		<ul>
			<li v-for="value in object">
				{{$key}}: {{value + '---' + $index}}
			</li>
		</ul>
		<h3>{{message}}<br/>{{message_b}}</h3>
		<!-- <input type="text" v-model="message" lazy> -->
		<input type="text" v-model="message" @keyup="handleKeyup($event) | debounce 500">
		<input type="text" v-model="newTodo" @keyup.enter="addTodo">
		<ul>
			<li v-for="todo in todos">
				<span>{{todo.text}}</span>
				<button @click="removeTodo($index)">X</button>
			</li>
		</ul>
		<button v-on:click="reverseMessage($event)">Reverse Message</button>
		<Display v-bind:test-prop="message_b"></Display>
		<Increment v-on:child-msg="handleUpdate" v-ref:inc></Increment>
		<slot-component>
			<p>分发内容</p>
			<p>分发内容</p>
		</slot-component>
		<alive-component>
		</alive-component>
	</div>
</template>