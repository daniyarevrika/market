import styles from "./About.module.scss";
// import messege from "icons/messege.svg";
const About = ({ list1, list2 }) => {

   return (
      <div className={styles.container}>
         <h4>Почему выбирают нас?</h4>
         <div className={styles.list}>
            <ul className={styles.firstrow}>
               {list1.map((i) => {
                  return <li>{i}</li>
               })}
            </ul>
            <ul className={styles.secondrow}>
               {list2.map((i) => {
                  return <li>{i}</li>
               })}
            </ul>
            <button className={styles.btn}><img src="icons/messege.svg" alt="" /></button>
         </div>
      </div>
   )
}
export default About