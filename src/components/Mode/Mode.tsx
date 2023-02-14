import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { TComent, updateTodo } from '../../store/redusers/todoSlice';

export interface ModeProps{
  coment:TComent,
  idList:number
}

const Mode:FC<ModeProps> = ({coment, idList}:ModeProps) => {
 
  const dispatch = useDispatch()
  const onEdit = (variant:boolean) =>{
 
    dispatch(updateTodo({ id: coment.id, checked: variant, idList: idList }))
  }

  return (
    <div 
      className='pt-3 gap-3 d-flex justify-contents-between' 
      style={{flex: "100%"}}
      >
      <Button 
        size="sm" 
        variant={coment.checked === true ? "success": "outline-dark"}
        onClick={()=>onEdit(true)}
        >Active</Button>
      <Button 
        size="sm" 
        variant={coment.checked === false ? "success": "outline-dark"}
        onClick={()=>onEdit(false)}
        >Completed</Button>
    </div>
  )
}

export default Mode