
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Імпортуємо хук useSelector
import '../../header/BurgerMenu/BurgerMenu.css';

const Example = () => {
  // Припускаючи, що 'order' - це правильна властивість у вашому Redux-сховищі
  const order = useSelector(state => state.counter.order.length);

  // Зауваження: Також потрібно надати стилі, див. https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <li>
        <Link to="">
          <img className='komboLogo' src='Logokombo.png' alt="Logo" />
        </Link>
      </li>
      <li><Link to="Pizza"><p>Піцца</p></Link></li>
      <li><Link to="Burgers"><p>Бургери</p></Link></li>
      <li><p>Кебаби</p></li>
      <li><p>Снеки</p></li>
      <li><p>Салати</p></li>
      <li><p>Сети</p></li>
      <li><Link to="Drinks"><p>Напої</p></Link></li>
      <li><Link to="Appendices"><p>Інше</p></Link></li>
      <li className='bucketIcon'>
        <Link to="Bucket">
          <img src="bucket.png" alt="" />
          <div className='bucektIndex'>
            <p>{order}</p>
          </div>
        </Link>
      </li>
    </Menu>
  );
};

export default Example;
