<script>
    import store from './store.js';
    import {increment, decrement, incrementIfOdd, incrementAsync} from './actions.js';

    //es6
    export default {
        el:"#app",
        data () {
            return {
                name:"guowenfh",
                age:"2q1222222222222"
            }
        },
        store: store,
        vuex: {
            getters: {
              count: state => state.count
            },
            actions: {
                increment,
                decrement,
                incrementIfOdd,
                incrementAsync
            }
        }
    }
</script>
<template>
    <div>
        Clicked: {{ count }} times
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>
<style lang="sass">
    
</style>