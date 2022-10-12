import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsItem } from '.';
import { FirstNewsItem } from '.';
import { Navbar } from '.';
import { BrowserRouter } from 'react-router-dom';


const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=cricket&from=2022-09-15&sortBy=publishedAt&apiKey=8e6345a47f2e4c06b654b3baf2ec61e2`)
            setArticles(response.data.articles)
            console.log(response)
        }
        getArticles()
    }, [])


    return (
        <div className="my-app">
            <BrowserRouter>
            <Navbar/>
            </BrowserRouter>
           {articles.map((article, a) => {
            if(a >= 1){
            return (
                <NewsItem 
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage} />
            )
            }else {
                return (
                    <div id='first-article'>
                        <FirstNewsItem 
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage} />
                    </div>
                )
            }
           }) }
        </div>
    )
}

export default NewsList;