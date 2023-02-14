import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../store/redusers/todoSlice';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
//@ts-ignore
import css from './TodoItem.module.sass'
import Mode, { ModeProps } from '../Mode/Mode';


const TodoItem:FC<ModeProps> = ({coment, idList}:ModeProps) => {

  const [update, setUpdate] = useState(coment.name);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()

  
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);


  const handleEdit = () => {
    if(edit){
      dispatch(updateTodo({ id: coment.id, name: update, idList: idList }))
      setEdit(false)
    }
  }
  return (
      <div 
      className={css.todos__single}
      onClick={handleEdit}
      >
      {!edit && <p className='mb-0'>{coment.name}</p>}
      {edit &&     
        <input
          value = {update}
          onChange = {(e) => setUpdate(e.target.value)}
          className={css.todos__single__text}
          ref={inputRef}
        />
      }
      {!edit && 
      <div>
        <span
          className={css.icon}
          onClick={() => {
             {!edit && setEdit(true)}
          }}
        >
          <AiFillEdit className={css.simple}/>
        </span>
        <span className={css.icon}
          onClick={()=>dispatch(deleteTodo({id: coment.id, idList: idList}))}
        >
          <AiFillDelete className={css.simple} />
        </span>
        
      </div>
      }
      <Mode
        coment = {coment}
        idList = {idList}
      />
    </div>
    
  )
}

export default TodoItem