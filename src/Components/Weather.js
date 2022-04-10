import React from 'react';
import "../App.css"

const Weather = props => (
    <div>
            { props.city &&
             <div>
                <p>Location: {props.city}, {props.country}</p>
                <p>Temperature: {props.temp}</p>
                <p>Pressure: {props.pressure}</p>
                <p>SunSet: {props.sunset}</p>
             </div>
            }
            <p>{props.error}</p>
        </div>
)

export default Weather;