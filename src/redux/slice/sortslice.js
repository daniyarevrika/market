import { createSlice } from "@reduxjs/toolkit";



const initialState = {
   item: [
      { detail: ['', ''], artical: 'фул хуита', sizeType: [1, 2, 4, 6], colorType: [1, 2], url: "icons/dress1.png", count: 1, id: 'qw', newprice: 570.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
      { detail: ['icons/dress2detail.jpg', 'icons/53dress2.jpg', 'icons/54dress2.jpg', 'icons/55dress2.jpg', 'icons/56dress2.jpg'], artical: 'фул хуита', sizeType: [3, 1, 4], colorType: [1, 2, 3], url: "icons/dress2.jpg", count: 1, id: 'we', newprice: 51.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
      { detail: ['', ''], artical: 'фул хуита', sizeType: [3, 2], colorType: [2, 5], url: "icons/dress3.jpg", count: 1, id: 'er', newprice: 52.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
      { detail: ['', ''], artical: 'фул хуита', sizeType: [6, 2, 1, 4], colorType: [3, 4], url: "icons/dress4.jpg", count: 1, id: 'rt', newprice: 600.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
      { detail: ['', ''], artical: 'фул хуита', sizeType: [1, 4], colorType: [1, 4, 5], url: "icons/dress5.jpg", count: 1, id: 'ty', newprice: 54.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
      { detail: ['', ''], artical: 'фул хуита', sizeType: [1, 2, 3, 4, 5, 6], colorType: [1, 2, 3, 4, 5], url: "icons/dress6.jpg", count: 1, id: 'yu', newprice: 55.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
      { detail: ['', ''], artical: 'фул хуита', sizeType: [3, 4, 5], colorType: [5], url: "icons/dress7.jpg", count: 1, id: 'ui', newprice: 53.00, oldprice: "65.00 ", name: "Блузка женская классная", button: "Подробнее" },
   ],
   sliderRange: [],
   temp: []
}

export const sortSlice = createSlice({
   name: 'sort',
   initialState,
   reducers: {
      sortDown(state, action) {
         state.item.sort((a, b) => a.newprice - b.newprice)

      },
      sortUp(state, action) {
         state.temp = JSON.parse(JSON.stringify(state.item));
         state.temp.sort((a, b) => b.newprice - a.newprice)

      },
      allCatigory(state, action) {
         state.temp = JSON.parse(JSON.stringify(state.item));
      },
      rangePrice(state, action) {
         state.sliderRange = action.payload
         // if (state.sliderRange.length) {
         //    state.item.filter((i) => state.sliderRange[0] <= i.newprice <= state.sliderRange[1])
         // }
      },
      sortRangePrice(state, action) {

         state.temp = state.item.filter((i) => i.newprice >= state.sliderRange[0] && i.newprice <= state.sliderRange[1])



      }
   },
});

export const { sortDown, sortUp, rangePrice, sortRangePrice, allCatigory } = sortSlice.actions;
export default sortSlice.reducer;