import React, { Component } from 'react';

export default class Goods extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="goods-wrap fl">
				<div className="img-wrap">
					<img src="./htmlImg/good.jpg" />
				</div>
				<h3 className="goods-title">美国Similac雅培3段美版婴幼儿奶粉配方美国Similac雅培3段美版婴幼儿奶粉配方美国Similac雅培3段美版婴幼儿奶粉配方</h3>
				<div className="shop-price cf">
					<span className="price">￥108</span>
					<span className="shop">网易考拉海淘</span>
				</div>
			</div>
		)
	}
}


