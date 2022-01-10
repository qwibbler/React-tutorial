import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = this.props;
    const { title } = this.state;
    addTodoProps(title);
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
          name="title"
        />
        <button type="button">Submit</button>
      </form>
    );
  }
}
InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
