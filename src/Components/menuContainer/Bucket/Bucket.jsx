import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	decrementQuantity,
	incrementQuantity,
	deleteOrder,
} from '../../../Redux/Reducers'
import styles from '../Bucket/Bucket.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Bucket() {
	const order = useSelector(state => state.counter.order)
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [pay, setPay] = useState('Готівка')
	const [isPickupSelected, setIsPickupSelected] = useState(true)
	const [deliveryAddress, setDeliveryAddress] = useState('')
	const [deliveryTime, setDeliveryTime] = useState('')
	const [additionalNote, setAdditionalNote] = useState('')
	const navigate = useNavigate()
	console.log(isPickupSelected)
	const handleIncrement = index => {
		dispatch(incrementQuantity({ index }))
	}

	const handleDecrement = index => {
		dispatch(decrementQuantity({ index }))
	}

	const handleRemove = index => {
		dispatch(deleteOrder(index))
	}

	const calculateTotalPrice = () => {
		return order.reduce((total, item) => {
			return total + item.Price * item.quantity
		}, 0)
	}

	const handleDeliveryItem = (isPickupSelected, total) => {
		let result = ''

		if (!isPickupSelected && total >= 400) {
			result = 'Загальна вартість: ' + total + ' грн (безкоштовна доставка)'
		} else if (!isPickupSelected && total < 400) {
			result = `Загальна вартість: ${total + 50} грн (доставка + 50 грн)`
		} else if (isPickupSelected) {
			result = `Загальна вартість: ${total} грн `
		}

		return result
	}

	const sendOrderToTelegram = async () => {
		const telegramBotToken = '6758664833:AAH4qB8rvdWuG8YsxrGY0M6mcNucS4gBzK8'
		const telegramChatId = '-1002071911402'
		const currentTime = new Date().toLocaleTimeString()
		const total = calculateTotalPrice()
		const deliveryInfo = isPickupSelected
			? 'Самовивіз'
			: `Доставка:\n Адреса: -${deliveryAddress} \n\n Час Доставки: -${deliveryTime}\n\n Коментар: -${additionalNote}`
		const totalMessage = await handleDeliveryItem(isPickupSelected, total)
		const message = `
  Нове замовлення:
  Ім'я: ${name}
  Номер телефону: ${phoneNumber}
  ${totalMessage}
  Спосіб оплати: ${pay}
  
  Товари:${order
		.map((item, index) => {
			const sizeInfo = item.Size ? `\n   Розмір: ${item.Size}` : ''
			const crustInfo = item.hasCheeseCrust
				? `\n   Сирний бортик: ${item.hasCheeseCrust ? 'Так' : 'Ні'}`
				: ''
			const separator = index === order.length ? '' : '\n'
			return `\n - ${item.Name}${sizeInfo}${crustInfo}\n   Кількість: ${
				item.quantity
			} шт.\n   Ціна: ${item.Price * item.quantity} грн${separator}`
		})
		.join('')}
   ${deliveryInfo}
  \n Час замовлення: ${currentTime}
  `

		console.log(message)

		try {
			const response = await fetch(
				`https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: telegramChatId,
						text: message,
					}),
				}
			)

			const result = await response.json()
			console.log('Замовлення відправлено в Telegram:', result)
		} catch (error) {
			console.error('Помилка відправки замовлення в Telegram:', error)
		}
	}

	const handlePickup = () => {
		setIsPickupSelected(true)
	}

	const handleDelivery = () => {
		setIsPickupSelected(false)
	}

	return (
		<>
			<div className={styles.toaster}>
				<Toaster position='top-center' reverseOrder={true} />
			</div>
			<div className={styles.cons}>
				<div className={styles.coco}>
					<div className={styles.leftPage}>
						<div className={styles.containerleftPage}>
							<h1>Ваше замовлення 🛒</h1>
							{order.map(
								(
									{ Name, Price, quantity, Image, Size, hasCheeseCrust },
									index
								) => (
									<div className={styles.bucketItem} key={index}>
										<div className={styles.bucketItemStart}>
											<img src={Image} alt='' />
											<div className={styles.infoItem}>
												<h4>{Name}</h4>
												{Size ? <p>Розмір: {Size}</p> : ''}
												<p>{hasCheeseCrust === true ? 'Cирний бортик' : ''}</p>
											</div>
										</div>
										<div className={styles.quantityBtn}>
											<button
												onClick={() => {
													handleDecrement(index)
												}}
											>
												-
											</button>
											<p className={styles.quantity}>{quantity}</p>
											<button
												onClick={() => {
													handleIncrement(index)
												}}
											>
												{' '}
												+{' '}
											</button>
										</div>
										<p className={styles.price}>{Price} грн</p>
										<button
											className={styles.btnDelete}
											onClick={() => handleRemove(index)}
										>
											{' '}
											x{' '}
										</button>
									</div>
								)
							)}
							<div className={styles.totalPrice}>
								{' '}
								{handleDeliveryItem(isPickupSelected, calculateTotalPrice())}
							</div>
						</div>
						{!isPickupSelected ? (
							<p style={{ color: 'white' }}>
								{' '}
								безкоштовна доставка від 400 грн
							</p>
						) : (
							''
						)}
					</div>
					<div className={styles.rightPage}>
						<input
							className={styles.inputRight}
							type='text'
							name='name'
							id=''
							placeholder="Ім'я"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<input
							className={styles.inputRight}
							type='tel'
							name='phone'
							id=''
							placeholder='Номер телефону'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
						/>
						<textarea
							placeholder='Коментар...'
							value={additionalNote}
							onChange={e => setAdditionalNote(e.target.value)}
						/>
						<div className={styles.PayBtn}>
							<button
								className={`${styles.leftBtnPay} ${
									pay === 'Готівка' ? styles.active : ''
								}`}
								onClick={() => setPay('Готівка')}
							>
								Готівка
							</button>
							<button
								className={`${styles.rightBtnPay} ${
									pay === 'Банківська карта' ? styles.active : ''
								}`}
								onClick={() => setPay('Банківська карта')}
							>
								{' '}
								Банківська карта{' '}
							</button>
						</div>
						<div className={styles.deliveryBtn}>
							<button
								className={`${styles.leftBtnDelyv} ${
									isPickupSelected ? styles.active : ''
								}`}
								onClick={() => {
									handlePickup(),
										handleDeliveryItem(isPickupSelected, calculateTotalPrice())
								}}
							>
								{' '}
								Самовивіз{' '}
							</button>
							<button
								className={`${styles.rightBtnDelyv} ${
									!isPickupSelected ? styles.active : ''
								}`}
								onClick={() => {
									handleDelivery(),
										handleDeliveryItem(isPickupSelected, calculateTotalPrice())
								}}
							>
								{' '}
								Доставка{' '}
							</button>
						</div>
						{!isPickupSelected && (
							<div className={styles.rightPageDelyvery}>
								<input
									className={styles.inputRight}
									type='text'
									name=''
									id=''
									placeholder='Адреса доставки'
									value={deliveryAddress}
									onChange={e => setDeliveryAddress(e.target.value)}
								/>

								<div className={styles.timeDiv}>
									<p className={styles.timeText} style={{ color: 'white' }}>
										Час доставки :
									</p>

									<input
										className={styles.timeInput}
										type='time'
										name=''
										id=''
										placeholder='Час доставки'
										value={deliveryTime}
										onChange={e => setDeliveryTime(e.target.value)}
									/>
								</div>
							</div>
						)}
						<button
							className={styles.btnBucket}
							onClick={() => {
								// Видаляємо пробіли з номеру телефону перед перевіркою
								const cleanedPhoneNumber = phoneNumber.replace(/\s/g, '')

								// Перевірка формату номеру телефону
								const phoneNumberRegex =
									/^(\+380|\+38|0)?\(?(\d{2})\)?[-.\s]?(\d{3})[-.\s]?(\d{2})[-.\s]?(\d{2})$/
								const isValidPhoneNumber =
									phoneNumberRegex.test(cleanedPhoneNumber)

								// Перевірка, що корзина не порожня
								const isCartNotEmpty = order.length > 0

								// Перевірка, що сума не дорівнює 0
								const totalAmount = calculateTotalPrice()
								const isAmountNotZero = totalAmount !== 0

								// Перевірка усіх умов перед подачею замовлення
								if (isValidPhoneNumber && isCartNotEmpty && isAmountNotZero) {
									sendOrderToTelegram()
									toast.success('Дякуємо за замовлення')

									setTimeout(() => {
										navigate('/Succes')
									}, 1000)
								} else {
									// Вивід повідомлення про помилку, якщо є невідповідність умовам
									if (!isValidPhoneNumber) {
										toast.error('Будь ласка, введіть номер телефону.')
									}

									if (!isCartNotEmpty && !isAmountNotZero) {
										toast.error('Корзина не може бути порожньою.')
									}
								}
							}}
						>
							Замовити
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Bucket
