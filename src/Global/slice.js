import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState =  {
 
  cart: [],
  total: 0,
  QTY: 0,
  users:{
    buyers:[],
    farmers:[]
  },
  isLoggedIn: false,
  loggedInUser: {},
  usersRole:""
}

export const featuresSlice = createSlice({
  
  name: 'EcoHarvest',
  initialState,
  reducers: {},
})

// export const {  } = slice.actions

export default featuresSlice.reducer