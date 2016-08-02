<script type="text/javascript">
	export default {

	}
</script>

<template>
	<div class="icon theIcon2x5" style="background: red;">
		<div class="iconIn">
			
			<div class="notiNum" style="display: none;"></div>
			<img draggable="false" class="deleteico" src="../../../img/remove.png" style="display: none;">
			<div draggable="false" class="iconName theIconName2x5 globalColor" style="color:#fdfdfd" >正在定位...</div>
		</div>
	</div>
</template>
<style lang="sass">
.icon {
    width: 100px;
    height: 100px;
    margin: 14px 46px 80px 54px;
    position: relative;
    background-size: 100%;
    cursor: pointer;
    color: #fdfdfd;
    text-align: center;
    line-height: .9;
    background-position: center;
    background-repeat: no-repeat;
}
.theIcon2x5 {
	margin: 14px 45px 80px 55px;
    width: 100px;
    height: 100px;
    font-size: 35px;
    border-radius: 50%;
}
.iconName {
    font-size: 16px;
    text-align: center;
    position: absolute;
    bottom: -30px;
    width: 100px;
    color: #fdfdfd;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 40px;
}
.theIconName2x5 {
    bottom: -40px;
    height: 20px;
    width: 100px;
    font-size: 16px;
}
	.iconInIn{background-position: center;background-repeat: no-repeat;}

</style>