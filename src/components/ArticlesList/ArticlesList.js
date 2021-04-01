import React, { useState } from 'react';
import Article from '../Article/Article';
import Button from '../Button/Button';
import articlesListData from '../../data/articles-list-data';

const ArticlesList = () => {
    const [titleColor, setTitleColor] = useState('black');
    const [articles, setArticles] = useState(articlesListData);
    
    const changeTitleColor = (color) => {
        setTitleColor(color);
    }

    const deleteArticleHandler = (articleIndex) => {
        const newArticlesList = [...articles];   
        newArticlesList.splice(articleIndex, 1);
        setArticles(newArticlesList);            
        
    }

    return (
        <div className="articles">
            <Button 
                click={() => changeTitleColor('red')}
                text="Change color to red"
            />

            {
                articles.map((article, index) => (
                    <Article
                        key={article.id}
                        title={article.title}
                        color={titleColor}
                        titleClick={() => changeTitleColor(article.color)}
                        deleteHandler={() => deleteArticleHandler(index)}
                    >
                        {article.text}
                    </Article>
                ))
            }   
        </div>
    );
}
  
export default ArticlesList;