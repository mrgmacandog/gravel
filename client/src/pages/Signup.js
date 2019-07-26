import React,  { Component } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// Can change to stateful component if need be
class Signup extends Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			loggedIn: false,
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	handleSubmit(event) {
		event.preventDefault()
		//TO DO
		//Add conditional to check if username already exists
		if(this.state.confirmPassword !== this.state.password) {
			return alert("Passwords don't match")
		} else if(this.state.password === '' || this.state.confirmPassword === '') {
			return alert("Please fillout both password fields")
		} else {
		//loggedIn value won't 
		axios.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password,
				loggedIn: true
			})
			.then(response => {
				if (!response.data.error) {
					console.log(this.state)
					console.log('Registration succesful')
					this.setState({
						redirectTo: '/'
					})
				} else {
					console.log('duplicate')
					return alert(response.data.error)
				}
			})
		}
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
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
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default Signup;