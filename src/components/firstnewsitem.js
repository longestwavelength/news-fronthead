import React from 'react';
import './news.css'

const FirstNewsItem = ({ title, description, url, urlToImage }) => {
    return(
        <div>
            <div className="news-item1">
                <img className="news-img1" src={urlToImage} alt={urlToImage}/>
                <div className='one-column'>
                <h3><a href={url} className="title-url1">{title}</a></h3>
                <p className='description'>{description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default FirstNewsItem;
