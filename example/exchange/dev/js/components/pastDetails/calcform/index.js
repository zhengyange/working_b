import React, {Component} from 'react';
import './calcform.scss';


export default class CalcFrom extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="calc-from">
				<div className="cacl1">
					<p>获奖码计算公式：</p>
					<p>末尾20位用户下单时间和 ÷ 开奖人次 + B5M00810030001</p>
				</div>
				<div className="cacl2 border">
					<p>取余：（<span>123456789</span>）÷ <span>108</span> = <span>37........8</span></p>
					<p className="cacl2-p"><span>下单时间和</span><span>总需人次</span><span>余数</span></p>
				</div>
				<div className="cacl3 border">
					<p>求和：<span>7</span> + <span>B5M00810030001</span> = <span>B5M00810030001</span></p>
					<p className="cacl3-p"><span>余数</span> <span>获奖号码</span></p>
				</div>
			</div>
		)
	}

}