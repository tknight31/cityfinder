import React from 'react'
import PropTypes from 'prop-types'
import InputField from './InputField'

export default class Form extends React.Component{

	constructor(props){
		super(props)

		this.state={
			'Housing': 0,
			'Cost of Living': 0,
			'Startups': 0,
			'Venture Capital': 0,
			'Travel Connectivity': 0,
			'Commute': 0,
			'Business Freedom': 0,
			'Safety': 0,
			'Healthcare': 0,
			'Education': 0,
			'Environmental Quality': 0,
			'Economy': 0,
			'Taxation': 0,
			'Internet Access': 0,
			'Leisure & Culture': 0,
			'Tolerance': 0,
			'Outdoors': 0,

		}

	}


	handleInputChange = (event) => {
		//console.log(event.target.name)
		const name = event.target.name;
		this.setState({
			[name]: event.target.value
		});
  	}

	handleSubmit = (event) => {
		event.preventDefault()

		const values = Object.values(this.state)
		const sum = values.reduce( (prev, curr) => parseInt(prev) + parseInt(curr) )

		this.props.handleSubmit(this.state)
	}



	render(){
		return(
			<div className="main-form">
				<form onSubmit={this.handleSubmit}>
					<div><label>Housing</label><input min="0" max="20" type="number" name="Housing" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Housing']} required/></div>
					<div><label>Cost Of Living</label><input min="0" max="20" type="number" name="Cost of Living" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Cost of Living']} required/></div>
					<div><label>Startups</label><input min="0" max="20" type="number" name="Startups" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Startups']} required/></div>
					<div><label>Venture Capital</label><input min="0" max="20" type="number" name="Venture Capital" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Venture Capital']} required/></div>
					<div><label>Travel Connectivity</label><input min="0" max="20" type="number" name="Travel Connectivity" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Travel Connectivity']} required/></div>
					<div><label>Commute</label><input min="0" max="20" type="number" name="Commute" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Commute']} required/></div>
					<div><label>Business Freedom</label><input min="0" max="20" type="number" name="Business Freedom" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Business Freedom']} required/></div>
					<div><label>Safety</label><input min="0" max="20" type="number" name="Safety" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Safety']} required/></div>
					<div><label>Healthcare</label><input min="0" max="20" type="number" name="Healthcare" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Healthcare']} required/></div>
					<div><label>Education</label><input min="0" max="20" type="number" name="Education" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Education']} required/></div>
					<div><label>Environmental Quality</label><input min="0" max="20" type="number" name="Environmental Quality" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Environmental Quality']} required/></div>
					<div><label>Economy</label><input min="0" max="20" type="number" name="Economy" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Economy']} required/></div>
					<div><label>Taxation</label><input min="0" max="20" type="number" name="Taxation" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Taxation']} required/></div>
					<div><label>Internet Access</label><input min="0" max="20" type="number" name="Internet Access" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Internet Access']} required/></div>
					<div><label>Leisure &amp; Culture</label><input min="0" max="20" type="number" name="Leisure & Culture" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Leisure & Culture']} required/></div>
					<div><label>Tolerance</label><input min="0" max="20" type="number" name="Tolerance" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Tolerance']} required/></div>
					<div><label>Outdoors</label><input min="0" max="20" type="number" name="Outdoors" className="inputField" onChange={this.handleInputChange} defaultValue={this.state['Outdoors']} required/></div>


					<input type="submit" value="Find Cities" / >

				</form>

			</div>
			)
	}

}
