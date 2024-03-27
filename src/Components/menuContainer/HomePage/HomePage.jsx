import { Link, Outlet } from 'react-router-dom'
import styles from '../HomePage/HomePage.module.css' // Замініть 'HomePage' на назву вашого компонента
import Slider from '../slider/Slider.jsx'

export default function HomePage() {
	return (
		<div className={styles.cons}>
			<div className={styles.coco}>
				<div className={styles.homePageHeader}>
					<div className={styles.homePageBacgoundContainer}>
						<img
							className={styles.homePageBacground}
							src='https://tinypic.host/images/2023/12/05/photo_5438253935287719848_y.jpeg'
							alt=''
						/>
					</div>
					<img
						className={styles.komboLogo}
						src='/public/Logokombo.png'
						alt=''
					/>
					<h1 className={styles.homePageText}>
						Максимальний комфорт і задоволення <br /> від доставки комбо !{' '}
					</h1>
					<img
						className={styles.homePageIconMouse}
						src='/public/Mask group.png'
						alt=''
					/>
				</div>
				<div className={styles.slider}>
					<Slider />
				</div>
				<div className={styles.HomePageItem}>
					<img
						src='https://tinypic.host/images/2023/12/08/IMG_2106.png'
						alt=''
					/>
					<div className={styles.HomePageItemContainer}>
						<p className={styles.firstTextItem}>Безкоштовна доставка</p>
						<p className={styles.secondTextItem}>по місту</p>
						<p className={styles.lastTextItem}>
							<span className={styles.colorLastTextItem}>від 300</span>
							грн
						</p>
					</div>
				</div>
				<div className={styles.boxMenuLink}>
					<div className={styles.pizza}>
						<Link to='Піца'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/pizza.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Піца</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2023/12/07/photo_5445002351111950858_y.jpeg'
								alt=''
							/>
						</Link>
					</div>
					<div className={styles.burger}>
						<Link to='Бургери'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/burger.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Бургери</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2023/12/07/TALISKII.jpeg'
								alt=''
							/>
						</Link>
					</div>
					<div className={styles.kebab}>
						<Link to='Кебаби'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/kebab.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Кебаб</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2023/12/07/GRIBNII.jpeg'
								alt=''
							/>
						</Link>
					</div>
					<div className={styles.snack}>
						<Link to='Снеки'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/snack.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Снеки</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2023/12/07/NAGETSI.jpeg'
								alt=''
							/>
						</Link>
					</div>
					<div className={styles.salad}>
						<Link to='Хот-доги'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/hot-dog.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Хот-Дог</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2024/01/24/bavaria.jpeg'
								alt=''
							/>
						</Link>
					</div>
					<div className={styles.sets}>
						<Link to='Комбо-меню'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/kombo.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Комбо меню</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2024/03/16/SZOSD-1.png'
								alt=''
							/>
						</Link>
					</div>
					<div className={styles.drinks}>
						<Link to='Напої'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/drink.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Напої</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2024/03/16/drinks.jpeg'
								alt=''
							/>
						</Link>
					</div>
					<div className={styles.other}>
						<Link to='Інше'>
							<div className={styles.boxMenuLinkContainer}>
								<img
									className={styles.boxMenuIcon}
									src='/public/other.png'
									alt=''
								/>
								<p className={styles.boxMenuText}>Інше</p>
								<span className={styles.spanHover}></span>
								<button className={styles.buttonHoverLink}>Обрати</button>
							</div>
							<img
								className={styles.boxMenuBg}
								src='https://tinypic.host/images/2023/12/09/ketchup.jpeg'
								alt=''
							/>
						</Link>
					</div>
				</div>
				<div className={styles.homePagePhotoBox}>
					<div className={styles.homePagePhoto}>
						<img
							src='https://tinypic.host/images/2023/12/08/IMG_2106.png'
							alt='photo_5438253935287719837_y.jpeg'
							border='0'
						/>
					</div>
					<div className={styles.homePagePhoto}>
						<img
							src='https://tinypic.host/images/2023/12/05/photo_5438253935287719857_y.jpeg'
							alt='photo_5438253935287719857_y.jpeg'
							border='0'
						/>
					</div>
					<div className={styles.homePagePhoto}>
						<h1>МИ ГАРАНТУЄМО</h1>
						<span className={styles.spanHover}></span>
						<h3>
							ваше замовлення буде<br/> приготоване з<br/> найсвіжіших інгрідієнтів<br/> та
							доставлено до вас в найкоротший<br/> термін!
						</h3>
					</div>
					<div className={styles.homePagePhoto}>
						<img
							src='https://tinypic.host/images/2023/12/05/photo_5438253935287719848_y.jpeg'
							alt='photo_5438253935287719848_y.jpeg'
							border='0'
						/>
					</div>
					<div className={styles.homePagePhoto}>
						<img
							src='https://tinypic.host/images/2023/12/05/photo_5438253935287719850_y.jpeg'
							alt='photo_5438253935287719850_y.jpeg'
							border='0'
						/>
					</div>
					<div className={styles.homePagePhoto}>
						<img
							src='https://tinypic.host/images/2023/12/05/DSC_0924_Original.jpeg'
							alt='DSC_0924_Original.jpeg'
							border='0'
						/>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	)
}
