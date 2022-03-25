const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
// const bodyParser = require('body-parser');
const cors = require('cors');
const signInRouter = require('./routers/signIn');
const newUserRouter = require('./routers/newUserRouter')
const dateRouter = require('./routers/dateRouter');
const deleteDateRouter = require('./routers/deleteDateRouter')

const cookieParser = require('cookie-parser');

app.use(cors());
app.use(cookieParser())


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(express.static(path.resolve(__dirname, '../src')))
app.use(express.json());

// access cookies of incoming request throught req.cookies.

app.use('/login', signInRouter);

app.use('/newuser', newUserRouter);

app.use('/newdate', dateRouter);

app.use('/deletedate', deleteDateRouter)




//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
    });
  
module.exports = app;