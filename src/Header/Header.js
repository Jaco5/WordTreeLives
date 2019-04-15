import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div>
            <img className="logo" src={props.logo}></img>
            <h1>I am Groot!</h1>
        </div>
    )
}

export default header;