import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    text: '',
  };

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  
  onSubmit = () => this.props.addTodo(this.state.text);

  render() {
    console.log("addTodo state", this.state);
    return (
      <div>
        <input type="input" onChange={this.onChange} value={this.state.text} />
        <button type="button" onClick={this.onSubmit}>Lägg till</button>
      </div>
    );
  }
}

export default AddTodo;
