import { TCurrentItems } from "../store/redusers/todoSlice"


export const useFiltleTodo = (items:TCurrentItems[], mode:boolean) => {
  let accumulate =[]
  let listSort
  for(let i=0; i<items.length;i++){
    if(mode){
       if(items[i].checkedList !== true) accumulate.push(items[i])
       
    } 
    if(!mode){
      if(items[i].checkedList === true) accumulate.push(items[i])
    } 
     
  }
    
  return [accumulate]
}

 