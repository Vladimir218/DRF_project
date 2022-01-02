import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import axios from 'axios'


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': []
       }
   }

   componentDidMount() {
    // const users = [
    //     {
    //         'username': 'admin',
    //         'first_name': 'Ivanov',
    //         'last_name': 'Ivan',
    //         'email': 'ivanov@mail.ru'
    //     },
    //     {
    //       'username': 'admin1',
    //       'first_name': 'Petrov',
    //       'last_name': 'Petr',
    //       'email': 'petrov@mail.ru'
    //     },
    // ]
    // this.setState(
    //     {
    //         'users': users
    //     }
    // )

      axios.get('http://127.0.0.1:8000/api/customusers')
        .then(response => {
          const users = response.data
            this.setState(
              {
                'users': users
              }
            )
          }).catch(error => console.log(error))
    }

   render () {
       return (
           <div>
            
            <UserList users={this.state.users} />
           </div>
       )
   }
}
export default App;