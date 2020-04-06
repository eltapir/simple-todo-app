import React from 'react';

import TodoItem from './TodoItem';

const TodoList = (props) => {

    return (

        <div>

            <h1>testje from todo list</h1>

            {props.todos.map(todo => (

                <TodoItem
                    key={todo.id}
                    todo={todo} 
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                />
            ))}

        </div>
    );
}

export default TodoList;
