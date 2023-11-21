import Appendices from '../../../utils/Appendices'
import  styles from '../Appendices/Appendices.module.css'








export default function Other() {
  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        {Appendices.map((Appendices, index) => (
          <div key={index} className={styles.card}>
            <div className={styles["img-card"]}>
              <img className={styles["card-img"]} src={Appendices.image} alt="" />
            </div>
            <h2>{Appendices.name}</h2>
            <p>{Appendices.description}</p>
            <div className={styles.footerCard}>
              <h3>Ціна: {Appendices.price}</h3>
              <button><img className={styles.basketImgBtn} src="korz.png" alt="" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}