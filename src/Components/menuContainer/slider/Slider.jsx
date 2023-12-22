// Import necessary CSS files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styles from './Slider.module.css'; 
import '../slider/slider.css';

import Slider from "react-slick";
import { Component } from "react";

export default class Responsive extends Component {
  render() {
    var settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {/* <div className={styles.contentBox}>
        <img src="https://tinypic.host/images/2023/12/07/ZNMOK-EKRANA-2023-12-08-O-00.03.23.png" alt=""/>
        </div> */}
        <div className={styles.contentBox}>
          <img className={styles.imgSlider} src="https://tinypic.host/images/2023/12/13/ZNMOK-EKRANA-2023-12-08-O-00.00.07-1.png" alt="" />
        </div>
        <div className={styles.contentBox}>
          <img className={styles.imgSlider}src="https://tinypic.host/images/2023/12/13/photo_5442757534915089224_y-1.jpeg" alt="" />
        </div>
        <div className={styles.contentBox}>
          <img className={styles.imgSlider}src="https://tinypic.host/images/2023/12/13/SZOSDafa1d850c07dfa21-1.png" alt="" />
        </div>
      </Slider>
    </div>
  )}}