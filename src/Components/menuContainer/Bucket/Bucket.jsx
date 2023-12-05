import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, deleteOrder } from '../../../Redux/Reducers';
import styles from '../Bucket/Bucket.module.css';

function Bucket() {
  const order = useSelector((state) => state.counter.order);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickupSelected, setIsPickupSelected] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [additionalNote, setAdditionalNote] = useState('');

  const handleIncrement = (index) => {
    dispatch(incrementQuantity({ index }));
  };

  const handleDecrement = (index) => {
    dispatch(decrementQuantity({ index }));
  };

  const calculateTotalPrice = () => {
    return order.reduce((total, item) => {
      return total + item.Price * item.quantity;
    }, 0);
  };

  const handleRemove = (index) => {
    dispatch(deleteOrder(index));
  };

  const sendOrderToTelegram = async () => {
    const telegramBotToken = '6758664833:AAH4qB8rvdWuG8YsxrGY0M6mcNucS4gBzK8';
    const telegramChatId = '-1002071911402'; 
    const currentTime = new Date().toLocaleTimeString();
    const deliveryInfo = isPickupSelected
      ? 'Самовивіз'
      : `Доставка:\nАдреса: ${deliveryAddress}\nЧас Доставки: ${deliveryTime}\nКоментар: ${additionalNote}`;
    const message = `
    Нове замовлення:
    Ім'я: ${name}
    Номер телефону: ${phoneNumber}
    Загальна вартість: ${calculateTotalPrice()} грн

    Товари:
    ${order.map(item => `
      - ${item.Name}
        * Розмір: ${item.Size}
        * Сирний бортик: ${item.hasCheeseCrust ? 'Так' : 'Ні'}
        * Кількість: ${item.quantity} шт.
        * Ціна: ${item.Price * item.quantity} грн
    `).join('\n')}

    ${deliveryInfo}

    Час замовлення: ${currentTime}
  `;

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
      );

      const result = await response.json();
      console.log('Замовлення відправлено в Telegram:', result);
    } catch (error) {
      console.error('Помилка відправки замовлення в Telegram:', error);
    }
  };

  const handlePickup = () => {
    setIsPickupSelected(true);
  };

  const handleDelivery = () => {
    setIsPickupSelected(false);
  };

  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <div className={styles.leftPage}>
          <div className={styles.containerleftPage}>
            <h1>Ваше замовлення</h1>
            {order.map(({ Name, Price, quantity, Image, Size, hasCheeseCrust }, index) => (
              <div className={styles.bucketItem} key={index}>
                <div className={styles.bucketItemStart}>
                  <img src={Image} alt="" />
                  <div className={styles.infoItem}>
                    <h3>{Name}</h3>
                    <p>Розмір: {Size}</p>
                    <p>{hasCheeseCrust === true ? 'Cирний бортик' : ''}</p>
                  </div>
                </div>
                <div className={styles.quantityBtn}>
                  <button onClick={() => { handleDecrement(index) }}>-</button>
                  <p>{quantity}</p>
                  <button onClick={() => { handleIncrement(index) }}>+</button>
                </div>
                <p>{Price} грн</p>
                <button className={styles.btnDelete} onClick={() => handleRemove(index)}>
                  x
                </button>
              </div>
            ))}
            <div className={styles.totalPrice}>
              <p>Загальна вартість: {calculateTotalPrice()} грн</p>
            </div>
          </div>
        </div>
        <div className={styles.rightPage}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Номер телефону"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className={styles.deliveryBtn}>
            <button
              className={`${styles.leftBtnDelyv} ${isPickupSelected ? styles.active : ''}`}
              onClick={handlePickup}
            >
              Самовивіз
            </button>
            <button
              className={`${styles.rightBtnDelyv} ${!isPickupSelected ? styles.active : ''}`}
              onClick={handleDelivery}
            >
              Доставка
            </button>
          </div>
          {!isPickupSelected && (
            <div className={styles.rightPageDelyvery}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Адреса доставки"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              />
              <input
                type="time"
                name=""
                id=""
                placeholder="Час доставки"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
              <textarea
                placeholder="Коментар..."
                value={additionalNote}
                onChange={(e) => setAdditionalNote(e.target.value)}
              />
            </div>
          )}
          <button className={styles.btnBucket} onClick={sendOrderToTelegram}>
            Замовити
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bucket;
