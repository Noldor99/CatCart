import {Container} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TodoList from '../components/TodoList/TodoList'
import { useFiltleTodo } from '../hook/useFiltleTodo';
import { useTypedSelector } from '../hook/useTypedSelector';
 
 

const Active = () => {

  const {items} = useTypedSelector(state => state.todo);
  
  const mode = false
  const [accumulate] = useFiltleTodo(items,  mode)

  
  return (
  <Container className='pb-5'>
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {accumulate.map((list)=>
        <TodoList
          key = {list.idList}
          list = {list}
 
        />
      )}
    </div>
  </Container>
  )
}

export default Active