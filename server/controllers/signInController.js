const { query } = require("express");
const db = require("../../database/model");
const bcrypt = require('bcrypt');

const signIn = {};


//check if user exists in database
signIn.user = (request, response, next) => {
    console.log('request is', request.body)
    const username = request.body.username;
    const password = request.body.password;
    const rounds = 10;

    const params = [username];
    const queryString = `SELECT * FROM users WHERE username = $1;`

    db.query(queryString, params)
    .then((data) => {
        if (data.rows[0] === undefined) {
            response.locals.user = {err: 'Username does not exist'}
            return res.status(404).json('incorrect username');
        };
        bcrypt.compare(password, data.rows[0].password, (err, res) => {
            if (err) {
                return err;
            }
            if (!res) {
                console.log('incorrect password');
                return response.status(404).json('incorrect password')
            } else {
                const randomNum = Math.floor(Math.random()*12346345)
                response.cookie('loggedIn', randomNum, {
                    maxAge: 10000, 
                    httpOnly: true
                }
                )
                const values = [ randomNum, username ];
                console.log('pre-secret insert');
                const query = `
                    UPDATE users
                    SET secret = $1
                    WHERE username = ($2);
                `
                db.query(query, values)
                    .then(() => {
                        return next()
                    })
                    .catch((err) => {
                        console.log(err)
                        return next({
                            log: ' Error in cookie insert middleware',
                            status: 500,
                            message: { err: 'Error in cookie insert middleware' },
                          })
                    })
                ;
            }
        })
    })
    .catch((errObj) => {
        errObj.log = 'error in controller.signin.user';
        errObj.status = 400;
        errObj.message = {err: 'controller.signIn.user error'};
        return next(errObj);
    })
}


module.exports = signIn;