import React, {Component} from 'react';
import './banner.scss';

export default class Banner extends Component {
	constructor(props){
		super(props);
	}

	render(){
		console.log(metadata.host,111111)
		return (
			<div>
				<div className="banner-wrap">
					<img src={metadata.host+"/htmlImg/placeholder.png"} data-lazy-src={metadata.host+"/htmlImg/test/test1.jpg"} />
				</div>
				<div className="winning-info">恭喜中奖：楚留得获得iPad一台</div>
			</div> 
		)
	}
}
