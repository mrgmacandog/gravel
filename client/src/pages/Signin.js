import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
import API from "../utils/API";
import Login from "../components/Login"

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

		API.login(this.state.username, this.state.password)
		.then(response => {
			this.props.onLogin(response.data.user.local.username, response.data.user._id);
		});
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

				<div class="row mt-5">
					<div class="col-md-6 m-auto">
						<div class="card card-body">
							<h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
							<div class="form-group">
								<label for="username">Username</label>
								<input
									type="text"
									id="username"
									name="username"
									placeholder="Enter Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
							<div class="form-group">
								<label for="password">Password</label>
								<input
									type="password"
									id="password"
									name="password"

									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
							<button onClick={this.handleSubmit}>Login</button>
							<p class="lead mt-4">
								No Account? <a href="/signup">Register</a>
							</p>
						</div>
					</div>
				</div>
				// <div className="LoginForm">

				// 	<h1>Login form</h1>

				// 	<form>
				// 		<label htmlFor="username">Username: </label>
				// 		<input
				// 			type="text"
				// 			name="username"
				// 			value={this.state.username}
				// 			onChange={this.handleChange}
				// 		/>
				// 		<label htmlFor="password">Password: </label>
				// 		<input
				// 			type="password"
				// 			name="password"
				// 			value={this.state.password}
				// 			onChange={this.handleChange}
				// 		/>
				// 		<button onClick={this.handleSubmit}>Login</button>
				// 	</form>

				// </div>
			)
		}
	}
}

export default LoginForm
