import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import RouterWrap from '../pages/Home/RouterWrap.vue';

const routes = [
	{path: '/', component: Home,
		children: [
			{path: 'login', component: Login},
			{path: 'rwrap', component: RouterWrap}
		]	
	},
	{path: '/logout', component: Logout}
];

export default routes;