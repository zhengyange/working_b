import React, { Component } from 'react';
import './bottom.scss';
import Tappable from 'react-tappable';

export default class Bottom extends Component {
	constructor(props){
		super(props);
	}
	//
	handleOnCollect(){
		let {onCollect, isCollected} = this.props;
		onCollect(!isCollected);
	}
	//
	handleOnShare(){
		let {onShare, isShared} = this.props;
		onShare(!isShared);
	}

	render(){
		let { isCollected, isShared } = this.props;
		return (
			<div className="bottom-wrap cf">
				<div className="bottom-left fl">
					<Tappable onTap={() => this.handleOnCollect()} id="collect-btn" className={isCollected?'active':''} >收藏</Tappable>
					<Tappable onTap={() => this.handleOnShare()} id="share-btn" className={isShared?'active':''} >分享</Tappable>
				</div>
				<Tappable component="div" id="rebate-buy" className="fl">返利购买</Tappable>
			</div>
		)
	}
}



