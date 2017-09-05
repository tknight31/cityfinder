import React from 'react'

class City extends React.Component {

	constructor(){
		super()

		this.state={
			cityDetails: {},
			cityScores: {},
			cityImages: {}
		}
	}


	componentDidMount(){
		fetch(`https://api.teleport.org/api/urban_areas/slug:${this.props.city.slug}/details/`)
		.then(resp => resp.json())
		.then(i => this.setState({ cityDetails: i}))

		fetch(`https://api.teleport.org/api/urban_areas/slug:${this.props.city.slug}/scores/`)
		.then(resp => resp.json())
		.then(i => this.setState({ cityScores: i} ))

		fetch(`https://api.teleport.org/api/urban_areas/slug:${this.props.city.slug}/images/`)
		.then(resp => resp.json())
		.then(i => this.setState({ cityImages: i} ))

	}

	componentWillReceiveProps(nextProps){

		fetch(`https://api.teleport.org/api/urban_areas/slug:${nextProps.city.slug}/details/`)
		.then(resp => resp.json())
		.then(i => this.setState({ cityDetails: i}))

		fetch(`https://api.teleport.org/api/urban_areas/slug:${nextProps.city.slug}/scores/`)
		.then(resp => resp.json())
		.then(i => this.setState({ cityScores: i} ))

		fetch(`https://api.teleport.org/api/urban_areas/slug:${nextProps.city.slug}/images/`)
		.then(resp => resp.json())
		.then(i => this.setState({ cityImages: i} ))

	}

	render() {
		if (this.state.cityImages['photos']) {
			console.log(this.state.cityImages['photos'][0]['image']['mobile'])
		}
		return (
			<div className="ui card city" onClick={this.handleClick}>
			  <div className="image">
			    <img src={this.state.cityImages['photos'] ? this.state.cityImages['photos'][0]['image']['mobile']: "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"}/>
			  </div>
			  <div className="content">
			    <a className="header">{this.props.city["full_name"]}, {this.props.city["continent"]}</a>
			    <div className="description">
						{this.state.cityScores.summary ? require('html-react-parser')(this.state.cityScores.summary): ''}
			    </div>
			   </div>
			</div>
		)
	}
}



export default City

// <div className="city">
// 				<h1 onClick={this.handleClick}>{this.props.city["full_name"]}, {this.props.city["continent"]}</h1>
// 				<ul></ul>
// 				<div></div>

// {this.props.cityScores}