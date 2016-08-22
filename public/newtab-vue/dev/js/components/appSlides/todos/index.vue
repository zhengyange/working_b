<script type="text/javascript">
	import './todosSlide.css';
	import { 
		addTodo, 
		toggleTodoDone, 
		clearTodoDone,
		getTodos 
	} from './todosActions.js';

	export default {
		data: function(){
			return {
				isActive: true,
				todotext: ''
			}
		},
        activate: function(done){
            console.log(1111111111);
            done();
        },
        methods: {
        	toggleTodoType: function(todotype){
        		if(todotype === 'notdone'){
        			this.isActive = true;
        		}

        		if(todotype === 'havedone'){
        			this.isActive = false;
        		}
        	},
        	handleAddTodo: function(){
        		this.addTodo(this.todotext);
        		this.todotext = '';
        	}
        }, 
        created: function(){
        	this.getTodos();
        },
        ready: function(){

        },
        computed: {
        	undoneTodos: function(){
        		return this.todos.filter(function(todo, index) {
        			return !todo.done
        		}).reverse();
        	},
        	doneTodos: function(){
        		return  this.todos.filter((todo, index) => {
        			return todo.done
        		}).reverse();
        	}
        },       
		vuex: {
			getters: {
				todos: state => state.todosStore.todos
			},
			actions: {
				addTodo,
				toggleTodoDone,
				clearTodoDone,
				getTodos
			}
		}
	}
</script>
<template>
	<div id="todosSlide" class="Slide">
		<div class="slideTitle cf" style="background-color:#2ECC71;">
			<div class="topMenu fl" in="todosSlide" with="todos0" style="">待办事项</div>
		</div>
		<div id="todosSlideBigBox" class="SlideBigBox">
			<div id="todoTop">
				<input type="search" id="addTodos" i18n-placeholder="whatNext" class="inputMargin todoInput" placeholder="接下来做点什么？"
					v-model="todotext"
					@keyup.enter="handleAddTodo"
				>
				<div id="todoType">
					<div class="todotype" id="notdone" i18n="Todo"
						:class="{show: isActive}"
						@click="toggleTodoType('notdone')"
					>待办</div>
					<div class="todotype" id="havedone" i18n="todoDone"
						:class="{show: !isActive}"
						@click="toggleTodoType('havedone')"
					>完成</div>
				</div>
				<div id="cleardone" i18n="ClearAllDones" 
					:class="{show: !isActive}"
					@click="clearTodoDone">
					清除完成事项
				</div>
			</div>
			<div id="todosOut"  :class="{showDone: !isActive}">
				<div id="contentOut">
					<div id="todoContent" class="todosContent" :class="{show: isActive}">
						<div class="labelOut" v-for="todo in undoneTodos">
							<label class="checkLabel todoLabel checktodo todoFadeIn"
								@click="toggleTodoDone(todo.id, true)"
							>
								<input type="checkbox" class="checkbox">
								{{todo.text}}
							</label>
							<div class="toTop"></div>
						</div>
						
					</div>
					<div id="doneContent" class="todosContent" :class="{show: !isActive}">
						<div class="labelOut" v-for="todo in doneTodos">
							<label class="checkLabel todoLabel checkdone"
								@click="toggleTodoDone(todo.id, false)"
							>
								<input type="checkbox" checked="checked" class="checkbox">
								{{todo.text}}
							</label>
							<div class="todoDelete" style="display: none;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	.labelOut:hover .checkbox{background-position: 0 22px;}
	.labelOut:not(:first-child):hover .toTop{display:block;}
	.todotype.show{color:rgb(46, 204, 113);}
	.todosContent{display: none;}
	.todosContent.show{display: block;}
	.todoType:hover{-webkit-filter:brightness(1.05)}
	.checkLabel{width: 300px;}
	#cleardone.show{display: block;}
	#todosOut.showDone{padding-top: 145px;}
</style>