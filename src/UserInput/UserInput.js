import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return (
        <form className="user-input">
            <label>
                <p>{props.name}</p>
                <input type="text" name={props.name} onChange={props.onChange} />
            </label>
            <button type="submit" value={props.value} onClick={props.onClick}>Search</button>
        </form>
    )
};

export default userInput;

