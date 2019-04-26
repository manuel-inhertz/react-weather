import React from 'react';

class Weather extends React.Component {
    
    render() {
        if (this.props.data.error === '') {
            return (<ul className='weather__info'>
                <li>City: <span>{this.props.data.city}</span></li>
                <li>Country: <span>{this.props.data.country}</span></li>
                <li>Description: <span>{this.props.data.description}</span></li>
                <li>Temperature: <span>{this.props.data.temperature}</span></li>
                <li>Humidity: <span>{this.props.data.humidity}</span></li>
            </ul>);
        } else {
            return (
                <div className='weather__error'>
                <p>{this.props.data.error}</p>
              </div>
            );
        }
    }
}
export default Weather;