import styles from './Catalog.module.scss'
import Cart from '../Slider/Cart'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCatigory, rangePrice, sortRangePrice, sortUp } from '../../redux/slice/sortslice'
import MultiRangeSlider from '../multiRangeSlider/multiRangeSlider'
const Catalog = ({ CartInfo }) => {

   // const [pricerange, setPriceRange] = React.useState([])
   const dispath = useDispatch();
   const sorted = useSelector((state) => state.sortslice.temp)
   const catigory = ['Все', 'Популярности', 'Рейтингу', 'Цене', 'Скидке', 'Обновлению']
   console.log(sorted.length)
   React.useEffect(() => {
      window.scroll(0, 0)
      setactivecatigory(0)
   }, [])



   const rangeprice = () => {
      dispath(sortRangePrice(sorted))
   }
   const [activecatigory, setactivecatigory] = React.useState()
   const onclickActive = (i) => {
      setactivecatigory(i)
      if (i === 3) {
         dispath(sortUp(sorted))
      }
      if (i === 0) {
         dispath(allCatigory(sorted))
         console.log(sorted)
      }
      console.log(activecatigory)
   }



   let priceArray = CartInfo.map(i => i.newprice)

   return (
      <div className={styles.container}>
         <div className={styles.href}></div>
         <div className={styles.titleName}>Блузки и рубашки для женщин</div>
         <div className={styles.filters}>
            <div className={styles.sort}>Сортировка по:</div>
            <div className={styles.filterTitle}>
               {catigory.map((item, i) => (
                  <button id={i} onClick={() => onclickActive(i)} className={activecatigory === i ? styles.active : styles.button}>{item}</button>
               ))}
            </div>
         </div>
         <div className={styles.main}>
            <div className={styles.flexelem}>
               <div className={styles.params}>
                  <div className={styles.price}>
                     <span>Цена, б.р</span>
                     <MultiRangeSlider
                        min={0}
                        max={Math.max.apply(null, priceArray)}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        activecatigory={activecatigory}
                     />
                  </div>
                  <div className={styles.size}>Размер</div>
                  <div className={styles.color}>Цвета</div>
                  <button onClick={() => rangeprice()} >Поиск</button>
                  <button className={styles.up}></button>
               </div>
            </div>
            <div className={styles.titles}>
               {sorted.length === 0 ? CartInfo.map((obj) => (

                  <Cart
                     count={obj.count}
                     // product={product}
                     newprice={obj.newprice}
                     oldprice={obj.oldprice}
                     name={obj.name}
                     button={obj.button}
                     id={obj.id}
                     // setProduct={setProduct}
                     CartInfo={CartInfo}
                     url={obj.url}
                  />


               )) : sorted.map((obj) => (

                  <Cart
                     count={obj.count}
                     // product={product}
                     newprice={obj.newprice}
                     oldprice={obj.oldprice}
                     name={obj.name}
                     button={obj.button}
                     id={obj.id}
                     // setProduct={setProduct}

                     url={obj.url}
                  />


               ))}
            </div>
         </div>
      </div>
   )
}
export default Catalog
// sorted.map((obj) => (

//    <Cart
//       count={obj.count}
//       // product={product}
//       newprice={obj.newprice}
//       oldprice={obj.oldprice}
//       name={obj.name}
//       button={obj.button}
//       id={obj.id}
//       // setProduct={setProduct}
//       CartInfo={CartInfo}
//       url={obj.url}
//    />


// ))