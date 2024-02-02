import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../features/inputSlice'
import expandedReducer from '../features/expandedSlice'

export default configureStore({
  reducer: {
    input: inputReducer,
    expanded: expandedReducer
  }
})
