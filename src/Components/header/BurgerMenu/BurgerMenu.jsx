
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Імпортуємо хук useSelector
import '../../header/BurgerMenu/BurgerMenu.css';
import { useState } from 'react';

const Example = () => {
  const order = useSelector(state => state.counter.order.length);
	const [menuOpen, setMenuOpen] = useState(false)

  const scrollToTop = () => {
			window.scrollTo(0, 0)
		}

	const handleStateChange = state => {
		setMenuOpen(state.isOpen)
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}


  return (
		<Menu isOpen={menuOpen} onStateChange={state => handleStateChange(state)}>
			<li>
				<Link to='' onClick={() => { scrollToTop(); closeMenu(); }}>
					<img className='komboLogo' src='Logokombo.png' alt='Logo' />
				</Link>
			</li>
			<li>
				<Link to='Піца' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Піца</p>
				</Link>
			</li>
			<li>
				<Link to='Бургери' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Бургери</p>
				</Link>
			</li>
			<li>
				<Link to='Кебаби' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Кебаби</p>
				</Link>
			</li>
			<li>
				<Link to='Снеки' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Снеки</p>
				</Link>
			</li>
			<li>
				<Link to='Хот-доги' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Хот-дог</p>
				</Link>
			</li>
			<li>
				<Link to='Комбо-меню' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Комбо меню</p>
				</Link>
			</li>
			<li>
				<Link to='Напої' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Напої</p>
				</Link>
			</li>
			<li>
				<Link to='Інше' onClick={() => { scrollToTop(); closeMenu(); }}>
					<p>Інше</p>
				</Link>
			</li>
			<li className='bucketIcon' onClick={() => { scrollToTop(); closeMenu(); }}>
				<Link to='Корзина' onClick={() => { scrollToTop(); closeMenu(); }}>
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
