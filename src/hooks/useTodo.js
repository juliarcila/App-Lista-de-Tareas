import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initTodo = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [state, dispatch] = useReducer(todoReducer, [], initTodo);
    
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

    const editarTarea = ( id ) => {
        console.log(id);
        dispatch({
            type: '[TODO] editar todo',
            payload: id,
        })
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
    }
}
