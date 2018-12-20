import React, { Component } from 'react';
import './news.css'

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0664c5e916b443598676b05520c6fde6')
    .then(response => response.json())
    .then((news) => 
      this.setState({news: news.articles}, () => console.log(news.articles)));
  }

  render() {
    return (
      <div className='grid-container'>
          {this.state.news.map(article =>
            <div className='article' key={Math.floor(Math.random() * 1000)}>
              <img alt='unknown' className='article__img' src={article.urlToImage}></img>
              <h4><a href={article.url}>{article.title}</a></h4>
              <p className='article__author'>{article.author === null ? "unknown author" : article.author}</p> 
              <p className='article__url'><a href={article.url}>{article.url}</a></p>   
            </div>
          )}
      </div>
    )
  }
}

export default News;