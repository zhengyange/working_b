import React, {Component} from 'react';
import './pastlist.scss';
import PastItem from './PastItem.js';

export default class PastList extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="past-list">
				<PastItem 
					type="0"
				/>
				<PastItem 
					type="1"
				/>
				<PastItem 
					type="2"
				/>
			</div>
		)
	}
}
