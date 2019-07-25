import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
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
        console.log(this.props)
        this.props.login(this.state.username, this.state.password)
        this.setState({
            redirectTo: '/'
        })
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
                            <form action="/users/login" method="POST">
                                <div class="form-group">
                                    <label for="email">Username</label>
                                    <input
                                        type="username"
                                        id="username"
                                        name="username"
                                        class="form-control"
                                        placeholder="Enter Username"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        class="form-control"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
                            </form>
                            <p class="lead mt-4">
                                No Account? <a href="/users/register">Register</a>
                            </p>
                        </div>
                    </div>
                </div>

            )
        }
    }
}

export default Login;