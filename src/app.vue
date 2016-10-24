<script type="text/javascript">
	export default {
	
	}
</script>
<template>
	<div class="page">
		<router-view></router-view>	
	</div>
</template>
<style lang="sass">
	//根组件内，引入全局的css，不需要配置scoped
	@import './assets/scss/common.scss';
	.page{
		height: 100%;
	}
</style>
