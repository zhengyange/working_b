import React,{Component} from 'react';
import './imgdetails.scss';
import Tappable from 'react-tappable';

export default class ImgDetails extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="imgdetails-wrap">
				<div className="h20"></div>
				<div className="cf borderBottom imgdetails">
					<span>图文详情</span>
					<span className="fr wifi-view">建议在WIFI下查看</span>
				</div>
				<div className="cf borderBottom imgdetails">
					<span>往期开奖</span>
				</div>
			</div>
		)
	}
}

