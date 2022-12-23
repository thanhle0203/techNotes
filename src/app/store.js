import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlide } from './api/apiSlice'

export const store = configureStore({
    reducer: {
      [apiSlide.reducerPath]: apiSlide.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlide.middleware),
    
    devTools: true
}
)