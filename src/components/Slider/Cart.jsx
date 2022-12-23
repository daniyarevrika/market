import styles from "./Cart.module.scss";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setProduct } from "../../redux/slice/cartSlice";
import ButtonDet from "../button/buttonDet";
import { useState } from "react";
const Cart = ({ count, product, newprice, oldprice, name, button, id, CartInfo, url, }) => {
   const dispatch = useDispatch();


   const pushProduct = () => {
      const produc = CartInfo.find((i) => i.id === id)
      dispatch(setProduct(produc))
   }


   return (

      <div className={styles.cart}>
         <div className={styles.imgContant}>
            <img className={styles.img} src={url} alt="" />
         </div>
         <div className={styles.cartinfo}>
            <div className={styles.leftside}>
               <div className={styles.price}>
                  <div className={styles.newprice}>{newprice}.00 р</div>
                  <div className={styles.oldprice}>{oldprice} р</div>
               </div>
               <div className={styles.dressname}>{name}</div>
               <ButtonDet
                  button={button}
                  id={id}
                  // newprice={props.newprice}
                  // oldprice={props.oldprice}
                  // name={props.name}
                  // url={props.url}
                  // count={props.count}
                  // detail={props.detail}
                  CartInfo={CartInfo}

               />
            </div>
            <div className={styles.rightside}>
               <div className={styles.icons}>
                  <button onClick={() => pushProduct()}>
                     <img src="icons/favorite.svg" alt="" />
                  </button>
                  <button>
                     <img src="icons/Vector.svg" alt="" />
                  </button>
               </div>
               <div>
                  <FaStar style={{ width: '13px' }} />
                  <FaStar style={{ width: '13px' }} />
                  <FaStar style={{ width: '13px' }} />
                  <FaStar style={{ width: '13px' }} />
               </div>
            </div>
         </div>
      </div>

   )
}
export default Cart