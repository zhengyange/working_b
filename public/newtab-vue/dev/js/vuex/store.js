import Vue from 'vue';
import Vuex from 'vuex';

// import all from './modules/all.js';
import weatherStore from '../components/appSlides/weather/weatherStore.js';

//vue需要显示的使用插件
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		weatherStore
	}
	
})