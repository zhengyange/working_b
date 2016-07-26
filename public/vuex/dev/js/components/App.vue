<script type="text/javascript">
	import Display from './Display.vue';
	import Increment from './Increment.vue';
	//引入store
	import store from '../vuex/store.js';

	export default {
		el: '#app',
		components: {
			Display: Display,
			Increment: Increment
		},
		store: store	//向所有的子组件注入store,也可以通过this.$store获得
	}
</script>

<template>
	<div>
		<Display></Display>
		<Increment></Increment>
	</div>
</template>