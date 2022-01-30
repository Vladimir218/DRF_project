import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


const UserItem = ({user}) => {
   return (
            <tr>
                <td>
                    <Link to={`user/${user.username}`}>{user.username}</Link>
                    {/* {user.username} */}
                </td>
                <td>
                    {user.first_name}
                </td>
                <td>
                    {user.last_name}
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
   )
}

const UserList = ({users}) => {
    console.log({users})
    return (
        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <UserItem user={user} />)}
            </tbody>
        </table>
    )
 }
 
 
 export default UserList