import React, {Component} from 'react';

export default class TextButton extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<span style={styles}>{this.props.children}</span>
		)
	}
}

let styles = {
	borderRadius:"3px", 
	border:"1px solid #4bc4fb", 
	color:"#4bc4fb",
	fontSize:"1.5rem",
	padding:"4px 5px",
	"fontWeight":"bold"
}