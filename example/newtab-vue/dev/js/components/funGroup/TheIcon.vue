<script type="text/javascript">
	export default {
        data: function(){
            return {
                isShowDelete: false
            }
        },

        props: ['theIcon', 'showDeleteIcon'],
        computed: {
            styleData: function(){
                return {
                    backgroundColor: '#7adaff',
                    backgroundImage: 'url('+this.theIcon.img+')'
                }
            }
        },
        methods: {
            dispatchChangeSlide(event){
                if(event.which != 3){
                    return false;
                }
                //显示删除功能
                // this.isShowDelete = true;
                this.$dispatch('show-delete');
            },
            dispatchDeleteApp(event){
                console.log(event)
            }
        }
	}
</script>

<template>
	<div class="icon theIcon2x5 fl" :class="{'icon-delete': showDeleteIcon}">
		<div class="iconIn">
			<div class="iconInIn" 
                v-bind:style="styleData"
                :data-id="theIcon.id"
                @mouseUp="dispatchChangeSlide($event)"
            >
                         
            </div>
			<div class="notiNum" style="display: none;"></div>
			<img draggable="false" class="deleteico" src="../../../img/remove.png">
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
.icon{
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
    // transition: all .35s ease;
    
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
    line-height: 20px;
    width: 100px;
    font-size: 16px;
    color: #fdfdfd;
}
.deleteico {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -10px;
    cursor: default;
    -webkit-transition: background-color .3s ease,box-shadow .3s ease;
    display: none;
    cursor: pointer;
}
.iconInIn:hover{
    -webkit-filter: brightness(1.08);
    animation: shadow 1s ease infinite;
}
.deleteico:hover{
    background-color: #fff;
}
.icon-delete{
    animation: rotate .2s ease infinite;
}
.icon-delete .deleteico{display: inline;}
@keyframes shadow{
    0%{
        box-shadow: #fff 0 0 0px;
    }
    50%{
        box-shadow: #fff 0 0 20px;
    }
    100%{
        box-shadow: #fff 0 0 30px;
    }
}
@keyframes rotate{
    0%{
        transform: rotate(-2deg);
    }
    100%{
        transform: rotate(2deg);
    }
}

</style>