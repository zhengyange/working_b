import React, {Component} from 'react';
import TextButton from '../../_parts/TextButton.js';
import JoinItem from '../../_parts/joinitem';
import Tappable from 'react-tappable';

export default class PastItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			isShowNum: false
		}
	}
	handleOnTap(){
		let isShowNum = this.state.isShowNum;
		this.setState({isShowNum: !isShowNum});
		console.log(this.state.isShowNum);
	}

	render(){
		let showNum = this.state.isShowNum ? 'showNum' : '';
		let showList = this.state.isShowNum ? 'show' : '';
		let title = <h3 className="title cf">
					<TextButton>第205期</TextButton>
					
					<span className="fr status">正在进行中</span>
				</h3>;
		let contentText = <div className="content">
					<p className="content-tip">若参与人次数不满</p>
					<p className="content-time"><span className="time">01:28:20</span>后退回超级帮钻</p>
					<Tappable onTap={() => this.handleOnTap()} component="p" className={`join-details ${showNum}`}>参与详情</Tappable>
				</div>;
		switch(this.props.type){
			case "0": 
				break;
			case "1":
				title = <h3 className="title cf">
					<TextButton>第205期</TextButton>
					<span className="time">2016-04-28 17:15:20</span>
					
					<span className="fr status">结束</span>
				</h3>;
				contentText = <div className="content">
					<p className="content-cancel">本期由于参与的人数未满已经取消开奖</p>
					<Tappable onTap={() => this.handleOnTap()} component="p" className={`join-details ${showNum}`}>参与详情</Tappable>
				</div>;
				break;
			case "2":
				title = <h3 className="title cf">
					<TextButton>第205期</TextButton>
					<span className="time">2016-04-28 17:15:20</span>
					
					<span className="fr status">结束</span>
				</h3>;
				contentText = <div className="content">
					<p className="content-tip">中奖号码：B5M332423424</p>
					<p className="winer">中奖者：楚留香</p>
					<p className="winer">购买情况：2016-04-28 17:15:20  购买5人次</p>
					<Tappable onTap={() => this.handleOnTap()} component="p" className={`join-details ${showNum}`}>参与详情</Tappable>
				</div>;
				break;

		}
		return (
			<div className="past-item">
				{title}
				{contentText}
				<div className={`join-list ${showList}`}>
					<JoinItem />
					<JoinItem />
					<JoinItem />
				</div>
			{/*
				<h3 className="title cf">
					<TextButton>第205期</TextButton>
					<span className="time">2016-04-28 17:15:20</span>
					
					<span className="fr status">正在进行中</span>
				</h3>
				<div className="content">
					<p className="content-tip">若参与人次数不满</p>
					<p className="content-time"><span className="time">01:28:20</span>后退回超级帮钻</p>
					<Tappable onTap={() => this.handleOnTap()} component="p" className={`join-details ${showNum}`}>参与详情</Tappable>
				</div>
				<div className={`join-list ${showList}`}>
					<JoinItem />
					<JoinItem />
					<JoinItem />
				</div>
				*/}
			</div>
		)
	}
}
