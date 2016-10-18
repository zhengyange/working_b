<script>
    //es6
    export default {
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"guowenfh",
                age:"2q1222222222222",
                show: false,
                rawHtml: '<h3>I do not know his {{name}};</h3>',
                selected: 'bbb',
                items: [1,2,3,4,5,6,7,8,9],
                nextNum: 10

            }
        },
        methods: {
            handleShow: function(){
                this.show = !this.show;
            },
            randomIndex: function () {
              return Math.floor(Math.random() * this.items.length)
            },
            add: function () {
              this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            remove: function () {
              this.items.splice(this.randomIndex(), 1)
            },
        },
        //组件挂载完成
        mounted: function(){
            console.log('mounted')
        },
        beforeUpdate: function(){
            console.log('beforeUpdated')
        },
        updated: function(){
            console.log('updated')
        },
        filters: {
            capitalize: function(value, a, b){
                console.log(value, a, b)
                return value
            }
        }

    }
</script>
<template>
    <div id="example-1">
        <button @click="show = !show">
        Toggle render
        </button>
        <div>{{ name | capitalize(age, 'b')}}<div>
        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
        <div v-html="rawHtml"></div>
        <select v-model="selected">
          <option value="aaa">A</option>
          <option value="bbb">B</option>
          <option value="ccc">C</option>
        </select>
        <span>Selected: {{ selected }}</span>
        <div id="list-demo" class="demo">
          <button v-on:click="add">Add</button>
          <button v-on:click="remove">Remove</button>
          <transition-group name="list" tag="p">
            <span v-for="item in items" v-bind:key="item" class="list-item">
              {{ item }}
            </span>
          </transition-group>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    /*测试一下对sass的编译*/
    $qwe:#098;
    body{
        background-color: $qwe;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);
            opacity: 1;
        }
        h1:hover{
            height:100px;
        }

        h2{
            background-color: #d7d7d7;
            opacity: 1;
        }
    }
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-move{
    transition: transform 1s;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-leave-active{
    position: absolute;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}
</style>