import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className="header-div">
            <img className="logo" src={props.logo}></img>
            <div className='header-text-div'>
                <h1>"I am Groot!" -Groot</h1>
                <p>This is where I I will write concise, easy to understand directions to let everyone know what this is and why it is useful. Lovely weather today, sun keeps dipping behind the clouds but it IS sunny, and it rained last night.</p>
            </div>
        </div>
    )
}

export default header;