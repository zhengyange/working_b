<script type="text/javascript">
	import './weatherSlide.css';
	export default {

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
					<span id="rightCityName"> | 星期三</span>
					<span id="ChangeCity"><img src="../../../../htmlImg/location.png"></span>
				</div>
				<div id="rightWeatherImg">
					<img draggable="false" src="../../../../htmlImg/weather.png" id="weatherIconNow" style="width:150px;margin-bottom: 8px; margin-top: -5px;">
					<div>
						<div id="weatherDesc"></div>
						<div id="rightTemp">
							<div class="rightTemp" id="temp1">
								<span id="weatherTempMin"></span>
								<span>°</span>
							</div>
							<div class="rightTemp" id="less"></div>
							<div class="rightTemp" id="temp2">
								<span id="weatherTempNow"></span>
								<span>°</span>
							</div>
							<div class="rightTemp" id="less"></div>
							<div class="rightTemp" id="temp3">
								<span id="weatherTempMax"></span>
								<span>°</span>
							</div>
							<div style="clear:both;"></div>
						</div>
						<div id="rightDesc"><div class="weatherother" id="humidity"><div class="descname" i18n="Humidity">湿度</div><div class="weadesc"><span id="HumidityData"></span>%</div></div><div class="weatherother" id="wind"><div class="descname" i18n="Wind">风力</div><div class="weadesc"><span id="WindData"></span> m/s</div></div><div class="weatherother" id="pressure"><div class="descname" i18n="Pressure">压力</div><div class="weadesc"><span id="PressureOrPM"></span> <span>hpa</span></div></div><div style="clear:both;"></div></div>
						<div class="weatherfuture"><div class="weatherDate" i18n="Tomorrow">明日</div><div class="rightWeatherIcon"><img draggable="false" src="http://img.infinitynewtab.com/weatherIcon/na.png" id="WeatherIcon2"></div><div class="rightWeatherTemp" id="WeatherTemp2">N~A</div><div style="clear:both;"></div></div>
						<div class="weatherfuture"><div class="weatherDate" id="weatherDate3">星期五</div><div class="rightWeatherIcon"><img draggable="false" src="http://img.infinitynewtab.com/weatherIcon/na.png" id="WeatherIcon3"></div><div class="rightWeatherTemp" id="WeatherTemp3">N~A</div><div style="clear:both;"></div></div>
						<div class="weatherfuture"><div class="weatherDate" id="weatherDate4">星期六</div><div class="rightWeatherIcon"><img draggable="false" src="http://img.infinitynewtab.com/weatherIcon/na.png" id="WeatherIcon4"></div><div class="rightWeatherTemp" id="WeatherTemp4">N~A</div><div style="clear:both;"></div></div>
						<div class="weatherfuture"><div class="weatherDate" id="weatherDate5">星期日</div><div class="rightWeatherIcon"><img draggable="false" src="http://img.infinitynewtab.com/weatherIcon/na.png" id="WeatherIcon5"></div><div class="rightWeatherTemp" id="WeatherTemp5">N~A</div><div style="clear:both;"></div></div>
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