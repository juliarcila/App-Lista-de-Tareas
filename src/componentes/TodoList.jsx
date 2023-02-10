import { TodoItem } from "./TodoItem"

export const TodoList = ({tareas, eliminarTarea, completarTarea, editarTarea, todo, setTodo}) => {



    return (
        <ul className="list-group">
            {
                tareas.map(tarea => {
                    return (
                        <TodoItem key={tarea.id} tarea={ tarea }  eliminarTarea={ eliminarTarea } completarTarea={completarTarea} editarTarea={ editarTarea } todo={todo} setTodo={setTodo}/>
                    )
                })
            }

        </ul>
    )
}
