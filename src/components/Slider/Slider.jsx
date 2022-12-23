import styles from "./Slider.module.scss";
import Cart from "./Cart";
import Carusel from "./Carusel";

const Slider = ({ CartInfo, setProduct, product }) => {

   // const [Item, setItem] = useState([]);
   // React.useEffect(() => {
   //    setItem(CartInfo)
   // }, [])




   return (


      <div className={styles.container}>
         <div className={styles.title}>Успей купить! </div>
         <div className={styles.sale}>Акции</div>

         <Carusel>
            {CartInfo.map((obj) => (
               <div className={styles.gap}>
                  <div className={styles.hoveffect}>
                     <Cart
                        count={obj.count}
                        product={product}
                        newprice={obj.newprice}
                        oldprice={obj.oldprice}
                        name={obj.name}
                        button={obj.button}
                        id={obj.id}
                        setProduct={setProduct}
                        CartInfo={CartInfo}
                        url={obj.url}
                     />
                  </div>
               </div>

            ))}
         </Carusel>

      </div>
   )
}


export default Slider

