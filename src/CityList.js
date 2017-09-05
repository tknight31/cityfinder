import React from 'react'
import City from './City'

class CityList extends React.Component {
	render() {
		return (
			<div className="city-list">
				{this.props.topFiveCities.map(city => <City city={city} topFiveCityDetails={this.props.topFiveCityDetails}/>)}
			</div>
		)
	}
}



export default CityList