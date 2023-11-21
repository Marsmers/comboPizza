import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, deleteOrder } from '../../../Redux/Reducers';
import styles from '../Bucket/Bucket.module.css';

function Bucket() {
  const order = useSelector((state) => state.counter.order);
  const dispatch = useDispatch();

  console.log(order);
  // Додавання кількості або зменшення
  const handleIncrement = (index) => {
    dispatch(incrementQuantity({ index }));
  };

  const handleDecrement = (index) => {
    dispatch(decrementQuantity({ index }));
  };

  // Функція для підрахунку загальної вартості замовлення
  const calculateTotalPrice = () => {
    return order.reduce((total, item) => {
      return total + item.Price * item.quantity;
    }, 0);
  };

  // Функція для видалення замовлення
  const handleRemove = (index) => {
    dispatch(deleteOrder(index));
  };

  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <div className={styles.leftPage}>
          <div className={styles.containerleftPage}>
            <h1>Ваше замовлення</h1>
            {order.map(({ Name, Price, quantity, Image, Size }, index) => (
              <div className={styles.bucketItem} key={index}>
                <div className={styles.bucketItemStart}>
                  <img src={Image} alt="" />
                  <h3>{Name}</h3>
                  <p>Розмір: {Size}</p>
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
          <input type="text" name="" id="" placeholder="Ім'я" />
          <input type="text" name="" id="" placeholder="Номер телефону" />
          <div className={styles.deliveryBtn}>
            <button className={styles.leftBtnDelyv}>Самовивіз</button>
            <button className={styles.rightBtnDelyv}>Доставка</button>
          </div>
          <button className={styles.btnBucket}>Замовити</button>
        </div>
      </div>
    </div>
  );
}

export default Bucket;
