import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': []
       }
   }

   componentDidMount() {
    const users = [
        {
            'username': 'admin',
            'first_name': 'Ivanov',
            'last_name': 'Ivan',
            'email': 'ivanov@mail.ru'
        },
        {
          'username': 'admin1',
          'first_name': 'Petrov',
          'last_name': 'Petr',
          'email': 'petrov@mail.ru'
        },
    ]
    this.setState(
        {
            'users': users
        }
    )
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