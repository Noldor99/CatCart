import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddCart from '../components/AddCart/AddCart'
import TodoList from '../components/TodoList/TodoList'
import { useTypedSelector } from '../hook/useTypedSelector'
 
 
 

const Home = () => {

  const {items} = useTypedSelector(state => state.todo);

  return (
  <Container className='pb-5'>
    <AddCart/>
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {items.map((list)=>
        <TodoList
          key = {list.idList}
          list = {list}
        />
      )}
    </div>
  </Container>
  )
}

export default Home