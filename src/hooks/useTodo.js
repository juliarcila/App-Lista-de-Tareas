import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../todoReducer";

const initTodo = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [state, dispatch] = useReducer(todoReducer, [], initTodo);
    
    const [todo, setTodo] = useState({});
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( state ) );
    }, [state])


    const agregarTarea = (tarea) => {
        dispatch({
            type: '[TODO] add todo',
            payload: tarea,
        })
    }

    const eliminarTarea = ( id ) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id,
        })
    };

    const completarTarea = ( id ) => {
        dispatch({
            type: '[TODO] completar todo',
            payload: id,
        })
    }

    const editarTarea = ( tarea ) => {
        

        if(Object.keys(todo).length > 0){

            dispatch({
                type: '[TODO] editar todo',
                payload: tarea,
            })
            return;
        }

        setTodo(tarea);

    };

    


    const tareasLength = state.length;

    const tareasPendientes = state.filter( tarea => tarea.done===false).length;

    return {
        state,
        agregarTarea,
        eliminarTarea,
        completarTarea,
        editarTarea,
        tareasLength,
        tareasPendientes,
        todo,
        setTodo,
    }
}
