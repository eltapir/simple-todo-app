import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique random id

import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {

    state = {

        todos: [

            {
                id: uuidv4(), 
                title: 'Setup development evironment',
                completed: true
            },
            {
                id: uuidv4(),
                title: 'Develop website and add content',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Deploy to live server',
                completed: false
            }
        ]
    };

    handleChange = (id) => {

        this.setState({

            todos: this.state.todos.map(todo => {

                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            })
        });
    }

    deleteTodo = (id) => {
        
        this.setState({

            todos: [ ...this.state.todos.filter(todo => { return todo.id !== id; })  ]
        });
    }

    addTodoItem = (title) => {

        const newTodo = {

            id: uuidv4(),
            title: title,
            completed: false
        };

        this.setState({
            todos: [ ...this.state.todos, newTodo ]
        });
    }

    render() {

        return (

            <div className="container">

                <Header />

                <InputTodo addTodoProps={this.addTodoItem} />

                <TodoList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange} 
                    deleteTodoProps={this.deleteTodo}
                />

            </div>
        );
    }
}

export default TodoContainer;
