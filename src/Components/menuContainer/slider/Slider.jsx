// Import necessary CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.css'; 
import '../slider/slider.css';

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.contentBox}>
        <img src="https://tinypic.host/images/2023/12/04/BURGER-TEKASKII-BBQ_1278_Original.jpeg" alt="BURGER-TEKASKII-BBQ_1278_Original.jpeg" border="0"/>
        </div>
        <div className={styles.contentBox}>
          <img src="public/DSC_1172_Original.jpg" alt="" />
        </div>
        <div className={styles.contentBox}>
          <img src="public/DSC_1219_Original.jpg" alt="" />
        </div>
        <div className={styles.contentBox}>
          <img src="public/DSC_1318_Original.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
