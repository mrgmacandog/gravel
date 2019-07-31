import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
import API from "../utils/API";

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	login() {
		if (this.state.username === '') {
			return alert('Please enter a username')
		} else if (this.state.password === '') {
			return alert('Please enter a password')
		}
		
		API.login(this.state.username, this.state.password, this.props.onLogin);
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')

		this.login()
	}

render() {
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	} else {
		return (
			<div className="LoginForm">
				<h1>Login form</h1>
				<form>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleSubmit}>Login</button>
				</form>

			</div>
		)
	}
}
}

export default LoginForm
