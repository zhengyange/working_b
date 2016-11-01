<script type="text/javascript">
	import './weatherSlide.css';
	import { initData } from './weatherActions.js';
	const weekly = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

	export default {
		data: function(){
			return {
				weekly: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
			}
		},
		activate: function(done){
			this.pageInit(done)
		},
		created: function(){
			// this.pageInit();
		},
		vuex: {
			getters: {
				wData: state => state.weatherStore.data
			},
			actions: {
				pageInit: initData
			}
		}	
	}
</script>
<template>
	<div id="weatherSlide" class="Slide">
		<div class="slideTitle cf" style="background-color:transparent;">
			<div class="topMenu fl" style="">天气</div>
		</div>
		<div id="weatherSlideBigBox" class="SlideBigBox">
			<div id="weatherContain">
				<div id="rightCityNameOut">
					<span id="rightCityName"> | {{weekly[new Date().getDay()]}}</span>
					<span id="ChangeCity"><img src="../../../../htmlImg/location.png"></span>
				</div>
				<div id="rightWeatherImg">
					<img draggable="false" src="../../../../htmlImg/weather.png" id="weatherIconNow" style="width:150px;margin-bottom: 8px; margin-top: -5px;">
					<div>
						<div id="weatherDesc"></div>
						<div id="rightTemp">
							<div class="rightTemp" id="temp1">
								<span id="weatherTempMin"></span>
								<span>{{wData.daily_forecast && wData.daily_forecast[0].tmp.min}}°</span>
							</div>
							<div class="rightTemp" id="less"></div>
							<div class="rightTemp" id="temp2">
								<span id="weatherTempNow"></span>
								<span>{{wData.now && wData.now.tmp}}°</span>
							</div>
							<div class="rightTemp" id="less"></div>
							<div class="rightTemp" id="temp3">
								<span id="weatherTempMax"></span>
								<span>{{wData.daily_forecast && wData.daily_forecast[0].tmp.max}}°</span>
							</div>
							<div style="clear:both;"></div>
						</div>
						<div id="rightDesc"><div class="weatherother" id="humidity"><div class="descname" i18n="Humidity">湿度</div><div class="weadesc"><span id="HumidityData">{{wData.now && wData.now.hum}}</span>%</div></div><div class="weatherother" id="wind"><div class="descname" i18n="Wind">风力</div><div class="weadesc"><span id="WindData">{{wData.now && wData.now.wind.deg}}</span> m/s</div></div><div class="weatherother" id="pressure"><div class="descname" i18n="Pressure">压力</div><div class="weadesc"><span id="PressureOrPM">{{wData.now && wData.now.pres}}</span> <span>hpa</span></div></div><div style="clear:both;"></div></div>

						<div class="weatherfuture" v-for="(index, item) in wData.daily_forecast">
							<div class="weatherDate" i18n="Tomorrow">{{weekly[index]}}</div>
							<div class="rightWeatherIcon">
								<!-- <img draggable="false" src="http://img.infinitynewtab.com/weatherIcon/na.png" id="WeatherIcon2"> -->
								{{item.cond.txt_d}}
							</div>
							<div class="rightWeatherTemp" id="WeatherTemp2">{{item.tmp.min}}~{{item.tmp.max}}</div>
							<div style="clear:both;"></div>
						</div>						
						<div style="clear:both;height:10px;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	#weatherSlide {
	    background: #60DAF1;
	}
</style>