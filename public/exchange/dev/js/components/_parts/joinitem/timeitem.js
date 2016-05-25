import React, {Component} from 'react';
import Tappable from 'react-tappable';

export default class TimeItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			isShowNum: false
		}
	}

	handleOnTap(){
		let isShowNum = this.state.isShowNum;
		this.setState({isShowNum: !isShowNum});
		console.log(this.state.isShowNum);
	}

	render(){

		return (
			<div className="time-name">
				<span>14:35:56</span>
				<span>588</span>
				<span>苗苗</span>
				<Tappable className={this.state.isShowNum ? 'showNum' : ''} onTap={() => this.handleOnTap()}>参与了1人次</Tappable>
			</div>
		)
	}
}