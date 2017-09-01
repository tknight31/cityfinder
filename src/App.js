import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Form'
import CityList from './CityList'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      cityLinks: [],
      cities: [],
      cityScores: []
    }
  }

  /// componentShouldUpdate() {

 /// }


 onSubmit = (submission) => {

 }

  componentDidMount() {
    fetch('https://api.teleport.org/api/urban_areas/')
      .then(resp => resp.json())
      .then(allUrbanAreas => {
        const cityLinks = allUrbanAreas['_links']['ua:item'].map( city => city.href )
        const cityScores = []
        const cities = []
        cityLinks.forEach(link => { 
            fetch(link+"scores")
              .then(resp => resp.json())
              .then(area =>  {
                cityScores.push(area)
              })
        })

       cityLinks.forEach(link => {
        fetch(link)
          .then(resp => resp.json())
          .then(area =>  {
            cities.push(area)
          }) 
        })


         if ((cityScores.length == cities.length) && cityLinks.length != 0) {
        this.setState({
          cityLinks,
          cityScores,
          cities
        })
      }


      })
  }




   handleSubmit = (obj) => {
      console.log(obj)
     // when i submit
     // grab state
     // do something
    }



  getCityScores = () => {
     
  }


  // calculateScore()

  render() {
    // console.log("LINKS")
    // console.log(this.state.cityLinks)
    // console.log("CITIES")
    // console.log(this.state.cities)
    // console.log("SCORES")
    console.log(this.state.cityScores)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>NotSoShittyCity</h2>
        </div>
        <Form handleSubmit={this.handleSubmit}/>

      </div>
    );
  }
}

export default App;
