import React from 'react';
import './UserOutput.css'

const UserOutput = props => {
    return(
        <div className='UserOutput'>
            <p> My name is {props.name} </p>
            <p> I love programming </p>
        </div>
    )
}

export default UserOutput