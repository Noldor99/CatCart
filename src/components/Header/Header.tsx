import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
//@ts-ignore
import css from './Header.module.sass'

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className='mb-4'>
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="gap-3">
        <Link className={css.link} to={"/ExtraTodo"}>Home</Link>
        <Link className={css.link} to={"ExtraTodo/active"}>Active</Link>
        <Link className={css.link} to={"ExtraTodo/completed"}>Completed</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header