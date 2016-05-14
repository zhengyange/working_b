import React, { Component } from 'react';
let Swiper = require('swiper');
import './banner.scss';

export default class Banner extends Component {
	constructor(props){
		super(props);
		this.state = {
			paddingTop: true,
			brandList: [
				'./htmlImg/test.jpg',
				'./htmlImg/test.jpg',
				'./htmlImg/test.jpg',
				'./htmlImg/test.jpg'
			]
		}
	}
	shouldComponentUpdate(nextProps){
		//这里进行banner---swiper初始化
		
        return nextProps.bannerList !== this.props.bannerList;
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
	}
	componentDidUpdate(){
		
	}
	render(){

		return (
			<section id="banner" className="banner swiper-container">
				<ul className="homebanner swiper-wrapper" id="home_banner" >

					{this.state.brandList.map((banner, index) => {
						if(index === 0){
							return <li key={`banner${index}`} className="swiper-slide" style={{width:"100%",padding:"50% 0"}}>
										<img src={banner} />
									</li>
						}
						return <li key={`banner${index}`} className="swiper-slide" style={{width:"100%",padding:"50% 0"}}>
									<img className="banner_img" src="./htmlImg/placeholder.png" data-img-src={banner} />
								</li>
										
					})}
				</ul>
				<div className="swiper-pagination"></div>
			</section>
		)
	}
}