import { useEffect, useReducer } from "react"
import { TodoAdd } from "./componentes/TodoAdd"
import { TodoList } from "./componentes/TodoList"
import { useTodo } from "./hooks/useTodo"
import { todoReducer } from "./todoReducer"




export const TodoApp = () => {

    const { state, agregarTarea, eliminarTarea, completarTarea, editarTarea, tareasLength, tareasPendientes, todo, setTodo} = useTodo();

    return (
        <>
            <div className="container-xl mt-2">
                <h1>TodoListApp</h1>
                <hr />

                <div className="row">
                    <div className="col-5">
                        <TodoAdd agregarTarea={ agregarTarea } todo={todo} setTodo={setTodo} editarTarea={editarTarea}/>
                    </div>

                    <div className="col-7">
                        <h2>Mis Tareas: {tareasLength}</h2>
                        <h2>Tareas pendientes: {tareasPendientes}</h2>
                        <hr />

                        <TodoList tareas={ state } eliminarTarea={ eliminarTarea } completarTarea={ completarTarea } editarTarea={editarTarea} todo={todo} setTodo={setTodo}/>
                    </div>
                </div>
            </div>
        </>
    )
}
