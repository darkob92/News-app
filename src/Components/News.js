import React, { Component } from 'react';

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
      <div>
        <h2 className='text-primary'>More News</h2>
          {this.state.news.map(article => 
            <p key={Math.floor(Math.random() * 1000)}>{ article.author } {article.title}</p>
          )}
      </div>
    )
  }
}

export default News;