import React, {Component} from 'react';
import './winners.scss';
let Swiper = require('swiper');

export default class Winners extends Component {
	constructor(props){
		super(props);
		this.state = {
			paddingTop: true
		}
	}

	componentDidMount(){
		this.setState({
			paddingTop: false
		});
		var swiper = new Swiper('#winner', {
            direction: 'vertical',
            autoplay: 5000,
            // autoplay: false,
            autoplayDisableOnInteraction: false,
            loop:true,
        });
		this.setState({
			paddingTop: false
		});
	}

	render(){
		let paddingTop = this.state.paddingTop ? '2% 0' : ''; 
		let banners = [1, 2, 3, 4];
		return (
			
			<section id="winner" className="banner swiper-container"  style={{padding: paddingTop}}>
				<ul className="homebanner swiper-wrapper" id="home_banner" >

					{banners && banners.map((banner, index) => {
						return <li key={`banner${index}`} className="swiper-slide">
									<div className="winning-info">恭喜中奖：楚留得获得iPad一台</div>
								</li>
										
					})}
				</ul>
			</section> 
		)
	}
}