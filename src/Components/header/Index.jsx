import { Link, Outlet } from 'react-router-dom'
import styles from './Header.module.css' // Підключення модуля CSS
import Footer from '../footer/Footer'
import { useSelector } from 'react-redux'
import Example from './BurgerMenu/BurgerMenu'

export default function Index() {
	const order = useSelector(state => state.counter.order.length)

	return (
		<>
			<Example className={styles.Example} />
			<div className={styles.burgerMenu}>
				<div className={styles.komboLogoBurger}>
					<Link to=''>
						<img
							className={styles.komboLogoBurger}
							src='Logokombo.png'
							alt='Logo'
						/>
					</Link>
				</div>
				<div className={styles.bucketLogo}>
					<Link to='Корзина'>
						<img src='bucket.png' alt='' />
						<div className={styles.bucektIndexMob}>
							<p>{order}</p>
						</div>
					</Link>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.headerLogo}>
						<Link to=''>
							<img
								className={styles.komboLogo}
								src='Logokombo.png'
								alt='Logo'
							/>
						</Link>
					</div>
					<ul className={styles.ulHeader}>
						<li>
							<Link to='Піца'>
								<img src='/public/pizza.png' alt='' />
								<p>Піца</p>
							</Link>
						</li>
						<li>
							<Link to='Бургери'>
								<img
									src='https://github.com/Marsmers/comboPizza/blob/main/public/burger.png'
									alt=''
								/>
								<p>Бургери</p>
							</Link>
						</li>
						<li>
							<Link to='Кебаби'>
								<img src='/public/kebab.png' alt='' />
								<p>Кебаби</p>
							</Link>
						</li>
						<li>
							<Link to='Снеки'>
								<img src='/public/snack.png' alt='' />
								<p>Снеки</p>
							</Link>
						</li>
						<li>
							<Link to='Хот-доги'>
								<img src='/public/hot-dog.png' alt='' />
								<p>Хот-дог</p>
							</Link>
						</li>
						<li>
							<Link to='Комбо-меню'>
								<img src='/public/kombo.png' alt='' />
								<p>Комбо меню</p>
							</Link>
						</li>
						<li>
							<Link to='Напої'>
								<img src='/public/drink.png' alt='' />
								<p>Напої</p>
							</Link>
						</li>
						<li>
							<Link to='Інше'>
								<img src='/public/other.png' alt='' />
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
							{/* <div className={styles.bucektIndex}>
								<p>{order}</p>
							</div> */}
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
