import reactDom from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import PastStore from '../js/store/PastStore';

import PastContainer from '../js/container/PastContainer';
//commonParams is importent for hybrid
    reactDom.render(
        <Provider store={PastStore} >
            <PastContainer />
        </Provider>
        ,document.getElementById('page')
    );





