import { configureStore } from '@reduxjs/toolkit'

import slice from "./slice";
import { thunk } from "redux-thunk";
import {FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist'
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig,slice)


  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER ]
        }
    }).concat(thunk),
})


export const persistor =persistStore(store)