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
      cityScores: [],
      topFiveCities: [],
      topFiveCityDetails: []
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
      const cityInfo = []
      this.state.cityScores.forEach(city => cityInfo.push(city.categories))
      const cityInfo2 = cityInfo.map(city => {
        return city.map(category => (parseFloat(obj[category.name]) * category['score_out_of_10']))
      })
      const cityInfo3 = cityInfo2.map((city, index) => {
        return {[index]:  (city.reduce((sum, value) => sum + value))}
      })

      function compare(a,b) {
        if (Object.values(a)[0] < Object.values(b)[0])
          return 1;
        if (Object.values(a)[0] > Object.values(b)[0])
          return -1;
        return 0;
      }
      cityInfo3.sort(compare)
      this.setState({
        topFiveCities: cityInfo3.slice(0,5)
        .map(city => Object.keys(city))
        .map(i => this.state.cities[i]),

        topFiveCityDetails: cityInfo3.slice(0,5)
        .map(city => Object.keys(city))
        .map(i => this.state.cityScores[i])

      })

    }

    


  getCityScores = () => {
     
  }


  // calculateScore()

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>NotSoShittyCity</h2>
        </div>
        <CityList topFiveCities={this.state.topFiveCities} topFiveCityDetails={this.state.topFiveCityDetails}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
