<script type="text/javascript">
	import './notepadSlide.css';
	export default {
		data: function(){
			return {
				isShowOld: false
			}
		},
		methods: {
			toggleMenuShow: function(){
				this.isShowOld = !this.isShowOld;
			}
		}
	}
</script>
<template>
	<div id="nodepadSlide" class="Slide">
		<div class="slideTitle cf" style="background-color:#F1C40F;">
			<div class="topMenu fl" in="todosSlide" with="todos0" style="">笔记与创意</div>
		</div>
		<div id="notepadSlideBigBox" class="SlideBigBox">
			<div id="notesContent">
				<div id="notesOption">
					<img id="notesList" close="true" src="../../../../htmlImg/list.png" style="margin-left: 25px;"
						@click="toggleMenuShow"
						:class="{notesMenuSlide: isShowOld, notesMenuSlideIn: !isShowOld}"
					> 
					<img id="notesAdd" src="../../../../htmlImg/plus.png" class="notesMenuSlideIn"
						:class="{notesMenuSlide: isShowOld, notesMenuSlideIn: !isShowOld}"
					>
				</div>
				<div :class="{notesMenuSlide: isShowOld, notesMenuSlideIn: !isShowOld}" class="editable" menu="7" id="addNotesTitle" type="search" contenteditable="true" style="width: 348px; left: 0px;">		1、活动模板页，商品列表标题优化，已上线
					<div>2、全球购，解决vip图标显示问题，添加返回顶部按钮</div>
					<div>3、hotdeal，更改相关UI无数据状态下的显示问题</div>
				</div>
			</div>
			<div class="notesMenu " :class="{notesMenuSlide: isShowOld, notesMenuSlideIn: !isShowOld}">
				<div class="notesMenuItem" style="">
					<span class="menuTitle">新记事</span>
					<img class="notesDelete" src="../../../../htmlImg/remove.png">
				</div>
				<div class="notesMenuItem">
					<span class="menuTitle">1、采集上架分页功能完成2、对商品价格及商品、增加sku后输</span>
					<img class="notesDelete" src="../../../../htmlImg/remove.png">
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	.notesMenuItem:hover .notesDelete{display: inline;}
</style>