
import FuncDrink from '../../../func/FuncDrink'
import styles from'../Drinks/Drinks.module.css'


export default function Drinks() {

  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <FuncDrink/>
      </div>
    </div>
  )
}