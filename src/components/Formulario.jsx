import { Button, Form } from "react-bootstrap";
import Lista from "./Lista";
import { useState } from "react";

const Formulario = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTareas([...tareas, tarea])
    }
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
                <Button variant="primary" type="submit">Agregar</Button>
            </Form.Group>
        </Form>
        <Lista></Lista>
        </>
    );
};

export default Formulario;