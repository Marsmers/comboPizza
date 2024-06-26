import { Link, Outlet } from 'react-router-dom'
import styles from './Header.module.css' // Підключення модуля CSS
import Footer from '../footer/Footer'
import { useSelector } from 'react-redux'
import Example from './BurgerMenu/BurgerMenu'






export default function Index() {
	const order = useSelector(state => state.counter.order.length)
	
	const scrollToTop = () => {
				window.scrollTo(0, 0);
		}
	
	return (
		<>
			<Example className={styles.Example} />
			<div className={styles.burgerMenu}>
				<div className={styles.komboLogoBurger}>
					<Link to='' onClick={scrollToTop}>
						<img
							className={styles.komboLogoBurger}
							src='Logokombo.png'
							alt='Logo'
						/>
					</Link>
				</div>
				<div className={styles.bucketLogo}>
					<Link to='Корзина' onClick={scrollToTop}>
						<img src='корзина.png' alt='' />
						<div className={styles.bucektIndexMob}>
							<p>{order}</p>
						</div>
					</Link>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.headerLogo}>
						<Link to='' onClick={scrollToTop}>
							<img
								className={styles.komboLogo}
								src='Logokombo.png'
								alt='Logo'
							/>
						</Link>
					</div>
					<ul className={styles.ulHeader}>
						<li>
							<Link to='Піца' onClick={scrollToTop}>
								<img src='pizza.png' alt='' />
								<p>Піца</p>
							</Link>
						</li>
						<li>
							<Link to='Бургери' onClick={scrollToTop}>
								<img src='burger.png' alt='' />
								<p>Бургери</p>
							</Link>
						</li>
						<li>
							<Link to='Кебаби' onClick={scrollToTop}>
								<img src='kebab.png' alt='' />
								<p>Кебаби</p>
							</Link>
						</li>
						<li>
							<Link to='Снеки' onClick={scrollToTop}>
								<img src='snack.png' alt='' />
								<p>Снеки</p>
							</Link>
						</li>
						<li>
							<Link to='Хот-доги' onClick={scrollToTop}>
								<img src='hot-dog.png' alt='' />
								<p>Хот-дог</p>
							</Link>
						</li>
						<li>
							<Link to='Комбо-меню' onClick={scrollToTop}>
								<img src='kombo.png' alt='' />
								<p>Комбо меню</p>
							</Link>
						</li>
						<li>
							<Link to='Напої' onClick={scrollToTop}>
								<img src='drink.png' alt='' />
								<p>Напої</p>
							</Link>
						</li>
						<li>
							<Link to='Інше' onClick={scrollToTop}>
								<img src='other.png' alt='' />
								<p>Інше</p>
							</Link>
						</li>
					</ul>
					<div className={styles.headerInfo}>
						<p className={styles.headerPhone}>
							<a href='tel:+380-66-051-82-46'>
								<span className={styles.colorTextPhone}>+38 066</span> 051 82 46
							</a>
						</p>
						<p className={styles.headerInfoTime}>
							{' '}
							Графік роботи з 10:00 до 22:00
						</p>
					</div>
					<li className={styles.bucketIcon}>
						<Link to='Корзина'>
							<img src='busket.png' alt='' />
							<p>Кошик</p>
						</Link>
					</li>
				</div>
				<Outlet />
				<Footer />
			</div>
		</>
	)
}
