<script>
export default {
  data () {
    return {
      authenticating: false
    }
  },
  ready(){
    console.log(111111111)
  }
}
</script>

<template>
  <div>
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <h1>App Header</h1>
    <a v-link="{ path: '/inbox/message/123' }">inbox</a>
    <a v-link="{ path: '/about' }">about</a>
    <a v-link="{ path: '/user/1234/profile/what' }">user</a>
    <a v-link="{ path: '/forbidden' }">forbidden</a>
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<style lang="sass">
.view {
  transition: all .5s ease;
}
.test-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.test-leave {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.v-link-active {
  color: red;
}
[v-cloak] {
  display: none;
}
</style>
