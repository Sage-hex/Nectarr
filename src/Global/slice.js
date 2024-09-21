// import { createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-hot-toast'

// const initialState =  {
 
//   cart: [],
//   total: 0,
//   QTY: 0,
//   users:{
//     buyers:[],
//     farmers:[]
//   },
//   isLoggedIn: false,
//   loggedInUser: {},
//   usersRole:""
// }

// export const slice = createSlice({
  
//   name: 'Cart',
//   initialState,
//   reducers: {
//     addToCart: (state, { payload }) => {
//       const cartMap = new Map()
//       let findProduct = state.cart.find((product) => product.id === payload.id)
//       if (!findProduct) {
//         const newProduct = { ...payload, QTY: 1, totalPrice: payload.price }
//         return {
//           ...state,
//           cart: [...state.cart, newProduct]
//         }
//       } else {
//         findProduct.QTY += 1;
//         findProduct.totalPrice = payload.price * findProduct.QTY
//         state.cart.map((item) => {
//           cartMap.set(item.id, item)
//         })
//       }
      
//     },

//     deleteCart: (state, { payload }) => {
//       state.cart = state.cart.filter((e) => e?.id !== payload?.id)
//       state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);

//     },


//     incrementQty: (state, { payload }) => {
//       const item = state.cart.find(e => e.id === payload.id);
//       if (item) {
//         item.QTY += 1;
//         item.totalPrice = item.price * item.QTY;
//         state.total = state.cart.reduce((total, e) => total + e.totalPrice, 0);
//         state.totalQty = state.cart.reduce((qty, item) => qty + item.QTY, 0);
//       }
//     },


//     decrementQTY: (state, { payload }) => {
//       const checkItem = state.cart.findIndex((e) => e.id === payload.id);
//       if (state.cart[checkItem].QTY === 1) {
//         state.cart = state.cart.filter((e) => e.id !== payload.id);




//       } else {
//         state.cart.map((e) => {
//           if (e.id === payload.id) {
//             e.QTY -= 1;
//             e.totalPrice -= e.price

//           } else return e;
//         })
//       }
//       state.total = state.cart.reduce((p, e) => p + (e.QTY * e.price), 0)
//       state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);

//     },


    
//   },
// })

// export const { addToCart, deleteCart, incrementQty, decrementQTY } = slice.actions

// export default slice.reducer


import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  cart: [],
  total: 0,
  QTY: 0,
  users: {
    buyers: [],
    farmers: []
  },
  isLoggedIn: false,
  loggedInUser: {},
  usersRole: "",
};

export const slice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartMap = new Map();
      let findProduct = state.cart.find((product) => product.id === payload.id);
      if (!findProduct) {
        const newProduct = { ...payload, QTY: 1, totalPrice: payload.price };
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      } else {
        findProduct.QTY += 1;
        findProduct.totalPrice = payload.price * findProduct.QTY;
        state.cart.map((item) => {
          cartMap.set(item.id, item);
        });
      }
    },

    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((e) => e?.id !== payload?.id);
      state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);
    },

    incrementQty: (state, { payload }) => {
      const item = state.cart.find(e => e.id === payload.id);
      if (item) {
        item.QTY += 1;
        item.totalPrice = item.price * item.QTY;
        state.total = state.cart.reduce((total, e) => total + e.totalPrice, 0);
        state.totalQty = state.cart.reduce((qty, item) => qty + item.QTY, 0);
      }
    },

    decrementQTY: (state, { payload }) => {
      const checkItem = state.cart.findIndex((e) => e.id === payload.id);
      if (state.cart[checkItem].QTY === 1) {
        state.cart = state.cart.filter((e) => e.id !== payload.id);
      } else {
        state.cart.map((e) => {
          if (e.id === payload.id) {
            e.QTY -= 1;
            e.totalPrice -= e.price;
          } else return e;
        });
      }
      state.total = state.cart.reduce((p, e) => p + (e.QTY * e.price), 0);
      state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);
    },

    // Now Im geting farmer ID here
    setFarmerID: (state, { payload }) => {
      state.farmerID = payload;
    },
  },
});

export const { 
  addToCart, 
  deleteCart, 
  incrementQty, 
  decrementQTY, 
  setFarmerID // FarmerID
} = slice.actions;

export default slice.reducer;
