import { Button, Form } from "react-bootstrap";
import Lista from "./Lista";

const Formulario = () => {
    return (
        <>
        <Form>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" />
                <Button variant="primary">Agregar</Button>
            </Form.Group>
        </Form>
        <Lista></Lista>
        </>
    );
};

export default Formulario;