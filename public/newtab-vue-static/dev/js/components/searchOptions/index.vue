<script type="text/javascript">
	import searchoption from './Option.vue';
	export default {
		data: function(){
			return {
				options: [{title:'网页'}, {title: '图片'}, {title: '新闻'}, {title: '视频'}, {title: '音乐'}, {title: '微信'}]
			}
		},
		components: {
			searchoption
		}
	}
</script>

<template>
	<ul class="search-option">
		<searchoption v-for="option in options" :option="option">
			
		</searchoption>
	</ul>
</template>
<style lang="sass">
	$fff: #fff;
	$red: #e74c3c;
	.search-option{font-size:1.8rem;color: $fff;
		li{display: inline-block;width: 12%;}
		li:hover{color: $red; cursor:pointer;}
	}
</style>