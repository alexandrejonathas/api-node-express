const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({}));

const contactRouter = require('./routes/contact.route')

app.use('/api/contacts', contactRouter);

app.listen(3000, () => {
    console.log('Server is running');
})
