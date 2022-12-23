import { useState } from "react";
import styles from "./detailCarousel.module.scss";

const PAGE_WIDTH = 131
const Slide_Gap = 17
const Carusel = ({ children }) => {

   const [offset, setoffset] = useState([]);


   const handleclickarrowright = () => {
      setoffset((currentoffset) => {
         const newoffset = currentoffset - (PAGE_WIDTH + Slide_Gap)

         const maxoffset = -((PAGE_WIDTH + Slide_Gap) * (children.length - 4))

         console.log(maxoffset)
         return Math.max(newoffset, maxoffset)
      })
      if (offset === -((PAGE_WIDTH + Slide_Gap) * (children.length - 4))) {
         setoffset(0)
      };
   }
   const handleclickarrowleft = () => {

      setoffset((currentoffset) => {
         const newoffset = currentoffset + (PAGE_WIDTH + Slide_Gap)
         console.log(newoffset)
         return Math.min(newoffset, 0)
      })
   }


   return (
      <div className={styles.posrel}>
         <div className={styles.slidblock} style={{ width: `${(PAGE_WIDTH * 4) + (Slide_Gap * 3)}px` }}>
            <div
               className={styles.slidline}
               style={{
                  transform: `translateX(${offset}px)`,
                  display: 'flex',
                  flexDiraction: 'row',
                  gap: `${Slide_Gap}px`,

               }}
            >
               {children}
            </div>
            <button className={styles.left} onClick={handleclickarrowleft}><div><span></span><span></span><span></span></div></button>
            <button className={styles.right} onClick={handleclickarrowright}><div><span></span><span></span><span></span></div></button>
         </div>

      </div>
   )
}

export default Carusel