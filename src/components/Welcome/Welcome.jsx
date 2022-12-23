// import mini from "icons/mini2.png";
// import big from "icons/big2.png";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.scss";

const Welcome = () => {
   return (
      <div className={styles.container}>
         <div className={styles.welcome}>
            <div className={styles.cocteil}>
               <div>
                  <img src="icons/mini2.png" alt=" " />
               </div>
               <div className={styles.title}>Добро пожаловать в <span>Cocteil</span></div>
            </div>
            <div>
               <img src="icons/big2.png" alt=" " />
            </div>
         </div>
         <div className={styles.text}>
            Экономим Ваше время!<br />
            Предлагаем лучшие цены!<br />
            Доставляем в кратчайшие сроки!<br />
         </div>
         <Link to='/Catalog'>
            <button className={styles.btn}>
               <span>Каталог</span>
               <div className={styles.arrow}>
                  <div>
                  </div>
               </div>
            </button></Link>
      </div>
   )
}
export default Welcome