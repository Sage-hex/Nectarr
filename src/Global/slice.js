import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState = {
  cart: [],
  total: 0,
  QTY: 1,
  buyer: [],
  farmer: [],
  isLoggedIn: false,
  loggedInUser: {},
  usersRole: ""
}

export const slice = createSlice({
  name: 'nectarbuzz',
  initialState,
  reducers: {
    userResData: (state, { payload }) => {
      state.buyer = payload;
    },
    farmerResData: (state, { payload }) => {
      state.farmer = payload;
    },
    increaseQty: (state, { payload }) => {
      const array = state.cart.map((e) => {
        if (e.id == payload.id) {
          e.price
        } else {

        }
      })
    },
    decrementQTY: (state, { payload }) => {
      const array = state.cart.map((e) => {
        if (e.id == payload.id) {
          e.price
        } else {

        }
      })
    },
    deleteCart: (state, { payload }) => {
      const array = state.cart.filter((e) => e.id !== payload);
      state.cart = array;
    },
  }
})

export const {
  userResData,
  farmerResData,
  increaseQty,
  deleteCart,
  decrementQTY
} = slice.actions

export default slice.reducer