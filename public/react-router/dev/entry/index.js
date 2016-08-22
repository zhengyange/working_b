import reactDom from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../js/routers/rootRouter.js';
//commonParams is importent for hybrid
reactDom.render(
    <Router routes={routes} history={browserHistory} />
    ,document.getElementById('page')
);





