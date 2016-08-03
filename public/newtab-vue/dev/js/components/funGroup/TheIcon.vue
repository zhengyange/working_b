<script type="text/javascript">
	export default {
        props: ['theIcon'],
        computed: {
            styleData: function(){
                return {
                    backgroundColor: '#7adaff',
                    backgroundImage: 'url('+this.theIcon.img+')'
                }
            }
        },
        methods: {
            dispatchChangeSlide(slide){
                this.$dispatch('change-slide', slide);
            }
        }
	}
</script>

<template>
	<div class="icon theIcon2x5 fl">
		<div class="iconIn">
			<div class="iconInIn" 
                v-bind:style="styleData"
                :data-id="theIcon.id"
            >
                         
            </div>
			<div class="notiNum" style="display: none;"></div>
			<img draggable="false" class="deleteico" src="../../../img/remove.png" style="display: none;">
        </div>
		<div draggable="false" class="iconName theIconName2x5 globalColor">{{theIcon.title}}</div>
	</div>
</template>
<style lang="sass">

.iconIn, .iconInIn {
    background-size: cover;
    border: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
}
.icon, .iconInIn, .sp-clear-display{
    background-position: center;
    background-repeat: no-repeat;
}
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
}
.theIconName2x5 {
    bottom: -40px;
    height: 20px;
    width: 100px;
    font-size: 16px;
}
.iconInIn {
    background-size: cover;
    border: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 50%;
}
.iconName{
    font-size: 16px;
    text-align: center;
}
.iconName {
    position: absolute;
    bottom: -30px;
    width: 100px;
    color: #fdfdfd;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.theIconName2x5 {
    bottom: -40px;
    height: 20px;
    width: 100px;
    font-size: 16px;
    color: #fdfdfd;
}

</style>