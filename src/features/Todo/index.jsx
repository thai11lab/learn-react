import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initListNV = [
        {
            id:1,
            name:"Dam Anh Thai",
            status:"active"
        },
        {
            id:2,
            name:"To Quynh Nhu",
            status:"unactive"
        },
        {
            id:3,
            name:"Nguyen Van Quyet",
            status:"unactive"
        },
    ]
    const [listNV, setListTo] = useState(initListNV);
    const [filter,setFilter] = useState("all");
    
    const hanldeValue =(index,value)=>{
        const newTodoList = [...listNV];
        newTodoList[index]={
            ...newTodoList[index],
            status:newTodoList[index].status==='active'?'unactive':'active'
        }
        
        setListTo(newTodoList);
    }
    const handleShowAll=()=>{       
        setFilter("all");
    }

    const handleShowActive=()=>{
       setFilter("active");
    }

    const handleShowUnActive=()=>{
       setFilter("unactive");
       console.log(filter);
    }

    const listAfterFilter = listNV.filter(listNV=>filter==="all" || listNV.status===filter);
    return (
        <div>
            <TodoList todoList={listAfterFilter} getValueFrom={hanldeValue}></TodoList>

            <div>
                <button onClick={()=>{handleShowAll()}}>show all</button>
                <button onClick={()=>{handleShowActive()}}>show active</button>
                <button onClick={()=>{handleShowUnActive()}}>show unactive</button>
            </div>
        </div>
    );
}

export default TodoFeature;