import reactDom from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import DetailsStore from '../js/store/DetailsStore.js';

import DetailsContainer from '../js/container/DetailsContainer.js';
//commonParams is importent for hybrid
    reactDom.render(
        <Provider store={DetailsStore} >
            <DetailsContainer/>
        </Provider>
        ,document.getElementById('page')
    );





