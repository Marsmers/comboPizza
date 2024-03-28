import styles from './Footer.module.css'
export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.leftFooter}>
				<div className={styles.heightLeftFooter}>
					<img
						className={styles.logoFooter}
						src='/public/Logokombo.png'
						alt=''
					/>
					<p className={styles.InfoFooter}>
						<span className={styles.strongFontFooter}> Наші кебаби -</span> це
						смачне поєднання ніжного мʼяса та ароматних приправ, <br />
						піца приготовується з гарячого хрусткого тіста та смачної начинки.
						<br />
						<span className={styles.strongFontFooter}>Бургери -</span>
						нашого власного виробництва вражають своїм смаком. <br />
						<span className={styles.strongFontFooter}>Хот-доги -</span>
						це справжня класика швидкого харчування. <br />
						<span className={styles.strongFontFooter}>Снеки -</span>
						доповнюють ваше замовлення додатковими смачними опціями.
					</p>
				</div>
				<div className={styles.downLeftFooter}>
					<p className={styles.headerPhone}>
						<a href='tel:+380-66-051-82-46'>
							<span className={styles.colorTextPhone}>+38 066</span> 051 82 46
						</a>
					</p>
					<p className={styles.headerInfoTime}>
						Графік роботи з 10:00 до 22:00
					</p>
				</div>
					<div className={styles.links}>
						<a
							className={styles.linkTikTok}
							href='https://www.tiktok.com/@kombo_kebab'
						>
							<img src='tiktok.png' alt='' />
						</a>
						<a
							className={styles.linkInst}
							href='https://www.instagram.com/kombo_kebab/'
						>
							<img src='instagram.png' alt='' />
						</a>
					</div>
			</div>
			<div className={styles.maps}>
				<iframe
					className={styles.googleMaps}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.930500183223!2d23.8436132!3d49.2587632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a6a02c0f4e9ed%3A0x862c1699b4bce246!2z0L_RgNC-0YHQv9C10LrRgiDQkifRj9GH0LXRgdC70LDQstCwINCn0L7RgNC90L7QstC-0LvQsCwgOSwg0KHRgtGA0LjQuSwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA4MjQwMA!5e0!3m2!1suk!2sua!4v1702407807656!5m2!1suk!2sua'
					loading='lazy'
				></iframe>
			</div>
		</div>
	)
}
