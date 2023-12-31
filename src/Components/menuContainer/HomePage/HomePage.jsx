
import { Link, Outlet } from 'react-router-dom';
import styles from '../HomePage/HomePage.module.css'; // Замініть 'HomePage' на назву вашого компонента
import Slider from '../slider/Slider.jsx';

export default function HomePage() {
  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
          <div className={styles.slider}>
            <Slider/>
          </div>
          <div className={styles.boxMenuLink}>
            <div className={styles.pizza}>
              <Link to="Піца"><p className={styles.headerMenu}>Піца</p></Link>
            </div>
            <div className={styles.burger}>
              <Link to="Бургери"><p className={styles.headerMenu}>Бургери</p></Link>
            </div>
            <div className={styles.kebab}>
              <Link to="Кебаби"><p className={styles.headerMenu}>Кебаби</p></Link>
            </div>
            <div className={styles.snack}>
              <Link to="Снеки"><p className={styles.headerMenu}>Снеки</p></Link>
            </div>
            <div className={styles.salad}>
              
              <Link to="Хот-доги"><p className={styles.headerMenu}>Хот-Доги</p></Link>
            </div>
            <div className={styles.sets}>
             
              <Link to="Комбо-меню"> <p className={styles.headerMenu}>Сети</p></Link>
            </div>
            <div className={styles.drinks}>
             
              <Link to="Напої"> <p className={styles.headerMenu}>Напої</p></Link>
            </div>
            <div className={styles.other}>
             
              <Link to="Інше"><p className={styles.headerMenu}>Інше</p></Link>
            </div>
          </div>
            <h1 className={styles.textinfo}>Завітай у Kombo 🔥</h1>
          <div className={styles.homePagePhotoBox}>
            <div className={styles.homePagePhoto}>
            <img src="https://tinypic.host/images/2023/12/08/IMG_2106.png" alt="photo_5438253935287719837_y.jpeg" border="0"/>
            </div>
            <div className={styles.homePagePhoto}>
            <img src="https://tinypic.host/images/2023/12/05/photo_5438253935287719857_y.jpeg" alt="photo_5438253935287719857_y.jpeg" border="0"/>
            </div>
            <div className={styles.homePagePhoto}>
            <img src="https://tinypic.host/images/2023/12/05/photo_5438253935287719845_y.jpeg" alt="photo_5438253935287719845_y.jpeg" border="0"/>
            </div>
            <div className={styles.homePagePhoto}>
            <img src="https://tinypic.host/images/2023/12/05/photo_5438253935287719848_y.jpeg" alt="photo_5438253935287719848_y.jpeg" border="0"/></div>
            <div className={styles.homePagePhoto}>
            <img src="https://tinypic.host/images/2023/12/05/photo_5438253935287719850_y.jpeg" alt="photo_5438253935287719850_y.jpeg" border="0"/></div>
            <div className={styles.homePagePhoto}>
              <img src="https://tinypic.host/images/2023/12/05/DSC_0924_Original.jpeg" alt="DSC_0924_Original.jpeg" border="0"/>
            </div>
          </div>
          <h1 className={styles.textinfo}>Про нас 🧡</h1>

          <div className={styles.aboutUs}>
            

          <section>
        <h1>Kombo 🔥</h1>
        <p>Це заклад доставки їжі, яка пропонує широкий вибір смачних страв, включаючи:</p>
        <ul className={styles.about}>
            <li>- Кебаб</li>
            <li>- Піцу</li>
            <li>- Бургери</li>
            <li>- Хот-дог</li>
            <li>- Снеки</li>
        </ul>
        <p>Ми гарантуємо, що ваше замовлення буде приготоване з найсвіжіших інгредієнтів та доставлене до вашої двері в найкоротший термін.</p>
    </section>
    <section>
        <h1>Наші страви 🍕</h1>

        <p>Наші кебаби - це смачне поєднання ніжного м`яса та ароматних приправ, піца приготовується з гарячого хрусткого тіста та смачної начинки.</p>

        <p>Бургери нашого власного виробництва вражають своїм смаком.</p>

        <p>Хот-доги - це справжня класика швидкого харчування.</p>

        <p>Снеки доповнюють ваше замовлення додатковими смачними опціями.</p>
    </section>
    <section>
        <h1>Наша мета 🥇</h1>
        <p>Надати вам максимальний комфорт і задоволення від прийому їжі прямо вдома.</p>
    </section>
    </div>
        </div>
      {/* </div> */}
      <Outlet />
    </div>
  );
}
