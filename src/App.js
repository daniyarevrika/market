import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Card from './components/pages/Card';
import Home from './components/pages/Home';

import { Routes, Route } from "react-router-dom";
import Catalog from './components/pages/Catalog';
import Detail from './components/pages/Detail';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';



function App() {



    const CartInfo = [
        { detail: ['', ''], artical: 'фул хуита', sizeType: [1, 2, 4, 6], colorType: [1, 2], url: "icons/dress1.png", count: 1, id: 'qw', newprice: 570.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
        { detail: ['icons/dress2detail.jpg', 'icons/53dress2.jpg', 'icons/54dress2.jpg', 'icons/55dress2.jpg', 'icons/56dress2.jpg'], artical: 'фул хуита', sizeType: [3, 1, 4], colorType: [1, 2, 3], url: "icons/dress2.jpg", count: 1, id: 'we', newprice: 51.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
        { detail: ['', ''], artical: 'фул хуита', sizeType: [3, 2], colorType: [2, 5], url: "icons/dress3.jpg", count: 1, id: 'er', newprice: 52.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
        { detail: ['', ''], artical: 'фул хуита', sizeType: [6, 2, 1, 4], colorType: [3, 4], url: "icons/dress4.jpg", count: 1, id: 'rt', newprice: 600.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
        { detail: ['', ''], artical: 'фул хуита', sizeType: [1, 4], colorType: [1, 4, 5], url: "icons/dress5.jpg", count: 1, id: 'ty', newprice: 54.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
        { detail: ['', ''], artical: 'фул хуита', sizeType: [1, 2, 3, 4, 5, 6], colorType: [1, 2, 3, 4, 5], url: "icons/dress6.jpg", count: 1, id: 'yu', newprice: 55.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
        { detail: ['', ''], artical: 'фул хуита', sizeType: [3, 4, 5], colorType: [5], url: "icons/dress7.jpg", count: 1, id: 'ui', newprice: 53.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
    ];

    const colorItems = [
        { item: 1, color: "#FFFFFF" },
        { item: 2, color: "#000000" },
        { item: 3, color: "#1FA68E" },
        { item: 4, color: "#DC39CC" },
        { item: 5, color: "#FFF385" },
    ]
    const array = CartInfo.filter((i) => i.newprice >= 200 && i.newprice <= 580)

    console.log(array)
    // const colorItems = [
    //     "#FFFFFF",
    //     "#000000",
    //     "#1FA68E",
    //     "#DC39CC",
    //     "#FFF385",
    // ]
    const sizeItems = [
        { size: 'S', item: 1, num: 36 },
        { size: 'M', item: 2, num: 38 },
        { size: 'L', item: 3, num: 40 },
        { size: 'XL', item: 4, num: 42 },
        { size: '2XL', item: 5, num: 44 },
        { size: '3XL', item: 6, num: 46 },
    ]

    const [activemenu, setActivemenu] = useState(false);


    return (
        <div className="fonts" >

            <Header
                activemenu={activemenu}
                setActivemenu={setActivemenu}
            />
            <Routes>
                <Route path="/" element={<Home
                    CartInfo={CartInfo}
                // setProduct={setProduct}
                // product={product}

                />}

                />
                <Route path="/Card" element={<Card

                // product={product}

                />}
                />
                <Route path='/Catalog' element={<Catalog
                    CartInfo={CartInfo} />} />
                <Route path='/Detail' element={<Detail
                    colorItems={colorItems}
                    sizeItems={sizeItems}
                    CartInfo={CartInfo}
                />} />
            </Routes>

        </div>
    );
}

export default App;