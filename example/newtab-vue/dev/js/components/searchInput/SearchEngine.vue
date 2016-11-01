<script type="text/javascript">
	export default {
		props: ['engines']
	}
</script>
<template>
	<div class="search-engine">
		<div class="search-engine-item" v-for="engine of engines">{{engine.title}}</div>
	</div>
</template>