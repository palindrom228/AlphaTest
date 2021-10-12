import { configureStore } from "@reduxjs/toolkit";
import cats from './cats'
const store = configureStore({
    reducer: {
        cats
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store