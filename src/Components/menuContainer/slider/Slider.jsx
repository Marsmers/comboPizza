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
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.contentBox}>
        <img src="https://tinypic.host/images/2023/12/05/photo_5438253935287719837_y.jpeg" alt="photo_5438253935287719837_y.jpeg" border="0"/>
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
