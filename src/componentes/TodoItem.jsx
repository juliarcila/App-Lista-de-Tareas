
export const TodoItem = ({tarea, eliminarTarea, completarTarea, editarTarea}) => {

    // const revisarEvento = (e) => {
    //     console.log(e.target.checked);

    // };


    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className={`align-self-center ${ (tarea.done) ? 'text-decoration-line-through' : '' }`}>{tarea.contenido}</span>
            <input type="checkbox" name="check" onClick={ () => completarTarea(tarea.id)} defaultChecked={tarea.done}/>
            <div>
                <button 
                    className="btn btn-primary me-2"
                    onClick={ () => editarTarea(tarea.id)} 
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
