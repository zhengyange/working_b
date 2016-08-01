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
    import searchInput from './components/searchInput'
    //es6
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"guowenfh",
                age:"2q1222222222222"
            }
        },
        components: {
            searchOptions,
            searchInput
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
        </div>
        
    </div>
</template>
<style lang="sass">
    .container{ width: 100%;height:100%; background: url('../img/bg.jpg') no-repeat; background-size: cover;background-position:center center;padding-top: 300px;}
    .main-out{position:relative; width: 1010px; height: 600px; z-index: 10; overflow: hidden;margin: 0 auto; text-align: center;}
    .search-out{width: 560px; height: 60px; margin: 30px auto 0;}
</style>