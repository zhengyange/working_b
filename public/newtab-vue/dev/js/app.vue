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

    //es6
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
        data () {
            return {
                showRightBar: false,
                weatherShow: false,
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
                console.log(slide)
                this.showRightBar = !this.showRightBar;
                this.currentSlide = slide;
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="main-out">
            <div class="search-out">
                <search-options></search-options>
                <search-input></search-input>
            </div>
            <div class="main-all">
                <fun-group 
                    @change-slide="handleShowRightBar"
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
        <div class="addButton" :class="{addButtonToClose: showRightBar}" @click="handleShowRightBar"></div> 
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
    .container{ width: 100%;height:100%; background: url('../img/bg.jpg') no-repeat; background-size: cover;background-position:center center;zoom: 0;}
    .main-out{position:relative; width: 1010px; height: 700px; z-index: 10; overflow: hidden;margin: 0 auto; text-align: center;padding-top:10%;zoom: 0.85;}
    .search-out{width: 560px; height: 60px; margin: 30px auto 0;}
    .main-all{width: 1010px; height: 410px;overflow: hidden;margin-top: 40px;}
    .addButton{top: 20px;width: 38px;height: 38px;border-radius: 21px;cursor: pointer;position: absolute; right: 20px;z-index: 1000;background: #E74C3C url(../img/add.png);background-size: 100%;opacity: 1;box-shadow: #e74c3c 0 0 10px;-webkit-transform: rotate(0);-webkit-transition: all ease-out .35s;border: none;}
    .addButton:hover{-webkit-filter: brightness(1.2);}
    .addButtonToClose{-webkit-transform: rotate(225deg);}
    .main-bottom{height: 26px; text-align: center;}
    .point-out{width: 80px; height: 24px; margin: 4px auto auto auto;}
    .point{width: 20px; height: 20px; margin: 0 10px; background-color: rgba(200, 200, 200, .5); border-radius: 12px; cursor: pointer;}
    .point-current{background-color: rgba(231, 76, 60, 0.6);}
    .Slide {position: absolute;top: 0;right: -350px; width: 350px;height: 100%;transition: all .35s ease;background-color: #fdfdf5;z-index: 95;box-shadow: grey 0 0 0;  overflow: hidden;}
    .slideTitle {font-size: 22px;width: 100%;height: 75px;top: 0;left: 0;background-color: #2ECC71;color: #fdfdfd;z-index: 10;padding-left: 25px;padding-top: 20px;position: absolute;}
    .SlideBigBox { width: 350px;height: 100%;}
    .topMenu { margin-right: 30px;padding-bottom: 5px;color: #fdfdfd;font-size: 22px;cursor: pointer;}
    .slideout-transition{transform: translate(-350px);box-shadow: grey 0 0 12px;}
    .slideout-enter, .slideout-leave{transform: translate(0px); box-shadow: grey 0 0 0;}
</style>