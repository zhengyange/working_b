import React, {Component} from 'react';
import './exchangeselection.scss';
import ExchItem from './ExchItem.js';

export default class ExchangeSelection extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="exchange-wrap">
		
				<div className="title-wrap">
					<img src={metadata.host+"/htmlImg/placeholder.png"} data-lazy-src={metadata.host+"/htmlImg/exchange.jpg"} />
				</div>
				<ExchItem />
				<ExchItem />
				<ExchItem />
				<ExchItem 
					isOver="true"
				/>
			</div>
		)
	}
}