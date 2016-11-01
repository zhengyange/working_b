<script>
export default {
  data () {
    return {
      authenticating: false,
      test: 'test'
    }
  }
}
</script>

<template>
  <div class="page">
      <h3>Route live</h3>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-link to="/user/wangbaoqiang/posts"> Get wanbaoxia</router-link>
        <router-link to="/user/lichengyin/profile"> Get lichengyin</router-link>
      </p>
      <transition name="fade">
        
        <router-view></router-view>
      </transition>

  </div>
</template>

<style lang="sass">
.router-link-active{
  color: green;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
[v-cloak] {
  display: none;
}
</style>
