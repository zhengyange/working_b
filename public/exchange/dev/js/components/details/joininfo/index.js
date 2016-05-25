import React, {Component} from 'react';
import './joininfo.scss';
import JoinItem from '../../_parts/joinitem';

export default class JoinInfo extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="join-info">
				<h2 className="join-title">本期参与情况 <span>拉动显示本期参与情况</span></h2>
				<JoinItem />
				<JoinItem />
				<JoinItem />
			</div>
		)
	}
}