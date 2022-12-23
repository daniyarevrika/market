import styles from './Detail.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { setProduct } from '../../redux/slice/cartSlice';
import Carusel from '../DatailSlider/detailCarousel';



const Detail = ({ colorItems, sizeItems, CartInfo }) => {
   const dispatch = useDispatch();
   const Item = useSelector((state) => state.DetailSlice.item);

   React.useEffect(() => {
      window.scroll(0, 0)

   }, [])
   const pushProduct = () => {
      const product = Item[0]
      console.log(product)
      dispatch(setProduct(product))
   }
   const [activeUrl, setActiveUrl] = React.useState('')
   const clickUrl = (i) => {
      setActiveUrl(i)
      console.log(activeUrl)
   }


   return (
      <div className={styles.container} >
         <div>
            <button className={styles.back}></button>
            <div className={styles.path}></div>
         </div>
         <div className={styles.titleName}>Блузка женская </div>
         <div className={styles.detInfo}>
            <div>
               <div className={styles.activeImg}><img src={activeUrl || Item[0].detail[0]} alt="" /></div>
               <Carusel className={styles.carusel}>
                  {Item[0].detail.map((i) => (
                     <div id={i} onClick={() => clickUrl(i)}><img src={i} alt="" /></div>
                  ))}
               </Carusel>
               {/* <div><img src="icons/53dress2.jpg" alt="" /></div>
                  <div><img src="icons/54dress2.jpg" alt="" /></div>
                  <div><img src="icons/55dress2.jpg" alt="" /></div>
                  <div><img src="icons/56dress2.jpg" alt="" /></div>
                  <div><img src="icons/dress2detail.jpg" alt="" /></div> */}

            </div>
            <div>
               <div className={styles.price}>{Item[0].newprice} б.р.</div>
               <div>
                  <div className={styles.color}>Цвета</div>

                  <div className={styles.colorRow}>
                     {Item[0].colorType.map((i) => {
                        return <div id={i} style={{ background: `${colorItems.find((items) => items.item === i).color}` }} className={styles.circle}></div>
                     })}
                  </div>
               </div>
               <div className={styles.blockSize}>
                  <div className={styles.size}>Размер</div>
                  <div className={styles.sizeFlex}>
                     {Item[0].sizeType.map((i) => (
                        <div id={i} className={styles.sizeItems}>
                           <div className={styles.liter}>{sizeItems.find((items) => items.item === i).size}</div>
                           <div className={styles.num}>{sizeItems.find((items) => items.item === i).num}</div>
                        </div>
                     ))}
                  </div>
                  <button className={styles.openSize}>Таблица размеров</button>
               </div>

               <div className={styles.cartBlock}>
                  <button onClick={() => pushProduct()} className={styles.pushCart}>
                     <div className={styles.flex}>
                        <span>В корзину</span>
                        <img src="icons/favorite.svg" alt="" />
                     </div>
                  </button>
                  <button className={styles.heart}><img src="icons/Vector.svg" alt="" /></button>
               </div>
               <div></div>
               <div className={styles.feedback}>
                  <button className={styles.seefeedback}>Смотреть все отзывы</button>
                  <button className={styles.addFeedback}>Добавить отзыв</button>
               </div>
               <div className={styles.info}>
                  <div className={styles.description}>Описание</div>
                  <div className={styles.text}>{Item[0].artical}</div>
               </div>
            </div>
         </div>
      </div >
   )
}






export default Detail