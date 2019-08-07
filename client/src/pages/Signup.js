import React, { Component } from "react";
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import API from '../utils/API';
import AlertContainer from "../containers/AlertContainer"



// Can change to stateful component if need be
class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			//Create array of error messages
			//Map through each of them in a container component
			//Set state of errorMsg to null each time you hit submit
			errorMsg: []
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
		// this.setState({
		// 	errorMsg: null
		// })

		event.preventDefault()

		//TO DO
		//Add conditional to check if username already exists
		if (!this.state.password || !this.state.confirmPassword || !this.state.username) {
			return this.setState({
				errorMsg: ["Please fill out all fields"]
			})

		} else if (this.state.confirmPassword !== this.state.password) {
			return this.setState({
				errorMsg: ["Passwords do not match"]
			})

		} else {
			axios.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
				.then(response => {
					if (!response.data.error) {
						console.log(this.state)
						console.log('Registration succesful');
						API.login(this.state.username, this.state.password)
							.then(response => {
								console.log(response)
								this.props.onLogin(response.data.user.local.username, response.data.user._id);
							});
					} else {
						console.log('duplicate')
						console.log(response.data.error)
						this.setState({
							errorMsg: [response.data.error]
						})
					}
				})
		}
	}


	render() {
		return (
			<div class="row mt-5">
				<div class="col-md-6 m-auto">
					<div class="card card-body">
						<h1 class="text-center mb-3">
							<i class="fas fa-user-plus"></i> Register
						</h1>

						<div class="form-group">
							{(!this.state.errorMsg.length < 1 ?
								<AlertContainer errors={this.state.errorMsg} />
								: null
							)}


							{/* {(this.state.errorMsg ? this.state.errorMsg : null )} */}
							<br />
							<label for="name">Username</label>
							<input
								type="text"
								id="name"
								name="username"
								class="form-control"
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
								class="form-control"
								placeholder="Create Password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
						<div class="form-group">
							<label for="password2">Confirm Password</label>
							<input
								type="password"
								id="password2"
								name="confirmPassword"
								class="form-control"
								placeholder="Confirm Password"
								value={this.state.confirmPassword}
								onChange={this.handleChange}
							/>
						</div>
						<button onClick={this.handleSubmit}>Sign up</button>
						<p class="lead mt-4">Have An Account? <a href="/signin">Login</a></p>
					</div>
				</div>
			</div>
		)
	}
}



export default Signup;