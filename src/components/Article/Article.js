import React, { useState } from 'react';
import Button from '../Button/Button.js';

const Article = (props) => {
    const [title, setTitle] = useState(props.title);

    const onTitleInputChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div className="card full-width">
            <h1 
                onClick={props.titleClick} 
                style={{ color: props.color }}>
                {title}
            </h1>

            <p>{props.children}</p>

            <p><strong>You can change the article title here:</strong></p>

            <input type="text" value={title} onChange={onTitleInputChange} />

            <Button 
                click={props.deleteHandler}
                text="Delete article"
            />
        </div>
    );
}
  
export default Article;
  