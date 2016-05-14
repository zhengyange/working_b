import React, { Component } from 'react';
import './compare.scss';

export default class Compare extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="compare-wrap">
				<div className="compare-row compare-header">
					<div className="compare-cell">
						商城
					</div>
					<div className="compare-cell">
						最低价
					</div>
				</div>
				<div className="compare-row">
					<div className="compare-cell shop-name">
						网易考拉海购
					</div>
					<div className="compare-cell price">
						￥162
					</div>
				</div>
				<div className="compare-row">
					<div className="compare-cell shop-name">
						网易考拉
					</div>
					<div className="compare-cell price">
						￥162
					</div>
				</div>
				<div className="compare-row">
					<div className="compare-cell shop-name">
						网易考
					</div>
					<div className="compare-cell price">
						￥162
					</div>
				</div>
				<div className="compare-row">
					<div className="compare-cell shop-name">
						网易考拉海
					</div>
					<div className="compare-cell price">
						￥162
					</div>
				</div>
			</div>
		)
	}
}


