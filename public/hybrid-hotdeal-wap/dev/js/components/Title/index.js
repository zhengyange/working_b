import React, { Component } from 'react';
import './title.scss';
import PanicBuy from './PanicBuy.js';

export default class Title extends Component {
	constructor(props){
		super(props);
	}
	//
	render(){

		return (
			<div className="title-wrap">
				<PanicBuy />
				<h3 className="title-name">Nutrilon诺优能婴儿配方奶粉1段诺贝能一段双罐 荷兰牛栏进口奶粉<span>包邮</span></h3>
				<p className="title-price"><span>￥</span><span>198</span><s>￥500</s></p>
			</div>
		)
	}
}