<script type="text/javascript">
	export default {
		data: function(){
			return {
				textTest: '内容初始化'
			}
		},
		activate: function(done){
			var that = this;
			setTimeout(function(){
				that.textTest = '异步加载进来的';
				done();
			}, 2000)
		}
	}
</script>

<template>
	<h1>
		I am a alive-component

	</h1>
	<p>{{textTest}}</p>
</template>