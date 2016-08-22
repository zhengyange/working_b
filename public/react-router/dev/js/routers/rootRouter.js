import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RootContainer from '../container/RootContainer';
// import Page1 from '../components/animatins/Page1.js';
// import Page2 from '../components/animatins/Page2.js';


// module.exports = (
// 	<Route path="/" component={RootContainer}>   
// 		<IndexRoute component={Index} />
// 		<Route path="page1" component={Page1} />
// 		<Route path="page2" component={Page2} />
//     </Route> 
// );

const rootRouter = {
	path: '/',
	component: RootContainer,
	childRoutes: [
		{
			path: 'page1',
			// component: Page1
			getComponent(nextState, cb) {
			    require.ensure([], (require) => {
			      cb(null, require('react-router!../components/animatins/Page1.js'))
			    })
			  },
			onEnter: (e) => {
				console.log(e);
				return false;
			}
		},
		{
			path: 'page2',
			getComponent(nextState, cb) {
			    require.ensure([], (require) => {
			      cb(null, require('react-router!../components/animatins/Page2.js'))
			    })
			  }
		}
	],
		
}

module.exports = rootRouter;