import 'common.scss';
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../action/Action';

import Banner from '../components/details/banner';
import Title from '../components/details/title';
import ImgDetails from '../components/details/imgdetails';
import JoinInfo from '../components/details/JoinInfo';


class DetailsContainer extends Component{
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
                <Banner 
                    banners={[1,2,3,4]}
                />

                <Title />

                <ImgDetails />

                <JoinInfo />
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
export default connect(mapStateToProps)(DetailsContainer);
