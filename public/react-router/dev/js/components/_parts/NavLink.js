import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<Link {...this.props} activeClassName="link-active"/>
		);
	}
}