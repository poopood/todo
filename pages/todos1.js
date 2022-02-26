import React, {useState} from 'react';

const Todos1 = () => {
    const [todos, setTodos] = useState([]);
    const [inputVal, setinputVal] = useState("")

    console.log(todos)

    const formSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                description: inputVal,
                id: Math.floor(Math.random() * 1e14),
                completed: false
            }
        ])
        setinputVal("")
    }

    const deleteTodo = (id) => {
        let filteredArr = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(filteredArr)
    }

    const completedItem = (id) => {
        let updateArr = todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed
                return todo
            }
            return todo
        })
        setTodos(updateArr)
    }
    

    return(
        <div>
            <h4>Hello from this todos</h4>
            
            <form action="" onSubmit={formSubmit}>
                <input type="text"  value={inputVal} onChange={(e) => {setinputVal(e.target.value)}}/>
                <button>Submit</button>
            </form>

            <pre>{inputVal}</pre>

            <h4>All Todos</h4>
            <ul>{todos && todos.map((todo) => {
                return(
                    <React.Fragment key={todo.id}>
                        <li
                        className={todo.completed ? "hello" : ""}
                        >
                        <input type="checkbox" 
                        
                        checked={todo.completed} onChange={() => completedItem(todo.id)}/>
                            {todo.description} &nbsp; &nbsp;
                            <button onClick={() => {deleteTodo(todo.id)}}> X</button>
                            


                            </li>
                        
                    </React.Fragment>


                )
            })}</ul>
        </div>
    )
}


export default Todos1