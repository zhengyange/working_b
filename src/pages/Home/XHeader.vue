<script type="text/javascript">
	export default {
		methods: {
			handleselect(val){
				console.log(val)
			},			
		}
	}
</script>
<template>
	<el-menu theme="dark" default-active="1" mode="horizontal" @select="handleselect">
	  <el-menu-item index="1">处理中心</el-menu-item>
	  <el-submenu index="2">
	    <template slot="title">我的工作台</template>
	    <el-menu-item index="2-1">选项1</el-menu-item>
	    <el-menu-item index="2-2">选项2</el-menu-item>
	    <el-menu-item index="2-3">选项3</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="3">订单管理</el-menu-item>
	</el-menu>

</template>
<style lang="sass" scoped>
</style>