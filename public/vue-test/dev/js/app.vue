<script>
    //es6
    import transitionExpand from './components/transitionExpand.vue';
    // import trcomponent from './components/trcomponent.vue';
    import aliveComponent from './components/aliveComponent.vue';

    export default {
        
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"guowenfh",
                age:"2q1222222222222",
                newTodo: '',
                todos: [
                    {text: 'Add some todos'}
                ],
                toggle: 'init data',
                ta: 'toggle-a',
                tb: 'toggle-b',
                show: true,
                currentView: 'alive-component',
                showtr: false
            }
        },
        methods: {
            addTodo: function(){
                var text = this.newTodo.trim();
                if(text){
                    this.todos.unshift({text: text});
                    this.newTodo = '';
                }
            },
            removeTodo: function(index){
                this.todos.splice(index, 1);                   
            },
            handleChildMsg: function(msg){
                console.log(msg)
            }
        },
        transitions: {
            expand: {
              enter: function (el) {
                console.log('enter');
                el.textContent = 'enter'
              }
            }
        },
        components: {
            'transition-expand': transitionExpand,
            trcomponent: function(resolve){
                require(['./components/trcomponent.vue'], resolve);
            },
            'alive-component': aliveComponent
        },
        ready: function(){
            console.log(this.$children)
            console.log(this.$refs.profile)
            var that = this;
            setTimeout(function(){
                that.showtr = true;
            }, 3000)
        }
    }
</script>
<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
        <div>
            <input v-model="newTodo" v-on:keyup.enter="addTodo" />
            <ul>
                <li v-for="todo of todos">
                    <span>{{todo.text}}</span>
                    <button v-on:click="removeTodo($index)">X</button>
                </li>
            </ul>
        </div>
        <div>
            <input type="checkbox"
                v-model="toggle"
                v-bind:true-value="ta"
                v-bind:false-value="tb"
            >
            <p>{{toggle}}</p>
        </div>
        <div>
            <label for="change-show">
                <input type="checkbox" v-model="show">
                <span>show ppp</span>
            </label>
            <div v-if="show" transition="expand">hello</div>
        </div>
        <transition-expand v-ref:profile>
            <p slot="two">我是父组件来的分发内容</p>
            <p slot="one">This is some more original content</p> 
        </transition-expand>
        <table>
            <tbody>
                
            <tr is="trcomponent" tr-prop="test-prop" @child-msg="handleChildMsg" v-if="showtr"></tr>
            </tbody>
        </table>
        <component :is="currentView" keep-alive>
            
        </component>
    </div>
</template>
<style lang="sass">
    /*测试一下对sass的编译*/
    $qwe:#098;
    body{
        background-color: $qwe;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);
        }
        h1:hover{
            height:100px;
        }

        h2{
            background-color: #d7d7d7;
        }
    }
    /* 必需 */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>