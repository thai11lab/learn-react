import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';
TodoList.propTypes = {
    todoList:PropTypes.array,
    getValueFrom:PropTypes.func
};

TodoList.defaulProps={
    todoList:[],
    getValueFrom:null
}
function TodoList(props) {
    const {todoList,getValueFrom} = props;

    const handleClick=(index,value)=>{
        if(!getValueFrom(index,value)){
            return ;
        }
        getValueFrom(index,value);
    }
    return (
        <ul className="ulList">
            {todoList.map((value,index)=>(
                <li key={value.id}
                    onClick={()=>{handleClick(index,value)}}
                    className={classnames({
                        "todo-list":true,
                        complete:value.status === "active"
                    })}
                >
                    {value.name}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;