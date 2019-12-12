import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return (
        <form className="user-input">
            <label>
                <p>{props.label}</p>
                <input type="text" name={props.name} onChange={props.onChange} />
            </label>
            {
                (props.value) ? <button type="submit" value={props.value} onClick={props.onClick}>Poof</button> : ""
            }
            
        </form>
    )
};

export default userInput;

