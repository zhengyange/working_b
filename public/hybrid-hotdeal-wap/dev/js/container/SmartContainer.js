import B5MApp from 'b5m_app';
import b5m from 'b5m_host';
import 'common.scss';
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect,Provider} from 'react-redux';

import * as actionsCreators from '../action/Action';

//import components here
import Banner from '../components/Banner';
import Title from '../components/Title';
import Sku from '../components/Sku';
import Compare from '../components/Compare';
import Recommend from '../components/Recommend';
import Bottom from '../components/Bottom';


class SmartContainer extends Component{
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
    render(){
        let {dispatch, smartData} = this.props;
        let actions = bindActionCreators(actionsCreators, dispatch);
        console.log(actions);
        console.log('render data : ',this.props);
        return(
            <div>
                <Banner />
                <Title />
                <Sku />
                <Compare />
                <Recommend />
                <Bottom 
                    onCollect={actions.collect}
                    onShare={actions.share}
                    isCollected={smartData.isCollected}
                    isShared={smartData.isShared}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        smartData:state.SmartReducer
    }
}
export default connect(mapStateToProps)(SmartContainer);
