import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {bindActionCreators} from 'redux';
import {connect,Provider} from 'react-redux';
import './app.css';
import NavLink from '../components/_parts/NavLink.js';

import * as actions from '../action/Action';
import Store from '../store/Store';

//import components here
import Index from '../components/animatins/Index.js';


class SmartContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isBack: false
        };
        this.handleBack.bind(this);
    }
    componentWillMount(){
        let {dispatch,smartData } = this.props;
        //dispatch(actions.init());
    }
    componentDidMount(){
        //页面准备完后再加载异步组件
        
        require('../components/animatins/Page1.js')
        require('../components/animatins/Page2.js')

        // window.onpopstate = function(e){
        //     console.log(e)
        // }
    }

    handleBack(){
        this.setState({
            isBack: true
        });
    }
    render(){
        console.log('render data : ',this.props);
        return(
            //component here
            <div>
                <ul>
                  <li><NavLink to="/" onlyActiveOnIndex={true} >Home</NavLink></li>
                  <li><NavLink to="/page1">Page 1</NavLink></li>
                  <li><NavLink to="/page2">Page 2</NavLink></li>
                </ul>

                <ReactCSSTransitionGroup
                  component="div"
                  transitionName={!this.state.isBack ? 'example' : ''}
                  transitionEnterTimeout={500}
                  transitionLeave={true}
                  transitionLeaveTimeout={0}
                >
                  {React.cloneElement(this.props.children || <Index />, {
                    key: location.pathname,
                    handleBack: this.handleBack
                  })}
                </ReactCSSTransitionGroup>
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
