
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

        
    
        default:
            return state;
    }

    
}
