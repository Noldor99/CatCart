import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, addCat, addTodo, deleteCart, TCurrentItems, todoState, updateNameCart } from '../../store/redusers/todoSlice';
import TodoItem from '../TodoItem/TodoItem';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BsFileEarmarkMinus } from 'react-icons/bs';
import { FaCat } from 'react-icons/fa';
//@ts-ignore
import css from './TodoList.module.sass'
import { catFetch } from '../../services/dataServices';
import { useTypedSelector } from '../../hook/useTypedSelector';
 


interface TodoListProps {
  list: TCurrentItems,
 
}

const TodoList:FC<TodoListProps> = ({list}:TodoListProps) => {
  console.log(list)
  const dispatch = useDispatch()

  const [updateNameList, setUpdateNameList] = useState(list.nameList);
  const [edit, setEdit] = useState(false);

  const {loading} = useTypedSelector(state=>state.todo)

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);


  const handleEdit = () => {
    if(edit){
      dispatch(updateNameCart({ idList: list.idList, nameList: updateNameList }))
      setEdit(false)
    }
  }    
    
  const simpleCat = () => {
    //@ts-ignore
    dispatch(catFetch())
    if(!loading) dispatch(addCat({idList: list.idList}))
    // console.log(data)
  }
  
  return (
    <Card style={{ width: '20rem', boxShadow: '0 0 10px black' }} 
        className = 'p-3 f-wrap'
        onClick={handleEdit}>
      {!edit && 
        <Card.Header
          className='mb-1'
          onClick={(e)=>{
            e.stopPropagation()
            setEdit(true)}}
        >{updateNameList}</Card.Header>
      }
      {edit &&     
        <input
          value = {updateNameList}
          onChange = {(e)=>setUpdateNameList(e.target.value)}
          
          className='mb-1'
          ref={inputRef}
        />
      }
      <Card.Img
       src = {list.urlCat}
      />
        {list.coment.map((item)=>
        <TodoItem
          key = {item.id}
          coment = {item}
          idList = {list.idList}
        />
        )}
    <Button
      className='mb-3 mt-3'
      onClick={()=>dispatch(addTodo(list.idList))}
    >addTodo</Button>
    <div className="d-flex align-items-center gap-3">
      <Button
        className='flex-grow-1'
        onClick={()=>dispatch(deleteCart({idList:list.idList}))}
      >delete cart
      </Button>
      <FaCat className={css.simple} 
        onClick={simpleCat}
      />
      {list.checkedList 
        ?<AiOutlineFileDone className={css.icon}/>
        :<BsFileEarmarkMinus className={css.prosess}/>
      }
 
    </div>
    </Card>
  )
}

export default TodoList