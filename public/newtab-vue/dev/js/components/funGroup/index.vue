<script type="text/javascript">
	import TheIcon from './TheIcon.vue';
	export default {
		data: function(){
			return {
				theIcons: [
					{id: 'weather', title: '正在定位...', img: '../../../htmlImg/weather.png'},
					{id: 'todos', title: '待办事项', img: '../../../htmlImg/todo.png'},
					{id: 'extensions', title: '应用', img: '../../../htmlImg/app.png'},
					{id: 'notepad', title: '笔记与创意', img: '../../../htmlImg/note.png'},
					{id: 'bookmarks', title: '书签', img: '../../../htmlImg/bookmarks.png'},
					{id: 'history', title: '历史记录', img: '../../../htmlImg/history.png'},
					{id: 'jd', title: '京东商城', img: '../../../htmlImg/jd.png'},
					{id: 'setting', title: '设置', img: '../../../htmlImg/setting.png'}
				]	
			}
		},
		components: {
			TheIcon
		},
		methods: {
			
		}
	}
</script>

<template>
	<div class="group">
		<the-icon v-for="theIcon in theIcons" 
			:the-icon="theIcon"
		>			
		</the-icon>
		
	</div>
</template>
<style lang="sass">
	.group{width: 1010px; height: 410px;margin: 30px 0;}


</style>