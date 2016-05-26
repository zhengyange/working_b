import React, {Component} from 'react';
import './banner.scss';

export default class Banner extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<div className="banner-wrap">
					<img src={metadata.host+"/htmlImg/placeholder.png"} data-lazy-src={metadata.host+"/htmlImg/test/test1.jpg"} />
				</div>
			</div> 
		)
	}
}
