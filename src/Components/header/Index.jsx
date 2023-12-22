import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css'; // Підключення модуля CSS
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';
import Example from './BurgerMenu/BurgerMenu';





export default function Index() {
 const order = useSelector(state => state.counter.order.length);

  return (
    <>
    <Example className={styles.Example}/>
    <div className={styles.burgerMenu}>
    <div className={styles.komboLogoBurger}>
    <Link to="">
          <img className={styles.komboLogoBurger} src='Logokombo.png' alt="Logo" />
    </Link>
    </div>
    <div className={styles.bucketLogo}>
    <Link to="Корзина">
            <img src="bucket.png" alt="" />
            <div className={styles.bucektIndexMob}> 
              <p>{order}</p>
            </div>
          </Link>
    </div>
    </div>
    <div className={styles.container}> 
      <div className={styles.header}> 
        <div className={styles.headerLogo}> 
          <Link to=""><img className={styles.komboLogo} src='Logokombo.png' alt="Logo" /></Link>
        </div>
        <ul className={styles.ulHeader}>
          <li><Link to="Піца"><p>Піца</p></Link></li>
          <li><Link to="Бургери"><p>Бургери</p></Link></li>
          <li><Link to="Кебаби"><p>Кебаби</p></Link></li>
          <li><Link to="Снеки"><p>Снеки</p></Link></li>
          <li><Link to="Хот-доги"><p>Хот-дог</p></Link></li>
          <li><Link to="Комбо-меню"><p>Комбо меню</p></Link></li>
          <li><Link to="Напої"><p>Напої</p></Link></li>
          <li><Link to="Інше"><p>Інше</p></Link></li>  
        </ul>
        <li className={styles.bucketIcon}> 
          <Link to="Корзина">
            <img src="bucket.png" alt="" />
            <div className={styles.bucektIndex}> 
              <p>{order}</p>
            </div>
          </Link>
        </li>
      </div>
      <Outlet />
      <Footer />
    </div>
    </>
  );
}
