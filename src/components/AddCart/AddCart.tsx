import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/redusers/todoSlice';
//@ts-ignore
import css from './AddCart.module.sass' 


const AddCart = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch()

  return (
    <form 
      className={css.input}
      onSubmit = {(e)=>{
        e.preventDefault()
        dispatch(addCart({name:name}))
        setName('')
      }}
      >
      <input
        className={css.input__box}
        value = {name}
        onChange = {(e) => setName(e.target.value)}
      />
    <button
      className={css.input__submit}
      type = "submit"
    >Go</button>
    </form>
  )
}

export default AddCart