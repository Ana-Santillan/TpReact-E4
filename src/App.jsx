import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Container className='my-5 main'>
        <h1 className='display-4 text-center'>Lista de tareas</h1>
        <hr />
      </Container>
      <footer className='text-center bg-dark py-4 text-light'>
        <p> &copy; Todos los derechos reservados </p>
      </footer>
    </>
  )
}

export default App
