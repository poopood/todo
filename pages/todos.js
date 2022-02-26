import React, {useState, useEffect} from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([{description: "testing 1", id: Math.floor(Math.random() * 1e14), completed: true}]);
    const [inputval, setInputVal] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {description: inputval, id: Math.floor(Math.random() * 1e14), completed: false}])
        
        setInputVal("")
    }



    useEffect(() => {
        let parsedTodos = JSON.parse(localStorage.getItem("str_todos"))

        if(parsedTodos && parsedTodos.length > 0){
            setTodos(parsedTodos)
            console.log(parsedTodos)
        }
        
    }, [])

    useEffect(() => {
        localStorage.setItem("str_todos", JSON.stringify(todos))
    }, [todos])


    const deleteItem = (id) => {
       let filteredItems = todos.filter((e) => e.id !== id)
       setTodos(filteredItems)
    }

    const inputCompleted = (input) => {
       input.completed = !input.completed
       console.log(input)
        let filteredItems = todos.map((e) => {
            if(e.id === input.id){
                
                return input
            }
            return e;
        })
        setTodos(filteredItems)
    }

    return(
        <div>
            <h3>Hello from todos</h3>

            <form action="" onSubmit={formSubmit}>
                <input type="text"  value={inputval} onChange={(e) =>  setInputVal(e.target.value)}/>
                <button>Submit</button>

            </form>

            <pre>{inputval}</pre>

            {todos.length > 0 && (
                todos.map((e) => {
                    return(
                        <React.Fragment key={e.id}>
                            <h3>{e.description}</h3>
                            <input type="checkbox"
                                checked={e.completed} 
                                // onClick={() => inputCompleted(e)}
                                onChange={() => inputCompleted(e)}
                            />
                            <button onClick={() => deleteItem(e.id)}>X</button>
                        </React.Fragment>
                    )
                })
            )}

        </div>
    )
}


export default Todos