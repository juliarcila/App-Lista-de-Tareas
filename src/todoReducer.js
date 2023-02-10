
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case  '[TODO] add todo':
            return [...state, action.payload];    

        case '[TODO] remove todo':
            return state.filter(tarea => tarea.id != action.payload);

        case '[TODO] completar todo':
            return state.map( tarea => {
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        done: !tarea.done,
                    }
                }
                return tarea;
            });

        case '[TODO] editar todo':
            return state.map( tarea => (tarea.id === action.payload.id) ? action.payload : tarea );
    
        default:
            return state;
    }

    
}
