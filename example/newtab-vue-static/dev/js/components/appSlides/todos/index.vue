<script type="text/javascript">
	import './todosSlide.css';
	export default {
		data: function(){
			return {
				isActive: true
			}
		},
        activate: function(done){
            console.log(1111111111);
            done();
        },
        methods: {
        	toggleTodoType: function(todotype){
        		if(todotype === 'notdone'){
        			this.isActive = true;
        		}

        		if(todotype === 'havedone'){
        			this.isActive = false;
        		}
        	}
        }
	}
</script>
<template>
	<div id="todosSlide" class="Slide">
		<div class="slideTitle cf" style="background-color:#2ECC71;">
			<div class="topMenu fl" in="todosSlide" with="todos0" style="">待办事项</div>
		</div>
		<div id="todosSlideBigBox" class="SlideBigBox">
			<div id="todoTop">
				<input type="search" id="addTodos" i18n-placeholder="whatNext" class="inputMargin todoInput" placeholder="接下来做点什么？">
				<div id="todoType">
					<div class="todotype" id="notdone" i18n="Todo"
						:class="{show: isActive}"
						@click="toggleTodoType('notdone')"
					>待办</div>
					<div class="todotype" id="havedone" i18n="todoDone"
						:class="{show: !isActive}"
						@click="toggleTodoType('havedone')"
					>完成</div>
				</div>
				<div id="cleardone" i18n="ClearAllDones" :class="{show: !isActive}">清除完成事项</div>
			</div>
			<div id="todosOut"  :class="{showDone: !isActive}">
				<div id="contentOut">
					<div id="todoContent" class="todosContent" :class="{show: isActive}">
						<div class="labelOut">
							<label class="checkLabel todoLabel checktodo todoFadeIn">
								<input type="checkbox" class="checkbox">
								2222222222
							</label>
							<div class="toTop"></div>
						</div>
						<div class="labelOut">
							<label class="checkLabel todoLabel checktodo todoFadeIn">
								<input type="checkbox" class="checkbox">
								111111111111111
							</label>
							<div class="toTop"></div>
						</div>
					</div>
					<div id="doneContent" class="todosContent" :class="{show: !isActive}">
						<div class="labelOut">
							<label class="checkLabel todoLabel checkdone">
								<input type="checkbox" checked="checked" class="checkbox">
								右上角导航条和锚点
							</label>
							<div class="todoDelete" style="display: none;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	.labelOut:hover .checkbox{background-position: 0 22px;}
	.labelOut:not(:first-child):hover .toTop{display:block;}
	.todotype.show{color:rgb(46, 204, 113);}
	.todosContent{display: none;}
	.todosContent.show{display: block;}
	.todoType:hover{-webkit-filter:brightness(1.05)}
	.checkLabel{width: 300px;}
	#cleardone.show{display: block;}
	#todosOut.showDone{padding-top: 145px;}
</style>