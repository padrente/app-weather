import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
//Api key
const APIkey ='e17e39b3ba285443b21339b273771dbd'

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    windIn: '',
    err: false,
  }

  

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleCityChange = e => {
    e.preventDefault()
    console.log("potwierdzony formularz");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`;
    
    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {

      const time= new Date().toLocaleString()
      
      this.setState({
        err: false,
        date: time,
        city: data.name,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        windIn: data.wind.speed,
      })
    })
    .catch(err => { 
      console.log(err)
      this.setState({
        err: true,
        city: this.state.value
      })
    })


  }

  render(){
    return (
      <div className="App">
        <Form 
          value={this.state.value} 
          change={this.handleInputChange}
          submit={this.handleCityChange}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
