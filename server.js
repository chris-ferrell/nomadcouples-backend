const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const port = 4000;

dotenv.config();

app.use(cors()); // allow external request
app.use(morgan('dev')); //logging
app.use(express.json()); //parce json

// basic route creation
app.get('/', (req, res) => {
    app.send('hello')
});

app.listen(port, () => {
    console.log(`Backend Live on ${port}`)
});