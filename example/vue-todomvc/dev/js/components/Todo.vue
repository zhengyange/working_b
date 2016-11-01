<script type="text/javascript">
	import {
		toggleTodo,
		editTodo,
		deleteTodo
	} from '../vuex/actions.js';
	export default {
		props: ['todo', 'KI'],
		data: function(){
			return {
				editing: false
			}
		},
		vuex: {
			actions: {
				toggleTodo,
				editTodo, 
				deleteTodo
			}
		},
		methods: {
			handleDbclick: function(){
				this.editing = true;
			},
			doneEdit: function(e){
				const value = e.target.value.trim();
				//为空，则为删除操作
				if(!value){

					return false;
				}
				//编辑操作
				if(this.editing){
					this.editTodo(this.todo, value)
					this.editing = false
				}
			},
			cancelEdit: function(e){
				e.target.value = this.todo.text;
				this.editing = false;
			}
		},
		directives: {
			focus: function(){
				let that = this;
				if(this.el.value){
					this.vm.$nextTick(function(){
						that.el.focus();
					})
				}
			}
		}
	}
</script>

<template>
	<li class="todo" :class="{completed: todo.done, editing: editing}">
        <div class="view">
          <input class="toggle"
            type="checkbox"
            :checked="todo.done"
            @change="toggleTodo(todo)">
          <label v-text="todo.text" @dblclick="handleDbclick"></label>
          <button class="destroy" @click="deleteTodo(KI)"></button>
        </div>
        <input class="edit"
        	v-show="editing"
        	v-focus="editing"
			:value="todo.text"
			@keyup.enter="doneEdit"
			@keyup.esc="cancelEdit"
			@blur="doneEdit"
        >
    </li>
</template>

