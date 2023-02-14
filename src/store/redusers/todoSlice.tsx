import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { catFetch } from "../../services/dataServices";
import { VerificationList } from "../../utils/VerificationList";


export type TComent = {
  id: number,
  name: string,
  checked: boolean
}

export type TCurrentItems = {
  idList: number,
  nameList: string,
  checkedList: boolean,
  urlCat?: string,
  coment: TComent[]
}

export interface todoState{
  items: TCurrentItems[],
  url: string,
  loading: boolean
}

const initialState:todoState = {
  items:[ {idList: 1, nameList: 'Next', checkedList: false,
      urlCat: 'https://cdn2.thecatapi.com/images/MTYxNTg5MA.jpg',
      coment: [
    {id:1, name: 'simple', checked: true},
    {id:2, name: 'next', checked: false}
  ]}
  ],
  url: '',
  loading: false
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers:{ 
    addTodo(state, action:PayloadAction<number>){
      const item = {
        id: Date.now(),
        name: "Simple",
        checked: true,
      }
      const findList:any = state.items.find((item)=>item.idList === action.payload)
      findList.coment.push(item)
        
      },
      updateTodo(state, action){
      const findList:any = state.items.find((item)=>item.idList === action.payload.idList)
      const findItem = findList.coment.find((item:TComent)=>item.id === action.payload.id)
      if(action.payload.name){
        findItem.name = action.payload.name 
      } 
      if(!action.payload.checked || action.payload.checked){
        console.log(action.payload.checked)
        findItem.checked = action.payload.checked 
      }
      findList.checkedList =  VerificationList(findList)
        
      },
      deleteTodo(state, action){
        const findList:any = state.items.find((item)=>item.idList === action.payload.idList)
        findList.coment = findList.coment.filter((item:TComent)=>item.id !== action.payload.id)
      },
      addCart(state, action){
        const item = {idList: Date.now(), nameList: 'Next', checkedList: false, coment: [{id:Date.now(), name: action.payload.name, checked: true,}]}
        state.items.push(item)
      },
      updateNameCart(state, action){
        const findList:any = state.items.find((item)=>item.idList === action.payload.idList)
        findList.nameList = action.payload.nameList 
      },
      addCat(state, action){
        const findList:any = state.items.find((item)=>item.idList === action.payload.idList)
        findList.urlCat =  state.url
      },
      deleteCart(state, action){
        state.items = state.items.filter((item)=>item.idList !== action.payload.idList)
      }
  },
  extraReducers(builder) {
    builder
      .addCase(catFetch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(catFetch.rejected, (state, action) => {
        state.loading = false;
        // state.errorMessage = "Something went wrong";
      })
      .addCase(catFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.url = action.payload[0].url
        // state.errorMessage = null;
      });
  },
})

export const {addTodo, 
              deleteTodo, 
              updateTodo, 
              addCart, 
              deleteCart, 
              updateNameCart, 
              addCat} = todoSlice.actions

export const todoReducer = todoSlice.reducer  