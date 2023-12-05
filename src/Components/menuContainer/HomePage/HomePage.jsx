
import { Link, Outlet } from 'react-router-dom';
import styles from '../HomePage/HomePage.module.css'; // Замініть 'HomePage' на назву вашого компонента
import Slider from '../slider/Slider.jsx';

export default function HomePage() {
  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <div className={styles.home}>
          <div className={styles.slider}>
            <Slider/>
          </div>
          <div className={styles.boxMenuLink}>
            <div className={styles.pizza}>
              <p className={styles.headerMenu}>Піцца</p>
              <Link to="Pizza"></Link>
            </div>
            <div className={styles.burger}>
              <p className={styles.headerMenu}>Бургери</p>
              <Link to="Burgers"></Link>
            </div>
            <div className={styles.kebab}>
              <p className={styles.headerMenu}>Кебаби</p>
            </div>
            <div className={styles.snack}>
              <p className={styles.headerMenu}>Снеки</p>
            </div>
            <div className={styles.salad}>
              <p className={styles.headerMenu}>Салати</p>
            </div>
            <div className={styles.sets}>
              <p className={styles.headerMenu}>Сети</p>
            </div>
            <div className={styles.drinks}>
              <p className={styles.headerMenu}>Напої</p>
            </div>
            <div className={styles.other}>
              <p className={styles.headerMenu}>Додатки</p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
