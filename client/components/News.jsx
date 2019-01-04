import React from 'react';
import styled from 'styled-components';
import { API_KEY } from '../config/keys';

const Wrapper = styled.section`
  padding: 2em;
  background: #6096ba;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      topHeadlines: []
    };
  };

componentDidMount() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=' + API_KEY)
    .then(response => response.json())
    .then(data => this.setState({
      topHeadlines: data.articles
    }));
  this.updateNews = setInterval (
    () => this.news(), 600000
  );
};

news() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=' + API_KEY)
    .then(response => response.json())
    .then(data => this.setState({
      topHeadlines: data.articles
    }));
}

  render () {
    const {topHeadlines} = this.state;
    return(
      <Wrapper>
        <div className='container greeting'>
          <Title>
            Recent News
          </Title>
          {topHeadlines.map(({title, description, url, urlToImage}) => (
            <div key={title}>
              <div style={{
                backgroundImage: `url(${urlToImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                paddingTop: '80px',
                border:'4px solid white',
                borderStyle:'single',
                margin: 'auto',
                marginMax: '100%'}}>
              </div>
              <div style={{
                marginBottom: '15px'}}>
                <a target="_blank" rel="noopener noreferrer" href={url} style={{
                  color: 'white',
                  fontSize:'20px'}}><strong>{title}</strong>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    )
  }
};
