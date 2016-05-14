import React, { Component } from 'react';
import './recommend.scss';
import Goods from './Goods.js';

export default class Recommend extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="recommend-wrap">
				<h2>商品推荐</h2>
				<div className="recommend-goods cf">
					<Goods />
					<Goods />
					<Goods />
					<Goods />
				</div>
				<div className="content-h"></div>
			</div>
		)
	}
}

