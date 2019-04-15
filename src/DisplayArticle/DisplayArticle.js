import React from 'react';

import  './DisplayArticle.css';

const displayArticle = (props) => {
    return (
        <div className="article-div">
            <ul>
                <h4>Article Found:</h4>
                <li>Title:</li>
                <li>Author(s):</li>
                <li>Journal/Publication:</li>
                <li>Date Published:</li>
                <li>Abstract:</li>
            </ul>
            
        </div>
    )
};

export default displayArticle;