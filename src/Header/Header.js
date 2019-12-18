import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className="header-div">
            <img className="logo" src={props.logo} alt="Tree Logo"></img>
            <div className='header-text-div'>
                <h1>"I am Groot!" -Groot</h1>
                <p>What does this app do? I can already search <a href="https://www.doaj.org">doaj.org.</a> Why is it more efficient to sort through word spaghetti? This is more efficient because instead of inferring from keywords and titles, and then reading a full abstract to determine if its relevant, it allows you to search directly for language that you find relevant. \n\n\t The Directory of Open Access journals is HUGE. If you are not specific in your initial search you may get a truly irrelevant sample. Of course if you are just idly curious it could lead somewhere interesting.</p>
            </div>
        </div>
    )
}

export default header;