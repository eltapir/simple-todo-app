// import React, { Component } from 'react';

// class InputTodo extends Component {

// }

import React from 'react';

class InputTodo extends React.Component {

    state = {

        title: ''
    }

    onChange = (ev) => {

        this.setState({
            title: ev.target.value
        });
    };

    handleSubmit = ev => {

        ev.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({ title: '' });
    };

    render() {

        return (

            <form onSubmit={this.handleSubmit} className="form-container">

                <input 
                    type="text" 
                    className="input-text" 
                    placeholder="Add Todo..." 
                    value={this.state.title} 
                    onChange={this.onChange}
                />

                <input type="submit" className="input-submit" value="Submit" />
                
            </form>
        );
    }
}

export default InputTodo;
