const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('../passport')

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		console.log('AUTH/LOGIN ROUTE')
		console.log(req.body)
		console.log("=====================================")
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log("=====================================")
		console.log('PASSPORT AUTHENTICATE')
		console.log('POST to /login')
		console.log(req.body)
		console.log("=====================================")
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		console.log(cleanUser)
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	console.log("Hitting log out route")
	// console.log(req.session.passport.user._id)
	console.log(req.session)

	if (req.session.passport) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
		
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

//Check username and password with local strategy
router.post('/signup', (req, res) => {
	const { username, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password,
			'local.loggedIn': true
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router
