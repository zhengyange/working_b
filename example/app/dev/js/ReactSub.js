import React, {Component} from 'react';

export default class ReactSub extends Component {
	constructor(props){
		super(props)
	}

	render(){
		let b = Object.assign({},{a:1000});
		console.log(b)
		return (
			<div>
			Hello React
			{b.a}
			</div>
		)
	}
}