import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className="header-div">
            <img className="logo" src={props.logo} alt="Tree Logo"></img>
            <div className='header-text-div'>
                <h1>"I am Groot!" -Groot</h1>
                <p>What does this app do? I can already search doaj.org. Why is it more efficient to sort through word spaghetti? This is more efficient because instead of inferring from keywords and titles, and then reading a full abstract to determine if its relevant, it allows you to search directly for language that you find relevant.</p>
            </div>
        </div>
    )
}

export default header;