import 'common.scss';
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../action/Action';

import PastList from '../components/pastDetails/pastlist';


class PastContainer extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        let {dispatch,smartData,commonParams} = this.props;
        smartData.commonParams = commonParams;
        console.log('commonParams : ',commonParams)
        //dispatch(actions.init());
    }
    componentDidMount(){
    }

    render(){
        console.log('render data : ',this.props);
        return(
            <div className="page-wrap">
                <PastList />
            </div>
        )
    }
}
//
function mapStateToProps(state){
    return {
        smartData:state.SmartReducer
    }
}
export default connect(mapStateToProps)(PastContainer);
