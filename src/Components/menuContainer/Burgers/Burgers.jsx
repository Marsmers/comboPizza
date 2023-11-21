import burger from '../../../utils/Burgers'
import styles from'../Burgers/Burgers.module.css'


export default function Burgers() {

  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        {burger.map((burger, index) => (
          <div key={index} className={styles.card}>
            <div className={styles["img-card"]}>
              <img className={styles["card-img"]} src={burger.image} alt="" />
            </div>
            <h2>{burger.name}</h2>
            <p>Інгредієнти: {burger.ingredients.join(', ')}</p>
            <div className={styles.footerCard}>
              <h3>Ціна: {burger.price}</h3>
              <button><img className={styles.basketImgBtn} src="korz.png" alt="" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
