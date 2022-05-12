import {configureStore} from "@reduxjs/toolkit";
import interactionsReducer from './interactions'

export default configureStore({
  reducer: {
    interactions: interactionsReducer,
  }
})