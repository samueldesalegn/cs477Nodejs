const jwt = require('jsonwebtoken');
const User = require('../models/user');

const accessTokenSecret = 'MSD CS477';



exports.login = async (req, res, next) => {
	const user = await User.findOne({
		username: req.body.username, password:
			req.body.password
	});
	if (user) {
		const accessToken = jwt.sign({
			username: user.username, role: user.role
		}, accessTokenSecret);
		res.json({ accessToken });
	} else {
		res.status(401).json({ 'error': 'username or password is invalid' });
	}
}


exports.authorize = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const [, token] = authHeader.split(' ');
		jwt.verify(token, accessTokenSecret, (err, user) => {
			if (err) {
				res.status(403).json({ 'error': 'Unauthorized' });
			} else {
				req.user = user;
				next();
			}
		})
	} else {
		res.status(401).json({ 'error': 'Please login' });
	}
}