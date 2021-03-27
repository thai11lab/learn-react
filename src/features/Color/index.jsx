import React, { useState } from 'react';

Color.propTypes = {
    
};

function Color(props) {
    const [color,setColor] = useState('red');
    return (
        <div>
            <button onClick={()=>{setColor('green')}}>Xanh</button>
            <button onClick={()=>setColor('yellow')}>Vang</button>
            <button onClick={()=>setColor('red')}>Do</button>

            <div 
            style={{backgroundColor:color,
                    color:color
            }}>
                Hello
            </div>
        </div>
    );
}

export default Color;