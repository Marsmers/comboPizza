import FuncHotDog from '../../../func/FuncHotDog'
import styles from'../HotDog/HotDog.module.css'


export default function HotDog() {

  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <FuncHotDog/>
      </div>
    </div>
  )
}