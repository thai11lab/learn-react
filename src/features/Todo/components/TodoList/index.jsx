import React from 'react';
import PropTypes from 'prop-types';
 
TodoList.propTypes = {
    todoList:PropTypes.array
};

TodoList.defaulProps={
    todoList:[]
}
function TodoList(props) {
    const {todoList} = props;
    return (
        <ul>
            {todoList.map(value=>(
                <li key={value.id}>{value.name}</li>
            ))}
        </ul>
    );
}

export default TodoList;