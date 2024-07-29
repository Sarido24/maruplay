import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counter-slice'


export default configureStore({
  reducer: {
    counter: counterReducer
  },
})