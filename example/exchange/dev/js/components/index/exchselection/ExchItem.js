import React, {Component} from 'react';
import TextButton from '../../_parts/TextButton.js';
import ExchButton from './ExchButton.js';

export default class ExchList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let overClass = this.props.isOver ? 'is-over' : '';

		return (
			<div className={`exch-list ${overClass}`}>
				<div className="exch-list-img">
					<img src={metadata.host+"/htmlImg/placeholder.png"} data-lazy-src={metadata.host+"/htmlImg/test/goods.jpg"} />
				</div>
				<div className="exch-list-left">
					<h3>
						<TextButton>第205期</TextButton>
						<span>Apple/苹果iPhone6s 4.7英寸 4G手机</span>
					</h3>
					<ExchButton />
					<p className="exch-process">兑奖进度：<span>26%</span></p>
				</div>
			</div>
		)
	}
}