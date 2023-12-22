
import { Link } from 'react-router-dom';
import styles from '../Bucket/Succes.module.css';
import { useDispatch} from 'react-redux';
import { clearState } from '../../../Redux/Reducers';

export default function Succes() {
  // const order = useSelector((state) => state.counter.order);

  // const calculateTotalPrice = () => {
  //   return order.reduce((total, item) => {
  //     return total + item.Price * item.quantity;
  //   }, 0);
  // };

  const dispatch = useDispatch()

  const clearStore = () => {
    dispatch(clearState());
  };



  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <div className={styles.succes}>
          <div className={styles.textSucces}>
          <h2>Дякуємо за замовлення! ❤️</h2>
          <p>Ваше замовлення успішно прийнято.</p>
            <p>Ми працюємо над його виконанням.</p>
          <p>Дякуємо, що обрали нас!</p>
          </div>
          {/* {order.map(
                (
                  { Name, Price, quantity, Image, Size, hasCheeseCrust },
                  index
                ) => (
                  <div className={styles.bucketItem} key={index}>
                    <div className={styles.bucketItemStart}>
                      <img src={Image} alt="" />
                      <div className={styles.infoItem}>
                        <h4>{Name}</h4>
                        {Size ? <p>Розмір: {Size}</p> : ""}
                        <p>{hasCheeseCrust === true ? "Cирний бортик" : ""}</p>
                      </div>
                    </div>
                    <p className={styles.price}>{Price} грн</p>
                    <div className={styles.quantityBtn}>
                      <p className={styles.quantity}>{quantity} шт</p>
                    </div>
                    <p className={styles.totalPriceItem}>{Price * quantity} грн</p>
                  </div>
                )
              )}
              <div className={styles.totalPrice}>
                <p>Загальна вартість: {calculateTotalPrice()} грн</p>
              </div> */}
          <div>
          <button onClick={() => {clearStore()}} className={styles.goHomeBtn}>
              <Link to="/">На головну</Link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
