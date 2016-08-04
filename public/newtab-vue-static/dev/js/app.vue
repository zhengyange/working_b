<script>
    /**
     * 引入公用基础scss样式
     *
     */
    import '../common/scss/common.scss'; 
    /**
     * 引入组件
     */
    import searchOptions from './components/searchOptions';
    import searchInput from './components/searchInput';
    import funGroup from './components/funGroup';

    import { addClickEvent } from './utils/dom-helper.js';

    //es6
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
        data: function () {
            return {
                showRightBar: false,
                weatherShow: false,
                showSearchEngines: false,
                showSearchResults: false,
                showDeleteIcon: false,
                currentSlide: ''
            }
        },
        components: {
            searchOptions,
            searchInput,
            funGroup,
            todos: function(resolve, reject){
                require(['./components/appSlides/todos'], resolve);
            },
            weather: function(resolve, reject){
                require(['./components/appSlides/weather'], resolve);
            },
            extensions: function(resolve, reject){
                require(['./components/appSlides/extensions'], resolve);
            },
            notepad: function(resolve, reject){
                require(['./components/appSlides/notepad'], resolve);
            },
            bookmarks: function(resolve, reject){
                require(['./components/appSlides/bookmarks'], resolve);
            },
            history: function(resolve, reject){
                require(['./components/appSlides/history'], resolve);
            },
            setting: function(resolve, reject){
                require(['./components/appSlides/setting'], resolve);
            }
        },
        methods: {
            handleShowRightBar(slide){

            },
            handleHideSearchEngines(msg){
                this.showSearchEngines = !this.showSearchEngines;
            },
            handleShowResults(){
                this.showSearchResults = true;
            },
            handleShowDelete(){
                this.showDeleteIcon = true;
            }
        },
        ready: function(){
            /**
             * 禁用鼠标右键菜单
             * 
             */
            document.oncontextmenu = function(e){
                return false;
            }
            /**
             * 问题：右侧slide详情的出现隐藏逻辑
             * 1. 只有点击特点的标签才会出现
             * 2. 点击同一个标签，则会出现隐藏切换
             * 3. 点击特定的标签外的元素，则都要进行隐藏
             * 4. 右上角“+”按钮，点击显示最后一次点击标签出现的slide，再次点击则关闭
             * 5. 为了操作方便，在此直接操作dom
             */
            const that = this;
            addClickEvent(document.querySelector('.main-out'), function(e){
                // that.showSearchEngines = false;
                const target = e.target;
                const storageSlide = localStorage.getItem('currentSlide');
                that.showSearchResults = false;
                if(that.showDeleteIcon){
                    that.showDeleteIcon = false;
                    return false;
                }

                if(!target.classList.contains('search-logo')){
                    that.showSearchEngines = false;
                }
                //点击正常的标签
                if(target.classList.contains('iconInIn')){
                    if(storageSlide === target.dataset.id && that.showRightBar){
                        return false;
                    }
                    that.showRightBar = true;
                    that.currentSlide = target.dataset.id;
                    //存储当前最近的slide
                    localStorage.setItem('currentSlide', that.currentSlide);
                    return false;
                }

                //否则隐藏
                that.showRightBar = false;
                that.currentSlide = '';
                
            });
            addClickEvent(document.querySelector('.addButton'), function(){
                that.showRightBar = !that.showRightBar;
                if(that.showRightBar){
                    that.currentSlide = 'setting';
                    localStorage.setItem('currentSlide', that.currentSlide);
                }else{
                    that.currentSlide = '';
                }
                return false;
            })
        }
    } 
    //171627222205
</script>
<template>
    <div class="container">
        <div class="main-out" :class="{'main-out-left': showRightBar}">
            <div class="search-out">
                <search-options></search-options>
                <search-input 
                    :show-search-results="showSearchResults"
                    :show-search-engines="showSearchEngines"
                    @toggle-engines="handleHideSearchEngines"
                    @show-results="handleShowResults"
                >
                </search-input>
            </div>
            <div class="main-all">
                <fun-group 
                   :show-delete-icon="showDeleteIcon" 
                   @show-delete="handleShowDelete"
                >
                </fun-group>
            </div>
            <div class="main-bottom">
                <div class="point-out cf">
                    <div class="point fl point-current"></div>
                    <div class="point fl"></div>
                </div>
            </div>
        </div>
        <div class="addButton" :class="{addButtonToClose: showRightBar}" data-id="changeSlideShow"></div> 
        <components 
            :is="currentSlide"
            keep-alive
            transition="slideout"
        >            
        </components>
    </div>
</template>
<style lang="sass">
    html, body{width: 100%; height: 100%;}
    .container{width: 100%;height:100%; background: url('../img/bg.jpg') no-repeat; background-size: cover;background-position:center center;zoom: 0;}
    .main-out{position:relative; width: 1010px; height: 100%; z-index: 10; overflow: hidden;margin: 0 auto; text-align: center;padding-top:10%;zoom: 0.85;transition: transform .35s ease;}
    .main-out-left{transform: translate(-175px);}
    .search-out{width: 560px; height: 60px; margin: 30px auto 0;}
    .main-all{width: 1010px; height: 410px;overflow: hidden;margin-top: 40px;}
    .addButton{top: 20px;width: 38px;height: 38px;border-radius: 21px;cursor: pointer;position: absolute; right: 20px;z-index: 1000;background: #E74C3C url(../img/add.png);background-size: 100%;opacity: 1;box-shadow: #e74c3c 0 0 10px;-webkit-transform: rotate(0);-webkit-transition: all ease-out .35s;border: none;}
    .addButton:hover{-webkit-filter: brightness(1.2);}
    .addButtonToClose{-webkit-transform: rotate(225deg);}
    .main-bottom{height: 26px; text-align: center;}
    .point-out{width: 80px; height: 24px; margin: 4px auto auto auto;}
    .point{width: 20px; height: 20px; margin: 0 10px; background-color: rgba(200, 200, 200, .5); border-radius: 12px; cursor: pointer;}
    .point-current{background-color: rgba(231, 76, 60, 0.6);}
    .Slide{padding-top: 75px; position: absolute;top: 0;right: -350px; width: 350px;height: 100%;transition: all .35s ease;background-color: #fdfdf5;z-index: 95;box-shadow: grey 0 0 0;  overflow: hidden;}
    .slideTitle {font-size: 22px;width: 100%;height: 75px;top: 0;left: 0;background-color: #2ECC71;color: #fdfdfd;z-index: 10;padding-left: 25px;padding-top: 20px;position: absolute;}
    .SlideBigBox { width: 350px;height: 100%;}
    .topMenu { margin-right: 30px;padding-bottom: 5px;color: #fdfdfd;font-size: 22px;cursor: pointer;}
    .slideout-transition{transform: translate(-350px);box-shadow: grey 0 0 12px;}
    .slideout-enter, .slideout-leave{transform: translate(0px); box-shadow: grey 0 0 0;}
    ::-webkit-scrollbar {width: 6px;background-color: transparent;}
    ::-webkit-scrollbar-thumb {background-color: rgba(52,73,94,.2);border-radius: 4px;}
    #appsSlideBigBox {overflow-y: scroll;overflow-x: hidden;}
    input[type=password], input[type=search] {
        padding: 0 10px;
        line-height: 32px;
        color: #555;
        font-size: 14px;
        margin: 0;
        outline: 0;
        font-family: "Segoe UI","Microsoft Yahei",Arial;
    }
    input[type=search] {
        border: 1px solid #ECF0F1;
        padding: 0 10px;
        line-height: 32px;
        color: #555;
        font-size: 14px;
        margin: 0;
        outline: 0;
        font-family: "Segoe UI","Microsoft Yahei",Arial;
    }
    input[type=search] {
        width: 250px;
        height: 32px;
        border: 1px solid #ECF0F1;
        border-radius: 30px;
    }
</style>