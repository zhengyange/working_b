<script>
    import store from './vuex/store.js';
    import {increment, decrement, incrementIfOdd, incrementAsync} from './vuex/actions.js';
    // import {recentHistory} from './vuex/getters.js';
    import {recentHistory} from '.vuex/getters.js';

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
              count: state => state.count,
              recentHistory
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
        <div>
          <div>Recent History: {{recentHistory}}</div>
        </div>
    </div>
</template>
<style lang="sass">
    
</style>