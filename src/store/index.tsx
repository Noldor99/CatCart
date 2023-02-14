import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
 
import { todoReducer } from './redusers/todoSlice'
 

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(catApi.middleware)
})

setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>