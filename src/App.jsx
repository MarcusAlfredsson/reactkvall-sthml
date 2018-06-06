/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import logo from './logo.svg';
import AddTodo from './AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (text) => {
    const { todos } = this.state;
    todos.push(text);
    this.setState({
      todos,
    });
  }

  removeTodo = (todo) => {
    const { todos } = this.state;
    const filteredTodos = todos.filter(x => x !== todo);
    this.setState({
      todos: filteredTodos,
    });
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddTodo addTodo={this.addTodo} />
        <div>
          {this.state.todos.map((todo, index) => <Todo key={`${todo}${index}`} todo={todo} remove={this.removeTodo} />)}
        </div>
      </div>
    );
  }
}

const Todo = ({ todo, remove }) => (
  <div>
    {todo}
    <button type="button" onClick={() => remove(todo)}>ta bort</button>
  </div>);

Todo.propTypes = {
  todo: Proptypes.string.isRequired,
  remove: Proptypes.func.isRequired,
};

export default App;
