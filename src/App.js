import React from 'react';
import axios from 'axios';
import {Row, Col, Spinner} from 'react-bootstrap';
import './App.scss';

//Components
import Headings from './components/Headings';
import Form from './components/Form';
import Weather from './components/Weather';
import UI from './containers/UI';

const API_KEY = "023fc03f628142cd192f74ef29af3a88";
class App extends React.Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null,
    visible: false,
    spinner: false,
    background: {
      url: '',
      author: '',
      authorLink: ''
    }
  }

  getWeatherData = async (e) => {
    e.preventDefault();
    this.setState({spinner: true});
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
      .then(res => {
        axios.get(`https://api.unsplash.com/photos/random?query=${city}&client_id=b252226632517b859aff1f6ef393d8128e1ff33b58a2920e14cae1271d8b6eb6`)
          .then(res => this.setState({
            background: {
              url: res.data.urls.regular,
              author: res.data.user.name,
              authorLink: res.data.user.links.html
            },
            visible: true,
            spinner: false
          }));
          this.setState({
            temperature: res.data.main.temp,
            city: res.data.name,
            country: res.data.sys.country,
            humidity: res.data.main.humidity,
            description: res.data.weather[0].description,
            error: ''
          });
        } 
      )
      .catch(error => this.setState({error: '404: Sorry couldn\'t find the information you are looking for..', visible: true}));
    
  }
  
  render() {
    const weather = (this.state.visible) ? <Weather data={this.state} /> : (this.state.spinner) ? <Spinner animation="border" size="sm" variant="light" /> : null;
    return (
      <UI background={this.state.background.url}>
        <Row className="align-items-center">
          <Col md="6">
            <Headings
              title="Weather Finder"
              subtitle="Find out temperature, conditions and more..."
            />
          </Col>
          <Col md="6">
            <div className="form-container">
              <Form getWeather={this.getWeatherData} />
              {weather}
            </div>
          </Col>
        </Row>
      </UI>
    );
  }
}

export default App;