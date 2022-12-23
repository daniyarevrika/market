import { useState } from "react";
import styles from "./Carusel.module.scss";

const PAGE_WIDTH = 22.3
const Carusel = ({ children }) => {

   const [offset, setoffset] = useState([]);


   const handleclickarrowright = () => {
      setoffset((currentoffset) => {
         const newoffset = currentoffset - 66.9

         const maxoffset = -(PAGE_WIDTH * (children.length - 3))

         console.log(newoffset)
         return Math.max(newoffset, maxoffset)
      })
      if (offset == -(PAGE_WIDTH * (children.length - 3))) {
         setoffset(0)
      };
   }
   const handleclickarrowleft = () => {

      setoffset((currentoffset) => {
         const newoffset = currentoffset + 66.9
         console.log(newoffset)
         return Math.min(newoffset, 0)
      })
   }


   return (
      <div className={styles.posrel}>
         <div className={styles.slidblock} style={{ width: `${PAGE_WIDTH * 3}rem` }}>
            <div
               className={styles.slidline}
               style={{
                  transform: `translateX(${offset}rem)`,
               }}
            >
               {children}
            </div>
         </div>
         <button className={styles.left} onClick={handleclickarrowleft}></button>
         <button className={styles.right} onClick={handleclickarrowright}></button>
      </div>
   )
}

export default Carusel