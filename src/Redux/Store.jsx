/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/'

export default configureStore ({
  reducer: {
    counter: counterReducer,
  }
})