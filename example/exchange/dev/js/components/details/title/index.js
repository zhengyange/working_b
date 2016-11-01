import React, { Component } from 'react';
import './detailstitle.scss';
import Tappable from 'react-tappable';

import TextButton from  '../../_parts/TextButton.js';

export default class Title extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="title-wrap cf borderBottom">
				<h3 className="title">
					<TextButton>第205期</TextButton>
					<span>Apple/苹果iPhone 6s 4.7英寸 4G手机</span>
				</h3>
				<p className="people-num">开奖人次：<span>8000</span></p>
				<div className="num-process cf">
					<div className="num-content fr"></div>
				</div>
				<p className="people-num">已参加人次：<span>5500</span> <span className="fr"><i>还需人次</i>：2500</span></p>
				<Tappable component="p" className="how-to-exch">如何开奖</Tappable>
			</div>
		)
	}
}