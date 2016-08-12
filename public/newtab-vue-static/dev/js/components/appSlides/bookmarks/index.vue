<script type="text/javascript">
	import './bookmarks.css';
	export default {
		data: function(){
			return {
				currentMark: 0,
				bookMarks: [
					{title: '书签栏'},
					{title: '常用'},
					{title: 'React'},
					{title: '工具'}
				]
			}
		},
		methods: {
			changeSelected(index){
				this.currentMark = index;
			}
		}
	}
</script>
<template>
	<div id="bookmarksSlide" class="Slide">
		<div class="slideTitle cf" style="background-color:#3498DB;">
			<div class="topMenu fl" in="todosSlide" with="todos0" style="">书签</div>
		</div>
		<div id="bookmarksSlideBigBox" class="SlideBigBox">
			<div id="bookmarkSearch">
				<input type="search" id="searchBookmarks" i18n-placeholder="searchBookmarks" placeholder="搜索书签">
			</div>
			<div id="allBookmark">
				<div id="bookmarksLeft">
					<div class="bookmarksFolders" id="searchFolder" bookmarkfolderid="1">搜索</div>
					<div class="bookmarksFolders" v-for="mark in bookMarks" title="{{mark.title}}" bookmarkfolderid="{{$index}}"
						:class="{selected: currentMark === $index}"
						@click="changeSelected($index)"
					>
						{{mark.title}}
					</div>
				</div>
				<div id="bookmarksRight">
					<div class="bookmarksItem cf" url="http://jenkins.stage.com/" title="B5G-DNS_172.16.111.11 172.16.11.16 [Jenkins]">
						<img src="../../../../htmlImg/jd.png" height="160" width="160" class="bookmarksIcon">
						<div class="bookmarksName">B5G-DNS_172.16.111.11 172.16.11.16 [Jenkins]</div>
					</div>
					<div class="bookmarksItem cf" url="http://gitlab.izene.com/bwm-front-projects/b5m-static-web" title="bwm-front-projects / b5m-static-web | GitLab">
						<img src="../../../../htmlImg/jd.png" class="bookmarksIcon">
						<div class="bookmarksName">bwm-front-projects / b5m-static-web | GitLab</div>
					</div>
				</div>
			</div>			
		</div>

	</div>
</template>
<style lang="sass">
	
</style>