import React from 'react';

class Titles extends React.Component {
    render() {
        return (<div className="heading">
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
        </div>);
    };
}

export default Titles;