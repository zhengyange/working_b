<script type="text/javascript">
	//引入action，经button上触发
	import { incrementCounter, decrementCounter } from '../vuex/actions.js';
	export default {
		methods: {
			updateParentMessage: function(){
				this.$dispatch('child-msg', '我来子组件！')
			}
		},
		vuex: {
			actions: {
				increment: incrementCounter,
				decrement: decrementCounter
			}
		}
	}
</script>

<template>
	<div>
		<button @click='increment(1)'>Increment +1</button>
		<button @click='decrement'>Decrement +1</button>
		<button @click="updateParentMessage">update the parent's message</button>
	</div>
</template>