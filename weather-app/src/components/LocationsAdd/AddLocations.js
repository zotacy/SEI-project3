import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './AddLocations.css';
import App from '../App/App';
import Locations from '../Locations/Locations';

class AddLocations extends Component{
  constructor(props){
    super(props);
    
    this.state={
      metaWeatherData:[]
    }
    console.log(this.props)
    console.log(this.state)
  }

  componentDidMount = async () => {
    const weatherURL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/";
    let response = await axios.get(weatherURL)
    this.setState({metaWeatherData: response.data.data});
  }
  
  render(){
    return (
      <div className="App">
        <main className="add-locations-main">
            <h1>New Locations</h1>
            <App {...this.props}{...this.state}/>
        </main>
      </div>
    )
  };
}

export default AddLocations;