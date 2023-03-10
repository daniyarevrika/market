import styles from "./Card.module.scss";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { onMinus, removeItem, setProduct } from "../../redux/slice/cartSlice";


export const CardItem = (props) => {
   const dispatch = useDispatch();

   const onClickPlus = () => {
      dispatch(setProduct({
         id: props.id,
      }))
   }
   const onClickMinus = () => {
      dispatch(onMinus(props.id))
   }

   const remove = () => {
      dispatch(removeItem(props.id))
   }
   // const removeItem = () => {
   //    dispatch(removeItem(props.id))
   //    console.log(props.id)
   // }





   const total = props.count * props.newprice;



   return (
      <div className={styles.flexelem}>
         <div className={styles.leftside}>
            <img src={props.url} alt="" />

            <div className={styles.cartInfo}>
               <div className={styles.titleName}>женская блузка</div>
               <div className={styles.property}>
                  <div className={styles.color}>Цвет: серый</div>
                  <div className={styles.size}>Размер: 34</div>
               </div>
               <div className={styles.counter}>
                  <button onClick={onClickMinus}>-</button>
                  <input value={props.count} type="number" />
                  <button onClick={onClickPlus}>+</button>
               </div>
               <div className={styles.btn}>
                  <button >в избранное</button><button onClick={remove}>удалить</button>
               </div>
            </div>
         </div>
         <div className={styles.price}>
            <div>
               <div className={styles.priceTitle}>Стоимость</div>
               <div className={styles.num}>{total} р</div>
            </div>
            <button>информация о доставке</button>
         </div>
      </div>
   )
}

const Card = () => {

   const Items = useSelector((state) => state.cartSlice.product);

   const newarray = Items.map((obj) => obj.count)

   const amount = newarray.reduce((sum, current) => sum + current, 0)
   const total = Items.map((obj) => obj.newprice * obj.count)
   const totalPrice = total.reduce((sum, current) => sum + current, 0)
   return (
      <div className={styles.container}>
         <div>
            <div className={styles.pageName}>
               <button className={styles.back}></button>
               <h3>Корзина</h3>
               <div><svg width="24" height="27" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8893 5.66669V4.0278C11.8893 3.51711 11.7887 3.01141 11.5933 2.53959C11.3979 2.06777 11.1114 1.63906 10.7503 1.27795C10.3892 0.916829 9.96047 0.630375 9.48865 0.43494C9.01682 0.239505 8.51113 0.138916 8.00043 0.138916C7.48974 0.138916 6.98404 0.239505 6.51222 0.43494C6.0404 0.630375 5.61169 0.916829 5.25057 1.27795C4.88946 1.63906 4.603 2.06777 4.40757 2.53959C4.21213 3.01141 4.11154 3.51711 4.11154 4.0278V7.91669C4.11154 8.06404 4.17008 8.20534 4.27426 8.30953C4.37845 8.41372 4.51976 8.47225 4.6671 8.47225C4.81444 8.47225 4.95575 8.41372 5.05994 8.30953C5.16412 8.20534 5.22266 8.06404 5.22266 7.91669V6.7778H9.6671V5.66669H5.22266V4.0278C5.22266 3.29109 5.51531 2.58455 6.03625 2.06362C6.55718 1.54269 7.26372 1.25003 8.00043 1.25003C8.73715 1.25003 9.44368 1.54269 9.96462 2.06362C10.4856 2.58455 10.7782 3.29109 10.7782 4.0278V7.88892C10.7782 8.03626 10.8367 8.17757 10.9409 8.28175C11.0451 8.38594 11.1864 8.44447 11.3338 8.44447C11.4811 8.44447 11.6224 8.38594 11.7266 8.28175C11.8308 8.17757 11.8893 8.03626 11.8893 7.88892V6.7778H14.6671V16.7778H1.33377V6.7778H3.00043V5.66669H0.222656V16.8278C0.222656 17.1092 0.334451 17.3791 0.533448 17.5781C0.732445 17.7771 1.00234 17.8889 1.28377 17.8889H14.7171C14.9985 17.8889 15.2684 17.7771 15.4674 17.5781C15.6664 17.3791 15.7782 17.1092 15.7782 16.8278V5.66669H11.8893Z" fill="#121212" />
               </svg></div>
            </div>
            <div className={styles.product}>
               {Items.map((obj) => (
                  <CardItem

                     newprice={obj.newprice}
                     oldprice={obj.oldprice}
                     name={obj.name}
                     button={obj.button}
                     id={obj.id}
                     count={obj.count}
                     url={obj.url}
                  />
               ))}
            </div>
            <div className={styles.total}>
               <div className={styles.totalTitle}>Итого:</div>
               <div className={styles.totalPrice}>{totalPrice}</div>
               <div className={styles.amount}>Товары, {amount} шт.</div>
            </div>
         </div>
         <div>

         </div>
      </div>
   )
}

export default Card