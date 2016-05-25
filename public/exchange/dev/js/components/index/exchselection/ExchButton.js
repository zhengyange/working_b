import React, {Component} from 'react';
import Tappable from 'react-tappable';

export default class ExchButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			touching: false
		}
	}

	handleTouchStart(){
		this.setState({touching: true});
	}

	handleTouchEnd(){
		this.setState({touching: false});
	}

	render(){
		let onTap = this.state.touching ? 'on-tap' : '';
		return (
			<div className="exch-button-wrap">
				<div className="process-bg">
					<div className="process-ing"></div>
				</div>
				<Tappable 
					onTouchStart={() => this.handleTouchStart()} 
					onTouchEnd={() => this.handleTouchEnd()} 
					component="div" 
					className={`exch-button-bg ${onTap}`}>
					
					<div className="exch-button">兑</div>
				</Tappable>
			</div>
		)
	}
}