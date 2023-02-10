import { useState } from "react";

export const TodoItem = ({tarea, eliminarTarea, completarTarea, editarTarea, todo, setTodo}) => {

    const [confirmar, setConfirmar] = useState(false);

    const handleCheck = () => {
        const confirmacion = confirm(`¿Desea completar la tarea ${tarea.contenido}?`)
        if(confirmacion){
            completarTarea(tarea.id);
            setConfirmar(confirmacion);
        }
    };



    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className={`align-self-center ${ (tarea.done) ? 'text-decoration-line-through' : '' }`}>{tarea.contenido}</span>
            <input type="checkbox" name="check" onClick={ handleCheck } defaultChecked={tarea.done} disabled={confirmar} />
            <div>
                <button 
                    className="btn btn-primary me-2"
                    onClick={ () => editarTarea(tarea)} 
                    disabled={confirmar}
                >
                    Editar
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => eliminarTarea(tarea.id)}
                >
                    Borrar
                </button>

            </div>
        </li>
    )
}
