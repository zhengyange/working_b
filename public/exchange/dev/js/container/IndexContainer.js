import 'common.scss';
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../action/Action';

import Banner from '../components/index/banner';
import Winners from '../components/index/winners';
import ExchangeSelection from '../components/index/exchselection';

let imglazyload = require('imgLazyLoad');

class IndexContainer extends Component{
    constructor(props) {
        super(props);
        this.state = this.props;
    }
    componentWillMount(){
        let {dispatch,smartData,commonParams} = this.props;
        smartData.commonParams = commonParams;
        console.log('commonParams : ',commonParams)
        //dispatch(actions.init());
    }
    componentDidMount(){
        this.lazyloadInit();
    }

    lazyloadInit(){    
        var lazyImgs = $('img[src$="placeholder.png"]');
        console.log(lazyImgs)
        lazyImgs.lazyload({
            data_attribute:'data-lazy-src',
            effect:'fadeIn',
            skip_invisible:false
        });
    }
    componentDidUpdate(){
        this.lazyloadInit();
    }
    render(){
        console.log('render data : ',this.props);
        return(
            <div className="page-wrap">
                <Banner />
                <Winners />
                <ExchangeSelection />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        smartData:state.SmartReducer
    }
}
export default connect(mapStateToProps)(IndexContainer);
