import Foo from '../components/Foo.vue';
import Bar from '../components/Bar.vue';
import User from '../components/User.vue';

import UserHome from '../components/user/UserHome.vue';
import UserProfile from '../components/user/UserProfile.vue';
import UserPosts from '../components/user/UserPosts.vue';

const routes = [
	{path: '/', component: Foo},
	{path: '/foo', component: Foo},
	{path: '/bar', component: Bar},
	{path: '/user/:id', component: User,
		children: [
			{path: '', component: UserHome},
			{path: 'profile', component: UserProfile},
			{path: 'posts', component: UserPosts}
		]
	}
]

export default routes;