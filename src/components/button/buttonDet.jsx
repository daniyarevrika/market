import styles from './button.module.scss';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { detailOpen } from '../../redux/slice/DetailSlice';
import React from 'react';

const ButtonDet = ({ CartInfo, id, button }) => {
   const dispatch = useDispatch();



   const openDetail = () => {
      const item = CartInfo.find((i) => i.id === id)
      dispatch(detailOpen(item))
   }
   return (
      <Link to="/Detail">
         <button onClick={() => openDetail()} className={styles.btn} >
            <div className={styles.text}>{button}</div>
            <div className={styles.arrow}>
               <div>

               </div>
            </div>
         </button>
      </Link>
   )
}
export default ButtonDet;