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
				<div id="cleardone" i18n="ClearAllDones" style="display: none;">清除完成事项</div>
			</div>
			<div id="todosOut" style="padding-top: 115px;">
				<div id="contentOut">
					<div id="todoContent" class="todosContent" style="display: block;">
						<div class="labelOut">
							<label class="checkLabel todoLabel checktodo todoFadeIn">
								<input type="checkbox" class="checkbox">2
							</label>
							<div class="toTop"></div>
						</div>
						<div class="labelOut">
							<label class="checkLabel todoLabel checktodo todoFadeIn">
								<input type="checkbox" class="checkbox">1
							</label>
							<div class="toTop"></div>
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
	.todoType:hover{-webkit-filter:brightness(1.05)}
</style>