import React from 'react';
import './news.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return(
        <div className='big-container'>
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <div className='one-column'>
                    <h3><a href={url} className="title-url">{title}</a></h3>
                    <p className='description'>{description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default NewsItem;