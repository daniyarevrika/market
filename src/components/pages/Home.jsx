import About from '../about/About';
import Slider from '../Slider/Slider';
import Welcome from '../Welcome/Welcome';

const Home = ({ CartInfo, setProduct, product, count, setCount }) => {

   const list1 = ['Скидки постоянным клиентам от 5%', 'Предлагаем самые выгодные цены', 'Наши покупатели всегда остаются довольны', 'Ширикий ассортимент товаров для всей семьи'];
   const list2 = ['Возможность доставки в любой город Беларуси', 'Пункты выдачи заказов рядом с домом'];

   return (
      <>
         <Welcome />
         <About
            list1={list1}
            list2={list2}
         />
         <Slider
            CartInfo={CartInfo}
            setProduct={setProduct}
            product={product}
            count={count}
            setCount={setCount}
         />
      </>
   )
}

export default Home;