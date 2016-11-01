import reactDom from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import IndexStore from '../js/store/IndexStore';

import IndexContainer from '../js/container/IndexContainer';
reactDom.render(
    <Provider store={IndexStore} >
        <IndexContainer />
    </Provider>
    ,document.getElementById('page')
);




