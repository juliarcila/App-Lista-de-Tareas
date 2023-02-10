import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({agregarTarea, todo, setTodo, editarTarea}) => {


    
    // const {contenido, onInputChange, onResetForm} = useForm({
    //     contenido: '',
    // });

    const [contenido, setContenido] = useState('');

    useEffect(() => {
        if(Object.keys(todo).length > 0){
            setContenido(todo.contenido);
        }
    }, [todo])
    
    

    const onSubmit = (e) => {
        e.preventDefault();
        if(contenido.trim().length <= 1) return;

        if(Object.keys(todo).length > 0){

            editarTarea({
                id: todo.id,
                contenido,
                done: todo.done,
            })

            setTodo({});
            setContenido('');
            return;
        }

        
        agregarTarea({
            id: new Date().getTime(),
            contenido,
            done: false,
        } );
        setContenido('');
    };

    return (
        <>
            <h3>Tarea:</h3>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Escibe tu tarea"
                    className="form-control"
                    name="contenido"
                    onChange={ (e) => setContenido(e.target.value) }
                    value={ contenido }
                />
                
                <button 
                    className="btn btn-outline-primary mt-2" 
                    type="submit"
                >
                    {
                        (Object.keys(todo).length > 0) ? 'Actualizar' : 'Agregar'
                    }
                </button>
            </form>
        </>
    )
}
