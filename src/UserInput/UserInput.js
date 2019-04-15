import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return (
        <form classname="user-input">
            <label>
                <p>{props.name}</p>
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
};

export default userInput;

