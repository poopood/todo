import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { AddTodo } from '../src/actions/TodosActions';

const Testing2 = () => {
    const [inputVal, setinputVal] = useState("")
    const [todos, settodos] = useState([{description: "testing 1", id: Math.floor(Math.random() * 1e14), completed: true}]);
    const redTodos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    
    console.log(redTodos, "state from redux")


    const formSubmit = (e) => {
        e.preventDefault();
        let copyOfTodos = Object.assign([], todos);
        copyOfTodos.push({
            description: inputVal,
            id: Math.floor(Math.random() * 1e14),
            completed: false
        })
        
        settodos(copyOfTodos);
        dispatch(AddTodo({
            description: inputVal,
            id: Math.floor(Math.random() * 1e14),
            completed: false
        }))
        setinputVal('')
    }

    const removeItem = (id) => {
      
        let copyOfTodos = Object.assign([], todos);
        let newTodos = copyOfTodos.filter((todo) => {
            return todo.id !== id
        })

        
        settodos(newTodos)

    }

    const itemCompleted = (id) => {
        let copyOfTodos = Object.assign([], todos);
        let newtodos = copyOfTodos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed
                return todo
            }
            return todo
        })
        settodos(newtodos)
    }

    useEffect(() => {
        let init = JSON.parse(localStorage.getItem("init_todos"));
        settodos(init)
    }, [])

    useEffect(() => {
        localStorage.setItem("init_todos", JSON.stringify(todos))
    }, [todos])

    return(
        <div>
            <h3>Hello from Testing 2</h3>
            <h2>All Todos</h2>
            {todos && todos.length > 0 && (
                <ul>
                    {todos.map((todo) => {
                        return(
                            <React.Fragment key={todo.id}>
                            <li>
                                {todo.description}
                                    <button onClick={() => {removeItem(todo.id)}}>X</button>
                                <input type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => itemCompleted(todo.id)}

                                />
                                
                                </li>
                            </React.Fragment>
                        )
                    })}

                </ul>
            )}

            <h2>Add Todo</h2>
            <pre>{inputVal}</pre>
            <hr />
            <form action="" onSubmit={formSubmit}>
                <input type="text"  value={inputVal} onChange={(e) => {setinputVal(e.target.value)}}/> <br />
                <button>Add Input</button>
            </form>
        </div>
    )
}


export default Testing2