import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const listNV = [
        {
            id:1,
            name:"Dam Anh Thai"
        },
        {
            id:2,
            name:"To Quynh Nhu"
        },
        {
            id:3,
            name:"Nguyen Van Quyet"
        },
    ]
    return (
        <div>
            <TodoList todoList={listNV}></TodoList>
        </div>
    );
}

export default TodoFeature;