const express = require('express');
const cors = require('cors');
const routes = require('./routes')  //./ referencia ao arquivo

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);