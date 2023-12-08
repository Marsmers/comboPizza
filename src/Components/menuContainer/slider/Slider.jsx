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
    centerMode: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.contentBox}>
        <img src="https://tinypic.host/images/2023/12/07/ZNMOK-EKRANA-2023-12-08-O-00.03.23.png" alt="photo_5438253935287719837_y.jpeg" border="0"/>
        </div>
        <div className={styles.contentBox}>
          <img src="https://tinypic.host/images/2023/12/07/ZNMOK-EKRANA-2023-12-08-O-00.00.07.png" alt="" />
        </div>
        <div className={styles.contentBox}>
          <img src="https://tinypic.host/images/2023/12/07/photo_5442757534915089224_y.jpeg" alt="" />
        </div>
        <div className={styles.contentBox}>
          <img src="public/DSC_1318_Original.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
