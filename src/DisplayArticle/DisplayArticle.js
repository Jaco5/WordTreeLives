import React from 'react';

import  './DisplayArticle.css';

const displayArticle = (props) => {
    return (
        <div className="article-div">
            <ul>
                <h4>Article Found:</h4>
                <li>Title:{props.article.title}</li>
                {/* <li>Author(s):{props.article.}</li> */}
                <li>Journal/Publication:{props.article.journal}</li>
                <li>Date Published:, {props.article.publisher},{props.article.year}</li>
                <li>Subject(s){props.article.subject}</li>
                <li>Abstract:{props.article.abstract}</li>
            </ul>
            
        </div>
    )
};

export default displayArticle;