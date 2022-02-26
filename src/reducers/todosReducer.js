const todosReducerDefaultState = {
    todos: [{
        description:"testing 1",
        id: Math.floor(Math.random() * 1e14),
        completed: true
    }]
}


const TodosReducer = (state = todosReducerDefaultState.todos, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        default:
            return state;
    }
}

export default TodosReducer;