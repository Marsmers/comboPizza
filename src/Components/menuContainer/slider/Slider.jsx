// Import necessary CSS files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styles from './Slider.module.css'; 
import '../slider/slider.css';

import Slider from "react-slick";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
    };



    const scrollToTop = () => {
      window.scrollTo(0, 0);
  }


  return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				<div className={styles.contentBox}>
        <Link to='Комбо-меню' onClick={scrollToTop}>
					<img 
						className={styles.imgSlider}
						src='https://tinypic.host/images/2024/06/14/ZNMOK-EKRANA-2024-06-14-O-20.32.23.png'
						alt=''
					/>
         </Link>
				</div>
				<div className={styles.contentBox}>
        <Link to='Комбо-меню' onClick={scrollToTop}>
					<img
						className={styles.imgSlider}
						src='https://tinypic.host/images/2024/06/14/ZNMOK-EKRANA-2024-06-14-O-20.34.18.png'
						alt=''
					/>
            </Link>
				</div>
				<div className={styles.contentBox}>
        <Link to='Комбо-меню' onClick={scrollToTop}>
					<img
						className={styles.imgSlider}
						src='https://tinypic.host/images/2024/06/14/ZNMOK-EKRANA-2024-06-14-O-20.36.05.png'
						alt=''
					/>
            </Link>
				</div>
				<div className={styles.contentBox}>
        <Link to='Піца' onClick={scrollToTop}>
					<img
						className={styles.imgSlider}
						src='https://tinypic.host/images/2023/12/13/photo_5442757534915089224_y-1.jpeg'
						alt=''
					/>
                 </Link>
				</div>
			</Slider>
		</div>
	)}}