import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function ToDoList() {
    let [todos, setTodos] = useState([{task:"Eat",id:uuidv4(),isDone:false}])
    let [newTodo, setNewTodo] = useState("")
    

    let updateToDoValue = (event)=>{
        setNewTodo(event.target.value)
    }
    let addTask = ()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task : newTodo, id:uuidv4(),isDone:false}]
        })
        setNewTodo("")
    }

let deleteTodo = (id) => {
  setTodos((prevTodos) => {
    return prevTodos.filter((todo) => todo.id !== id);
  });
};

let isDone=(id)=>{
    setTodos((prevTodos)=>{
        return prevTodos.map((todo)=>{
            return  todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        })   
     })
}
let allDone = () => {
  setTodos((prevTodos) => {
    return prevTodos.map((todo) => ({
      ...todo,
      isDone: true
    }));
  });
};


    return(
        <div>
            <h3>To-Do List</h3>
            <input type="text" value={newTodo} onChange={updateToDoValue} />
            <br /><br />
            <button onClick={addTask} >Add</button>
            <br />
            <br />
            <br />
            <hr />
            <h4>All Tasks</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}><span style={{textDecoration:todo.isDone?"line-through":"none" }}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=> deleteTodo(todo.id)}>delete</button>
                            <button onClick={()=>isDone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>
            <button  onClick={allDone}>All Done</button>
        </div>
    )
}
export default ToDoList;
