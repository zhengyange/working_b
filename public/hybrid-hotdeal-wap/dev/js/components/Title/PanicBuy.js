import React, { Component } from 'react';
import './title.scss';

export default class PanicBuy extends Component {
	constructor(props){
		super(props);
	}
	render(){

		return (
			<div className="panic-buy">
				<span className="limit-text">限时抢</span>
				<span className="panicing">抢购中...</span>
				<div className="limit-time">
					<span>02</span>:
					<span>23</span>:
					<span>08</span>
				</div>
			</div>
		)
	}
}