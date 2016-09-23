<script type="text/javascript">
	export default {
		props: ['trProp'],
		methods: {
			tdOnClick: function(){
				this.$dispatch('child-msg', 'from child componetn');
			}
		},
		activate: function(done){
			done();
		}
	}
</script>

<template>
	<tr>
		<td @click="tdOnClick">tdtdtd测试</td>
		<td>{{trProp}}</td>
	</tr>
</template>