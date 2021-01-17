const { json } = require('express');
const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);