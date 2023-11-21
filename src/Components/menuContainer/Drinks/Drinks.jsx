import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../Drinks/Drinks.module.css'




export default function Pizza() {
  const [drinks, setDrinks] = useState([]);
  const [, setPage] = useState(' ');


  useEffect(() => {
    axios.get("http://localhost:8080/public/product?direction=ASC&field=name&page=0&productType=DRINK&size=8")
      .then(response => {
        setDrinks(response.data.data);
        setPage(response.data.totalPages)
      })
      .catch(error => {
        console.error("Помилка отримання даних:", error);
      });
  }, []);
  console.log(drinks);


  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        {drinks.map(drink => (
          <div key={drink.id} className={styles.card}>
            <div className={styles["img-card"]}>
              <img className={styles["card-img"]} src={drink.mainImageUrl} alt="" />
            </div>
            <h2>{drink.name}</h2>
            <p>Об`єм: {drink.volume}</p>
            <div className={styles.footerCard}>
              <h3>Ціна: {drink.price}</h3>
              <button><img className={styles.basketImgBtn} src="korz.png" alt="" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}