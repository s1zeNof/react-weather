import React from 'react';
import "../App.css"

/*It's a simple Component without "extends React.Component. The same in the Informations.js , Weather.js and here.*/
const Form = props => (
    <div>
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="London" />
            <button>Get Weather</button>
        </form>
    </div>    
)
export default Form