<script type="text/javascript">
	import XHeader from './XHeader.vue';
	import SlideMenu from './SlideMenu.vue';


	export default {
		components: {
			XHeader,
			SlideMenu,
		},
		watch: {
			'$route': function(to, from){
				console.log(to.path, from.path)
			}
		}
		
	}
</script>
<template>
	<div class="home-wrap">
		<x-header></x-header>
		<slide-menu></slide-menu>
		<div class="router-wrap">
			<transition name="fade" mode="out-in">
				<router-view></router-view>	
			</transition>
		</div>	
	</div>
</template>
<style lang="sass" scoped>
	.home-wrap{
		height: 100%;
	}
	
	.router-wrap{
		position: absolute;
		top: 60px;
		left: 17%;
		width: 83.3333%;
		height: calc(100% - 60px);
		min-height: calc(100% - 60px);
		overflow: auto;
		background-color: green;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .3s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}

</style>