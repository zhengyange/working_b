<script type="text/javascript">
	export default {
		methods: {
			
			handleopen(val){
				console.log(val)
			},
			handleclose(val){
				console.log(val)
			}
		}
	}
</script>
<template>
    <el-menu default-active="login" class="slide-menu" @open="handleopen" @close="handleclose" :router="true">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="logout">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="login"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="rwrap"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </template>
  <style lang="sass" scoped>
    .slide-menu{
      position: absolute;
      top: 60px;
      left: 0;
      width: 17%;
      height: calc(100% - 60px);
      min-height: calc(100% - 60px);
      overflow: auto;
      background-color: #F9FAFC;
    }

  </style>