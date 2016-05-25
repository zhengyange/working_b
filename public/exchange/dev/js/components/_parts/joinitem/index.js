import React, {Component} from 'react';
import './joinitem.scss';
import TimeItem from './timeitem.js';

export default class JoinList extends Component {
	constructor(props){
		super(props);
		
	}


	render(){

		return (
			<div className="join-item">
				<h3 className="time-year">2016-04-28</h3>
				<TimeItem />
				<TimeItem />
				<TimeItem />
				
				
			</div>
		)
	}
}