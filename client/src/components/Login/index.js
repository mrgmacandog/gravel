// import React, { Component } from 'react';
// // import { Redirect } from 'react-router-dom'

// // className Login extends Component {
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             username: '',
// //             password: '',
// //             redirectTo: null
// //         }
// //         // this.googleSignin = this.googleSignin.bind(this)
// //         this.handleSubmit = this.handleSubmit.bind(this)
// //         this.handleChange = this.handleChange.bind(this)
// //     }

// //     handleChange(event) {
// //         this.setState({
// //             [event.target.name]: event.target.value
// //         })
// //     }

// //     handleSubmit(event) {
// //         event.preventDefault()
// //         console.log('handleSubmit')
// //         console.log(this.props)
// //         this.props.login(this.state.username, this.state.password)
// //         this.setState({
// //             redirectTo: '/'
// //         })
// //     }

// //     render() {
// //         if (this.state.redirectTo) {
// //             return <Redirect to={{ pathname: this.state.redirectTo }} />
// //         } else {
// //             return (
// //                 <div className="row mt-5">
// //                     <div className="col-md-6 m-auto">
// //                         <div className="card card-body">
// //                             <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
// //                             <form action="/users/login" method="POST">
// //                                 <div className="form-group">
// //                                     <label for="email">Username</label>
// //                                     <input
// //                                         type="username"
// //                                         id="username"
// //                                         name="username"
// //                                         className="form-control"
// //                                         placeholder="Enter Username"
// //                                     />
// //                                 </div>
// //                                 <div className="form-group">
// //                                     <label for="password">Password</label>
// //                                     <input
// //                                         type="password"
// //                                         id="password"
// //                                         name="password"
// //                                         className="form-control"
// //                                         placeholder="Enter Password"
// //                                     />
// //                                 </div>
// //                                 <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
// //                             </form>
// //                             <p className="lead mt-4">
// //                                 No Account? <a href="/users/register">Register</a>
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>

// //             )
// //         }
// //     }
// // }

// function Login() {
//     return (

//       <body>
      
//       <h2>Login Form</h2>
      
//       <form action="/action_page.php">
//         <div className="imgcontainer">
//           <img src="img_avatar2.png" alt="Avatar" className="avatar" />
//         </div>
      
//         <div className="container">
//           <label for="uname"><b>Username</b></label>
//           <input type="text" placeholder="Enter Username" name="uname" required />
      
//           <label for="psw"><b>Password</b></label>
//           <input type="password" placeholder="Enter Password" name="psw" required />
              
//           <button type="submit">Login</button>
//           <label>
//             <input type="checkbox" checked="checked" name="remember" /> Remember me
//           </label>
//         </div>
      
//         <div className="container" style={ {"background-color":"#f1f1f1"} }>
//           <button type="button" className="cancelbtn">Cancel</button>
//           <span className="psw">Forgot <a href="#">password?</a></span>
//         </div>
//       </form>
      
//       </body>
      
//     )
// }

// export default Login;