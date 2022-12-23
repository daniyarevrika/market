import styles from "./feedBack.module.scss"

const feedBack=()=>{
   return(
      <div className={styles.container}>
         <div>Отзывы наших покупателей</div>
         <div className={styles.slideblock}>
            <div className={styles.slideline}></div>
         </div>
         <button>Добавить отзыв</button>
      </div>
   )
}

export default feedBack