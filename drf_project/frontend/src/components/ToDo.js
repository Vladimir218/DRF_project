import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
       

const ToDoListItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.text}</td>
            <td>{todo.create}</td>
            <td>{todo.project}</td>
            <td>{todo.creator_user}</td>
            <td>{todo.id}</td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
    console.log({todos})
    return (
        <table className="table">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Text</th>
                <th scope="col">Create</th>
                <th scope="col">Project</th>
                <th scope="col">Creator</th>
            </tr>
          
            {todos.map((todo) => <ToDoListItem todo={todo} />)}
        </table>
    )
}
  
export default ToDoList