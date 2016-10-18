<script>
    import store from './vuex/store.js';
    import { mapState } from 'vuex';

    //es6
    export default {
        store,
        data () {
            return {
            }
        },
        methods: {
            increment(){
                this.count++;
            }
        },
        computed: {
            ...mapState({
                count: state => state.count
            })
        },
        methods: {
            increment(){
                store.commit('increment');
            },
            decrement(){
                store.commit('decrement');
            }
        }
    }
</script>
<template>
    <div>
        <div>Click: {{ count }}</div>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
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
</style>