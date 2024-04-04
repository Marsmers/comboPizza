
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Імпортуємо хук useSelector
import '../../header/BurgerMenu/BurgerMenu.css';

const Example = () => {
  const order = useSelector(state => state.counter.order.length);

  const scrollToTop = () => {
			window.scrollTo(0, 0)
		}

  return (
		<Menu>
			<li>
				<Link to=''>
					<img className='komboLogo' src='Logokombo.png' alt='Logo' />
				</Link>
			</li>
			<li>
				<Link to='Піца' onClick={scrollToTop}>
					<p>Піца</p>
				</Link>
			</li>
			<li>
				<Link to='Бургери' onClick={scrollToTop}>
					<p>Бургери</p>
				</Link>
			</li>
			<li>
				<Link to='Кебаби' onClick={scrollToTop}>
					<p>Кебаби</p>
				</Link>
			</li>
			<li>
				<Link to='Снеки' onClick={scrollToTop}>
					<p>Снеки</p>
				</Link>
			</li>
			<li>
				<Link to='Хот-доги' onClick={scrollToTop}>
					<p>Хот-дог</p>
				</Link>
			</li>
			<li>
				<Link to='Комбо-меню' onClick={scrollToTop}>
					<p>Комбо меню</p>
				</Link>
			</li>
			<li>
				<Link to='Напої' onClick={scrollToTop}>
					<p>Напої</p>
				</Link>
			</li>
			<li>
				<Link to='Інше' onClick={scrollToTop}>
					<p>Інше</p>
				</Link>
			</li>
			<li className='bucketIcon' onClick={scrollToTop}>
				<Link to='Корзина' onClick={scrollToTop}>
					<img src='корзина.png' alt='' />
					<div className='bucektIndex'>
						<p>{order}</p>
					</div>
				</Link>
			</li>
		</Menu>
	)
};

export default Example;
