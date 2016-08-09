export function configRouter(router){
	router.map({
		'/about': {
			component: function(resolve){
				require(['../components/About.vue'], resolve);
			}
		},
		'/user/:userId': {
			component: function(resolve){
				require(['../components/user/index.vue'], resolve);
			},
			subRoutes: {
				'profile/:something': {
					// component: requireAsync('../components/user/profile.vue')
					component: function(resolve){
						require(['../components/user/profile.vue'], resolve);
					}
				},
				'posts': {
					component: function(resolve){
						require(['../components/user/posts.vue'], resolve);
					}
				},
				'settings': {
					component: function(resolve){
						require(['../components/user/setting.vue'], resolve);
					}
				}
			}
		},
		// advanced example
	    '/inbox': {
	      component: function(resolve){
	      	require(['../components/inbox/index.vue'], resolve)
	      },
	      subRoutes: {
	        '/message/:messageId': {
	          component: function(resolve){
	          	require(['../components/inbox/message.vue'], resolve)
		      }
	        },
	        '/archived': {
	          component: function(resolve){
	          	require(['../components/inbox/archive.vue'], resolve)
	          }
	        },
	        // default component to render into the nested outlet
	        // when the parent route is matched but there's no
	        // nested segment. In this case, "/inbox".
	        '/': {
	          // inline component
	          component: {
	            template: 'default yo'
	          }
	        }
	      }
	    },
		'*': {
			component: function(resolve){
				require(['../components/NotFound.vue'], resolve);
			}
		}
	});
	
	// redirect
	  router.redirect({
	    '/info': '/about',
	    '/hello/:userId': '/user/:userId'
	  })

	  // global before
	  // 3 options:
	  // 1. return a boolean
	  // 2. return a Promise that resolves to a boolean
	  // 3. call transition.next() or transition.abort()
	  router.beforeEach((transition) => {
	    if (transition.to.path === '/forbidden') {
	      router.app.authenticating = true
	      setTimeout(() => {
	        router.app.authenticating = false
	        alert('this route is forbidden by a global before hook')
	        transition.abort()
	      }, 3000)
	    } else {
	      transition.next()
	    }
	  })

}
