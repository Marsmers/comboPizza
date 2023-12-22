
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Імпортуємо хук useSelector
import '../../header/BurgerMenu/BurgerMenu.css';

const Example = () => {
  const order = useSelector(state => state.counter.order.length);

  return (
    <Menu>
      <li>
        <Link to="">
          <img className='komboLogo' src='Logokombo.png' alt="Logo" />
        </Link>
      </li>
      <li><Link to="Піца"><p>Піца</p></Link></li>
          <li><Link to="Бургери"><p>Бургери</p></Link></li>
          <li><Link to="Кебаби"><p>Кебаби</p></Link></li>
          <li><Link to="Снеки"><p>Снеки</p></Link></li>
          <li><Link to="Хот-доги"><p>Хот-дог</p></Link></li>
          <li><Link to="Комбо-меню"><p>Комбо меню</p></Link></li>
          <li><Link to="Напої"><p>Напої</p></Link></li>
          <li><Link to="Інше"><p>Інше</p></Link></li>  
      <li className='bucketIcon'>
        <Link to="Корзина">
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
