import { useForm } from "../hooks/useForm"

export const TodoAdd = ({agregarTarea}) => {

    const {contenido, onInputChange, onResetForm} = useForm({
        contenido: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if(contenido.trim().length <= 1) return;
        agregarTarea({
            id: new Date().getTime(),
            contenido,
            done: false,
        } );
        onResetForm();
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
                    onChange={ onInputChange }
                    value={ contenido }
                />
                
                <button 
                    className="btn btn-outline-primary mt-2" 
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
