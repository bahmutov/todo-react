import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId} from './lib/todoHelpers'

class App extends Component {
  state = {
    currentTodo: '',
    todos: [{
      id: 1,
      name: 'do one',
      isComplete: true
    }, {
      id: 2,
      name: 'do two',
      isComplete: false
    }, {
      id: 3,
      name: 'do three',
      isComplete: false
    }]
  }

  handleInputChange = e => {
    this.setState({
      currentTodo: e.target.value
    })
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
  }

  handleEmptySubmit = e => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ?
      this.handleSubmit : this.handleEmptySubmit

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
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />
          <TodoList
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
