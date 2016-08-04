<script type="text/javascript">
	import TheIcon from './TheIcon.vue';
	export default {
		data: function(){
			return {
				theIcons: [
					{id: 'weather', title: '正在定位...', img: metadata.host+'/htmlImg/weather.png'},
					{id: 'todos', title: '待办事项', img: metadata.host+'/htmlImg/todo.png'},
					{id: 'extensions', title: '应用', img: metadata.host+'/htmlImg/app.png'},
					{id: 'notepad', title: '笔记与创意', img: metadata.host+'/htmlImg/note.png'},
					{id: 'bookmarks', title: '书签', img: metadata.host+'/htmlImg/bookmarks.png'},
					{id: 'history', title: '历史记录', img: metadata.host+'/htmlImg/history.png'},
					{id: 'jd', title: '京东商城', img: metadata.host+'/htmlImg/jd.png'},
					{id: 'setting', title: '设置', img: metadata.host+'/htmlImg/setting.png'}
				]	
			}
		},
		props: ['showDeleteIcon'],
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
			:show-delete-icon="showDeleteIcon"
		>			
		</the-icon>
		
	</div>
</template>
<style lang="sass">
	.group{width: 1010px; height: 410px;margin: 30px 0;}


</style>