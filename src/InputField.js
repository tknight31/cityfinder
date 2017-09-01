import React from 'react'

const InputField = (props) => {
	return <p>{props.label} <input type="number" name={props.label} className="inputField"/></p>
}

export default InputField