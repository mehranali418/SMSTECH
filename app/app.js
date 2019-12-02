const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const student=require('./routes/student');




app.use(bodyParser.json(),cors());

app.use('/student',student);







app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 3000);
    res.json({
        error: {
            message: error.message
        }
    })

});


module.exports = app;