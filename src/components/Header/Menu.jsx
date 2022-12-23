import styles from "./Menu.module.scss";
// import logo from "icons/logoneon.png"
const Menu = ({ open }) => {

   const name = ['Женщинам', 'Мужчинам', 'Детям', 'Обувь', 'Игрушки', 'Аксессуары', 'Большие размеры', 'Дополнительно', 'Акции'];
   const name2 = ['Майки', 'Костюмы', 'Брюки', 'Джинсы', 'Блузки и рубашки', 'Шорты', 'Юбки']

   return (
      <div className={`${styles.bg} ${styles.none} ${open ? styles.show : ''}`}>
         <img src="icons/logoneon.png" alt="" />
         <ul className={styles.modal}>
            {name.map((item) => {
               return <li>{item}</li>
            })}
         </ul>
      </div>
   )
}
export default Menu