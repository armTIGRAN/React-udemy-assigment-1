import React from 'react';

const UserInput = props => {

    const inputStyle = {
        border: '2px solid blue',
        width: '15%'
    }

    return(
        <div>
            <input type="text" onChange={props.changed} value={props.value} style={inputStyle}/>
        </div>
    )
}

export default UserInput