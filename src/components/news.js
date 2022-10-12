import React from 'react';
import './news.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return(
        <div>
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <div className='column'>
                    <h3><a href={url} className="title-url">{title}</a></h3>
                    <p className='#'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;