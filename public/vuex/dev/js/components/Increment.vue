<script type="text/javascript">
	//引入action，经button上触发
	import { incrementCounter, decrementCounter } from '../vuex/actions.js';
	export default {
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
	</div>
</template>