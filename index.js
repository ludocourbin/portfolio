const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

// console.log(process.env.SENGRID_KEY);

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.get('/api', (req, res, next) => {
	res.send("API Status: I'm awesome");
});

app.post('/api/email', (req, res) => {
	console.log(req.body);

	sendGrid.setApiKey(process.env.SENGRID_KEY);
	const msg = {
		to: 'ludovic.courbin@gmail.com',
		from: req.body.email,
		subject: `Portfolio Contact from ${req.body.name}`,
		text: req.body.message,
	};

	sendGrid
		.send(msg)
		.then(result => {
			res.status(200).json({
				success: true,
			});
		})
		.catch(err => {
			console.log('error: ', err);
			res.status(401).json({
				success: false,
			});
		});
});

app.listen(3030);
