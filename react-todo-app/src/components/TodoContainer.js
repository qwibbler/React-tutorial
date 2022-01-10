import React from 'react';
import { v4 } from 'uuid';

// Components
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: v4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: v4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: v4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  }

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="container">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
