import React, {useState} from "react";
import './todo.css'
const Todo = () => {
    const [todoList,setTodoList] = useState([])
    const [userInput,setUserInput] = useState('')
    const addTodo = ()=> {
        setTodoList([...todoList,{ task : userInput, complete : false }])
        setUserInput('')
    }
    const removeTodo = (todo)=> {
        setTodoList(todoList.filter(item=>{
            return item.task !== todo
        }))
    }
    const completeTodo = (todo)=> {
        setTodoList(todoList.map(item=> {
            return item.task === todo
                ? {task : todo, complete : !todo.complete}
                : {task : item.task , complete : item.complete ? true : false }
        }))
    }
    return (
        <div>
            <header>
                <h1>TODO LISTS</h1>
            </header>
            <input type="text"
                placeholder={'Enter Task ...'}
                value={userInput}
                onChange={(e)=> setUserInput(e.target.value)}
                onKeyDown={e=>{
                    if(e.keyCode==13) addTodo()
                }}
            />
            <button onClick={addTodo}>ADD Task</button>
            <hr/>
            <ul>
                {todoList.map((todo,key) => {
                    return (
                        <div id={'tasks'}>
                            <li key={key}>{todo.task}</li>
                            <button onClick={()=> removeTodo(todo.task)}>Remove</button>
                            <button onClick={()=> completeTodo(todo.task)}>Completed</button>
                            {todo.complete ? <h1>Completed</h1> : <h1>Not Completed</h1>}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo