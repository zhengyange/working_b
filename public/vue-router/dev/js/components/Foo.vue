<script type="text/javascript">
	export default {
		ready: function(){
			console.log(this.$route);
		},
		route: {
			data: function(transition){
				console.log(this.$loadingRouteData)
				// transition.next();
				return new Promise((resolve, reject) => {
					setTimeout(function(){
						resolve(true);
					}, 1000);
				})
			},
			activate: function(transition){
				// transition.next();
				return new Promise((resolve, reject) => {
					setTimeout(function(){
						resolve(true);
					}, 5000);
				})
			},
			deactivate: function(transition){
				transition.next();
			}
		}
	}
</script>
<template>
	<div class="foo">		
		<p>This is foo!</p>
		<p v-show="$loadingRouteData">This is $loadingRouteData</p>
		<p>
	        <!-- 使用指令 v-link 进行导航。 -->
	        <a v-link="{ path: '/foo/baz' }">Go to Baz</a>
	        <a v-link="{ path: '/foo/bar/wangchuyi' }">Go to Barrrrrrrrrrrr</a>
	      </p>
		<router-view>
			
		</router-view>
	</div>
</template>