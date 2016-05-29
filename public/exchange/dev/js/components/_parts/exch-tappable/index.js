import React, {Component} from 'react';
import ReactTappable from 'react-tappable';
import './exch-tappable.scss';

export default class Tappable extends Component {
	constructor(props){
		super(props);
	}


	render(){
		console.log(this.props);
		let cls = "borderBottom imgdetails ";
		if(this.props.className){
			cls = cls + this.props.className;
		} 
		return (
			<ReactTappable component="div" {...this.props} className={cls}>
				{this.props.children}
			</ReactTappable>
		)
	}
}
