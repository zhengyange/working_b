import React, { Component } from 'react';
import './sku.scss';

export default class Sku extends Component {
	constructor(props){
		super(props);
	}

	//
	render(){

		return (
			<div className="sku-recommend-text">
				<div className="sku-wrap">
					<div className="sku-tr">
						<div className="sku-cell">分类：母婴专区</div>
						<div className="sku-cell">商城：网易考拉</div>
					</div>
					<div className="sku-tr">
						<div className="sku-cell">品牌：荷兰诺优能</div>
						<div className="sku-cell">国家：荷兰</div>
					</div>

				</div>
				<div className="recommend-text">
					<h3>小编吐血推荐</h3>
					<p>
						Nutrilon诺优能婴儿配方奶粉1段诺贝能一段双罐 荷兰牛栏进口奶粉Nutrilon诺优能婴儿配方奶粉1段诺贝能一段双罐 荷兰牛栏进口奶粉Nutrilon诺优能婴儿配方奶粉1段诺贝能一段双罐 荷兰牛栏进口奶粉Nutrilon诺优能婴儿配方奶粉1段诺贝能一段双罐 荷兰牛栏进口奶粉Nutrilon诺优能婴儿配方奶粉1段诺贝能一段双罐 荷兰牛栏进口奶粉
					</p>
				</div>
			</div>
		)
	}
}