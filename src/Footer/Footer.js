import React from 'react';
import './Footer.css';

const footer = (props) => {
    return (
        <div className="footer-div">
            <p>Copyright {props.year} - {props.contributors}</p>
        </div>
    )
}

export default footer;