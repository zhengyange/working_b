<script type="text/javascript">
	export default {
		data: function(){
			return {
				isLoading: true
			}
		},
		watch: {
			'$route': function(from, to){
			}
		},
		mounted: function(){
			// setTimeout(() => {
			// 	this.$router.push('/')
			// }, 2000)07.bv	`-`
		},
		updated: function(){
			console.log(this.isLoading)
		},
		beforeRouteEnter: function(to, from ,next){
			next(vm => {
				// console.log(vm.isLoading)
				vm.isLoading = false;
			})
		}
	}
</script>
<template>

	<div>
		User is {{$route.params.id}}
		<router-view></router-view>
	</div>
</template>