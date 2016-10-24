import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app';
import routes from './routes/routes.config.js';

import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element);

Vue.config.debug = PRODUCTION;//开启错误提示
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
