const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const validateSignup = require('./validateSignup');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', validateSignup, (req, res) => {
    console.log('Received signup request with body:', req.body);
    res.status(200).json({ message: "Signup successful" });
});


const PORT = 3000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
