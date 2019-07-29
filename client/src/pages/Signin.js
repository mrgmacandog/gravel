import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
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


	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		if (this.state.username === '') {
			return alert('Please enter a username')
		} else if (this.state.password === '') {
			return alert('Please enter a password')
		}

		axios.post('/auth/login', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log('RESPONSE FROM PASSPORT')
				console.log(response.data)
				if (response.status === 200) {
					// update the state
					//TO DO:
					// Instead of setting state via this function, pass username, id and loggedin = true as props to 
					//	the component I've redirected too
					// TO DO:
					//Add component did mount to the target page
					this.props.onLogin(response.data.user.local.username, response.data.user._id)
					//   this.setState({
					// 	loggedIn: true,
					// 	user: response.data.user.local.username,
					// 	id: response.data.user._id
					//   })

					// obj.success();
					console.log("Succesful signin")
					this.setState({
						redirectTo: '/'
					})
				}
			}).catch(err => {
				if (err) {
					console.log(err)
					alert("Please enter a valid username and password");
				} 
			})
	}

// this.props.login(this.state.username, this.state.password)
// this.setState({
// 	redirectTo: '/'
// })
// alert('Logged in!')


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
