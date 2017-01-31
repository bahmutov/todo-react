import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodo, filterTodos} from './lib/todoHelpers'
import {loadTodos, createTodo, saveTodo} from './lib/todoService'

class App extends Component {
  state = {
    currentTodo: '',
    todos: []
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  handleInputChange = e => {
    this.setState({
      currentTodo: e.target.value
    })
  }

  handleToggle = id => {
    const todo = findById(id, this.state.todos)
    const toggled = toggleTodo(todo)
    const updatedTodos = updateTodo(this.state.todos, toggled)
    this.setState({
      todos: updatedTodos
    })
    saveTodo(toggled).then(() => this.showTempMethod('Todo updated'))
  }

  handleSubmit = e => {
    e.preventDefault()
    const newTodo = {
      name: this.state.currentTodo,
      isComplete: false,
      id: generateId()
    }
    const newTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: newTodos,
      currentTodo: '',
      errorMessage: ''
    })
    createTodo(newTodo).then(() => this.showTempMethod('Todo added'))
  }

  showTempMethod = msg => {
    this.setState({message: msg})
    setTimeout(() => {
      this.setState({message: ''})
    }, 2500)
  }

  handleEmptySubmit = e => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
  }

  render() {
    const submitHandler = this.state.currentTodo ?
      this.handleSubmit : this.handleEmptySubmit

    const displayTodos = filterTodos(this.state.todos, this.context.route)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage &&
            <span className="error">{this.state.errorMessage}</span>
          }
          {this.state.message &&
            <span className="success">{this.state.message}</span>
          }

          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />
          <TodoList
            todos={displayTodos}
            handleToggle={this.handleToggle}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
