import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState =  {
 
  cart: [],
  total: 0,
  QTY: 1,
  buyer:[],
  farmer:[],
  isLoggedIn: false,
  loggedInUser: {},
  usersRole:""
}

export const slice = createSlice({
  name: 'nectarbuzz',
  initialState,
  reducers: {
    userResData: (state, {payload}) => {
      state.buyer = payload;
    },
    farmerResData: (state, {payload}) => {
      state.farmer = payload;
    }
  }
})

export const { 
  userResData,
  farmerResData
 } = slice.actions

export default slice.reducer