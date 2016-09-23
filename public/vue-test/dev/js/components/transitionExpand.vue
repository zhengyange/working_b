<script type="text/javascript">
	
	export default {
		// replace: false
	}
</script>
<template>
	<h3>transition-expand</h3>
	<slot name="one"></slot>
	<slot>
		如果父组件没有分发内容，则显示你.......
	</slot>
	<slot name="two"></slot>
</template>