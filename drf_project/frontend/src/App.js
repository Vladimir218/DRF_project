import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import ToDoList from './components/ToDo.js'
import ProjectList from './components/Project.js'
import Footer from './components/Footer.js'
import Menu from './components/Menu.js'
import axios from 'axios'
import {HashRouter, Route, Link, BrowserRouter} from 'react-router-dom'


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'projects':[],
           'todos':[]
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
          // console.log(response.data)
            this.setState(
              {
                'users': users
              }
            )
          }).catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/todos')
        .then(response => {
            
          const todos = response.data.results
          // console.log(todos )
            this.setState(
              {
                'todos': todos
              }
            )
          }).catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/projects/param')
          .then(response => {
              
            const projects = response.data.results
            //console.log(projects )
              this.setState(
                {
                  'projects': projects
                }
              )
            }).catch(error => console.log(error))
    }


   render () {
       return (
          //  <div className="App">
          //     <Menu/>
          //     <div>
          //       <UserList users={this.state.users} />
          //       <ToDoList todos={this.state.todos} />
          //       <ProjectList projects={this.state.projects} /> 
          //     </div>
          //     <Footer/>
          //  </div>
          
          <div className="App">
            
            <HashRouter>
              {/* <Routes> */}
                <Menu/>
                <Route exact path='/users' component={() => <UserList users={this.state.users} />} />
                {/* <Route path="/users" element={<UserList/>} /> */}
                <Route exact path='/todos' component={() => <ToDoList todos={this.state.todos} />} />
                <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects} />}/>
              {/* </Routes> */}
            </HashRouter>
            <Footer/>
          </div>

       )
   }
}
export default App;