<script type="text/javascript">
	import './todosSlide.css';
	export default {
		
        activate: function(done){
            console.log(1111111111);
            done();
        },
	}
</script>
<template>
	<div id="todosSlide" class="Slide">
		<div class="slideTitle cf" style="background-color:#2ECC71;">
			<div class="topMenu fl" in="todosSlide" with="todos0" style="">待办事项</div>
		</div>
	</div>
</template>
<style lang="sass">
	
</style>