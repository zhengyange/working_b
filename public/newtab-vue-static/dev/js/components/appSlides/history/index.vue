<script type="text/javascript">
	import './history.css';
	export default {

	}
</script>
<template>
	<div id="historySlide" class="Slide">
		<div class="slideTitle cf" style="background-color:#9B59B6;">
			<div class="topMenu fl" in="todosSlide" with="todos0" style="">历史记录</div>
		</div>
		<div id="historySlideBigBox" class="SlideBigBox">
			<div id="historySearch">
				<input type="search" id="searchhistory" class="addInput" i18n-placeholder="searchhistory" placeholder="搜索历史记录">
				<div id="clearAllHistory" i18n="ClearAllBrowsingHistory">清空历史记录</div>
			</div>
			<div id="historyContain">
				<div class="historyItem">
					<img class="historyIcon" src="../../../../htmlImg/app.png">
					<div class="historyName" url="http://cn.vuejs.org/guide/list.html">列表渲染 - vue.js</div>
					<div class="historyDelete" title="列表渲染 - vue.js" url="http://cn.vuejs.org/guide/list.html"></div>
				</div>
				<div class="historyItem">
					<img class="historyIcon" src="../../../../htmlImg/app.png">
					<div class="historyName" url="http://cn.vuejs.org/guide/list.html">列表渲染 - vue.js</div>
					<div class="historyDelete" title="列表渲染 - vue.js" url="http://cn.vuejs.org/guide/list.html"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	
</style>