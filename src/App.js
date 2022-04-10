import React from "react";
import "./App.css"

import Information from "./Components/Information"
import Weather from "./Components/Weather"
import Form from "./Components/Form"

const API_KEY = "f96b5d4a5017e892f0dc6a42172a33e8";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    
    if(city) {
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
      
      }else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Enter the city name"
        });
    }

    
  }

  render () {
    return(
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div class="col-sm-5 info">
            <Information/>
            </div>
            <div class="col-sm-7 form">
            <Form weatherMethod={this.gettingweather}/>
            <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              sunset={this.state.sunset}
              error={this.state.error}
        />
            </div>
              
          </div>
        </div>
        </div>

        

      </div>
    );
  }
}

export default App;