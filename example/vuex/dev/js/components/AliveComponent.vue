<script type="text/javascript">
	import Home from './alive/Home.vue';
	import Posts from './alive/Posts.vue';
	// import Archive from './alive/Archive.vue';
	export default {
		data: function(){
			return {
				currentView: 'home'
			}
		},
		methods: {
			changeComponent: function(){
				this.currentView = 'posts';
			}
		},
		activate: function(done){
			console.log(1111111111);
			done();
		},
		components: {
			home: Home,
			posts: Posts,
			// archive: Archive,
			archive: function(resolve, reject){
				require(['./alive/Archive.vue'], resolve)
			}

		}
	}
</script>

<template>
	<div>
		<component 
			:is="currentView" 
			keep-alive
			transition="fade"
			transition-mode="out-in">
		</component>
		<input type="radio" v-model="currentView" value="home">Home   
		<input type="radio" v-model="currentView" value="posts">Posts   
		<input type="radio" v-model="currentView" value="archive">Archive
		<button @click="changeComponent">change the component</button>
	</div>
	
</template>

<style lang="sass">
	h1{
		padding: 20px;
		background-color: green;
	}
	.fade-transition{
		transition: opacity .3s ease;
	}
	.fade-enter, .fade-leave{
		opacity: 0;
	}
</style>