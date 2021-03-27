import React,{useState} from 'react';
import PropTypes from 'prop-types';

Count.propTypes = {
    
};

function Count(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>{setCount(x=>x-1)}}>-</button>
            {count}
            <button onClick={()=>{setCount((x)=>x+1)}}>+</button>
            
        </div>
    );
}

export default Count;