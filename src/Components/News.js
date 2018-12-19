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
            <div className='article'>
              <img className='article-img' src={article.urlToImage}></img>
              <h4 key={Math.floor(Math.random() * 1000)}>{article.title}</h4>
              <p>{article.author}</p>
              <p><a href={article.url}>{article.url}</a></p>
            </div>
          )}
      </div>
    )
  }
}

export default News;