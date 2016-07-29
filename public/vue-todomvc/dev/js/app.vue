<script type="text/javascript">
    import '../css/index.css';
    import store from './vuex/store.js';
    import {addTodo, toggleAll, clearCompleted} from './vuex/actions.js';
    import Todo from './components/Todo.vue';

    export default {
        el:"#app",
        data: function(){
            return {
                visibility: 'all'
            }
        },
        computed: {
            allChecked(){
                return this.todos.every((todo) => todo.done);
            },
            filteredTodos(){
                switch(this.visibility){
                    case 'all':
                        return this.todos;
                    case 'active':
                        return this.todos.filter(todo => !todo.done);
                    case 'completed':
                        return this.todos.filter(todo => todo.done);
                }
            },
            remaining(){
                return this.todos.filter(todo => !todo.done).length;
            }
        },
        methods: {
            tryAddTodo: function(e){
                console.log(e.target.value)
                let text = e.target.value;
                if(text.trim()){
                    this.addTodo(text)
                }
            },
            changeVisibility: function(visibility){
                this.visibility = visibility;
            }
        },
        filters: {
            pluralize: (v, params) => v === 1 ? params : (params + 's')
        },
        components: {
            Todo
        },
        store: store,
        vuex: {
            getters: {
                todos: state => state.todos
            },
            actions: {
                addTodo,
                toggleAll,
                clearCompleted
            }
        }
    }
</script>

<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" type="text" 
                autofocus="true"
                autocomplete="off" 
                placeholder="What needs to be done?"
                @keyup.enter="tryAddTodo">
        </header>
        <section class="main">
            <input class="toggle-all"
                type="checkbox"
                :checked="allChecked"
                @change="toggleAll(!allChecked)">
            <ul class="todo-list">
                <todo v-for="todo in filteredTodos" :todo="todo" :KI="$index"></todo>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">
                <strong>{{remaining}}</strong>
                {{ remaining | pluralize 'item' }} left
            </span>
            <ul class="filters">
                <li>
                    <a href="#/" @click="changeVisibility('all')" :class="{selected: visibility === 'all'}">all</a>
                </li>
                <li>
                    <a href="#/" @click="changeVisibility('active')" :class="{selected: visibility === 'active'}">active</a>
                </li>
                <li>
                    <a href="#/" @click="changeVisibility('completed')" :class="{selected: visibility === 'completed'}">completed</a>
                </li>
            </ul>
            <button class="clear-completed" 
                v-show="todos.length > remaining"
                @click="clearCompleted">
                Clear completed
            </button>
        </footer>
    </section>
</template>

<style lang="sass">
    
</style>