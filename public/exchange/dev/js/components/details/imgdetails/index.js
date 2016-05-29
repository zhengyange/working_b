import React,{Component} from 'react';
import './imgdetails.scss';
import Tappable from '../../_parts/exch-tappable';

export default class ImgDetails extends Component {
	constructor(props){
		super(props);
	}
	handleOnTap(){
		console.log('ontaptaptpaap');
	}
	render(){

		return (
			<div className="imgdetails-wrap">
				<div className="h20"></div>
				<Tappable onTap={()=>this.handleOnTap()} className="cf">
					<span>图文详情</span>
					<span className="fr wifi-view">建议在WIFI下查看</span>
				</Tappable>

				<Tappable onTap={()=>this.handleOnTap()} className="cf">
					<span>往期开奖</span>
				</Tappable>
			</div>
		)
	}
}

