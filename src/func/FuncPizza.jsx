import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { bucket } from '../Redux/Reducers'
import styles from '../Components/menuContainer/Pizza/Pizza.module.css'
import toast, { Toaster } from 'react-hot-toast'

const Func = () => {
	const [pizza, setPizza] = useState([])
	const [currentPage, setCurrentPage] = useState(0)
	const [totalPages, setTotalPages] = useState(0)
	const [pizzaSizes, setPizzaSizes] = useState({ Size: '35см' })
	const [cheeseCrusts, setCheeseCrusts] = useState({})
	const order = useSelector(state => state.counter.order)
	const dispatch = useDispatch()
	const cheeseCrustPrice = { '35см': 60, '47см': 90 }
	useEffect(() => {
		axios
			.get(
				'https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=0&productType=PIZZA&size=8'
			)
			.then(response => {
				setPizza(response.data.data)
				setTotalPages(response.data.totalPages)
				const defaultSizes = {}
				const defaultCheeseCrusts = {}
				response.data.data.forEach((_, index) => {
					defaultSizes[index] = '35см'
					defaultCheeseCrusts[index] = false
				})
				setPizzaSizes(defaultSizes)
				setCheeseCrusts(defaultCheeseCrusts)
			})
			.catch(error => {
				console.error('Помилка отримання даних:', error)
			})
	}, [])

	const handleSizeChange = (index, size) => {
		setPizzaSizes(prevSizes => ({ ...prevSizes, [index]: size }))
	}

	const handleCheeseCrustChange = index => {
		setCheeseCrusts(prevCheeseCrusts => ({
			...prevCheeseCrusts,
			[index]: !prevCheeseCrusts[index],
		}))
	}

	const setOrder = (Name, Id, Price, Image, Size, hasCheeseCrust) => {
		const existingItem = order.find(
			item =>
				item.Id === Id &&
				item.Size === Size &&
				item.hasCheeseCrust === hasCheeseCrust
		)

		if (existingItem) {
			dispatch(
				bucket(
					order.map(item =>
						item.Id === Id &&
						item.Size === Size &&
						item.hasCheeseCrust === hasCheeseCrust
							? { ...item, quantity: item.quantity + 1 }
							: item
					)
				)
			)
		} else {
			dispatch(
				bucket([
					...order,
					{
						Name,
						Id,
						Price: Price + (hasCheeseCrust ? cheeseCrustPrice[Size] : 0),
						Image,
						Size,
						quantity: 1,
						hasCheeseCrust,
					},
				])
			)
		}
	}

	const loadMorePizza = () => {
		if (currentPage < totalPages - 1) {
			const nextPage = currentPage + 1
			axios
				.get(
					`https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=${nextPage}&productType=PIZZA&size=8`
				)
				.then(response => {
					setPizza(prevPizza => [...prevPizza, ...response.data.data])
					setCurrentPage(nextPage)
					setTotalPages(response.data.totalPages)
					const defaultSize = { ...pizzaSizes }
					const defaultCheeseCrusts = { ...cheeseCrusts }
					pizza.forEach((_, index) => {
						defaultSize[index] = '35см'
						defaultCheeseCrusts[index] = false
					})
					setPizzaSizes(defaultSize)
					setCheeseCrusts(defaultCheeseCrusts)
					console.log(response.data)
				})
				.catch(error => {
					console.error('Помилка отримання даних:', error)
				})
		}
	}

	useEffect(() => {
		const defaultSizes = pizza.map(() => '35см')
		setPizzaSizes(defaultSizes)
	}, [pizza])

	const pizzaPrice = (size, pizza) => {
		return size === '35см' ? pizza.price+10 : pizza.productVariants[0].price+10;
	}

	return (
		<>
			<div className={styles.toaster}>
				<Toaster position='top-center' reverseOrder={true} />
			</div>
			{pizza.map((pizza, index) => (
				<div key={index} className={styles.card}>
					<div className={styles['img-card']}>
						<img
							className={styles['card-img']}
							src={pizza.mainImageUrl}
							alt='доставка комбо піца Стрий'
						/>
					</div>
					<div className={styles.cardText}>
						<h2 className={styles.pizzaName}>{pizza.name}</h2>
						<span className={styles.pizzaSpan}></span>
						<p className={styles.ingredients}>
							{' '}
							{pizza.ingredients.join(', ')}
						</p>
					</div>
					<div className={styles.footerCard}>
						<div className={styles.sizeBtn}>
							<button
								className={`${styles.btnSizeLeft} ${
									pizzaSizes[index] === '35см' ? styles.active : ''
								}`}
								onClick={() => handleSizeChange(index, '35см')}
							>
								35см
							</button>

							<button
								className={`${styles.btnSizeRigth} ${
									pizzaSizes[index] === '47см' ? styles.active : ''
								}`}
								onClick={() => handleSizeChange(index, '47см')}
							>
								47см
							</button>
						</div>
						<button
							className={`${styles.btnCheeseCrust} ${
								cheeseCrusts[index] ? styles.active : ''
							}`}
							onClick={() => handleCheeseCrustChange(index)}
						>
							Сирний бортик
						</button>
						<div className={styles.footerBottom}>
							<h3 className={styles.cardFooterPrice}>
								{pizzaSizes[index] === '47см'
									? pizzaPrice('47см', pizza) +
								(cheeseCrusts[index] ? cheeseCrustPrice['47см'] : 0)
									: pizzaPrice('35см', pizza) +
								(cheeseCrusts[index] ? cheeseCrustPrice['35см'] : 0)}{' '}
								грн
							</h3>
							<button
								className={styles.btnOrder}
								onClick={() =>
									setOrder(
										pizza.name,
										pizza.id,
										pizzaPrice(pizzaSizes[index], pizza),
										pizza.mainImageUrl,
										pizzaSizes[index],
										cheeseCrusts[index],
										index,
										toast.success(`${pizza.name} \nДодано в кошик`)
									)
								}
							>
								<img className={styles.basketImgBtn} src='корзина.png' alt='' />
							</button>
						</div>
					</div>
				</div>
			))}
			{currentPage < totalPages - 1 && (
				<button className={styles.BtnNextPage} onClick={loadMorePizza}>
					Показати ще
				</button>
			)}
		</>
	)
}

export default Func
