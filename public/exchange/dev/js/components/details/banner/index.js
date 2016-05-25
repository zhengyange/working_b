import React, { Component } from 'react';
import './detailsbanner.scss';
import $ from 'zepto';
let Swiper = require('swiper');

export default class Banner extends Component {
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
		var swiper = new Swiper('#banner', {
            direction: 'horizontal',
            pagination: '.swiper-pagination',
            // autoplay: 5000,
            autoplay: false,
            autoplayDisableOnInteraction: false,
            loop:true,
            onSlideChangeStart: function(swiper){
                var activity_img = $('.banner_img').eq(swiper.activeIndex);
                activity_img.attr('src',activity_img.attr('data-img-src'));
            }
        });
		this.setState({
			paddingTop: false
		});
	}

	render(){
		let {banners} = this.props;
		let paddingTop = this.state.paddingTop ? '50% 0' : ''; 
		return (
			<section id="banner" className="banner swiper-container borderBottom"  style={{padding: paddingTop}}>
				<ul className="homebanner swiper-wrapper" id="home_banner" >

					{banners && banners.map((banner, index) => {
						if(index === 0){
							return <li key={`banner${index}`} className="swiper-slide" style={{width:"100%",padding:"50% 0"}}>
										<img src={metadata.host+"/htmlImg/test/goods.jpg"} />
									</li>
						}
						return <li key={`banner${index}`} className="swiper-slide" style={{width:"100%",padding:"50% 0"}}>
						<img className="banner_img" src={metadata.host+"/htmlImg/placeholder.png"} data-img-src={metadata.host+"/htmlImg/test/goods.jpg"} />
								</li>
										
					})}
				</ul>
				<div className="swiper-pagination"></div>
			</section>
		)
	}
}