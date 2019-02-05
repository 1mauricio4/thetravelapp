import React from 'react';
import styled from 'styled-components';
import { NEWS_API } from '../config/keys';

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
  var countryCode = 'US';
  this.news(countryCode);
  //sets an timer on which to call the news function again to refresh
  this.updateNews = setInterval (
    () => this.news(countryCode), 300000
  );
};

news(countryCode) {
  fetch(`http://localhost:3000/news_api/${countryCode}`)
    .then(response => response.json())
    .then(data => this.setState({
      topHeadlines: data.articles
    }));
};

componentWillUnmount() {
  clearInterval(this.updateNews);
};

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
                border:'4px solid white',
                borderStyle:'single',
                margin: 'auto',
                marginMax: '100%',
                borderRadius: '10px',
                width: '100%',
                height: '33%'}}>
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
    );
  };
};
