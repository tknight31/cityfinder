import React from 'react'
import InputField from './InputField'

export default class Form extends React.Component{

	constructor(props){
		super(props)

		this.state={}

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
		console.log(sum)


		this.props.handleSubmit(this.state)
		// this.setState({
		// 	value: event.target.value
		// })
		// debugger
		// when i submit
		// grab state
		// do something
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="number" name="Housing" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.housing}/>
					<input type="number" name="Cost of Living" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.living}/>
					<input type="number" name="Startups" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.startups}/>
					<input type="number" name="Travel Connectivity" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.startups}/>
					<input type="number" name="Commute" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.startups}/>
					<input type="number" name="Business Freedom" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.startups}/>
					<input type="number" name="Safety" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.startups}/>
					<input type="number" name="Healthcare" className="inputField" onChange={this.handleInputChange} defaultValue={this.state.startups}/>
					<input type="submit" value="Avoid Shitty Cities" / >
				</form>
				
			</div>
			)
	}

}


					// <InputField label="Housing" />
					// <InputField label="Cost Of Living" />
					// <InputField label="Startups" />
					// <InputField label="Travel Connectivity" />
					// <InputField label="Commute" />
					// <InputField label="Business Freedom" />
					// <InputField label="Safety" />
					// <InputField label="Healthcare" />

