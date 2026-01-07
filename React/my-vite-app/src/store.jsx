import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './ReduxToolkit/ReduxSlicer.jsx'

export const store = configureStore({
  reducer: {
    counterRed: couterReducer,
  },
})