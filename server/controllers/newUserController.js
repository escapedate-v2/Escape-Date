const { query } = require("express");
const db = require("../../database/model");
const bcrypt = require('bcrypt');
// const { response } = require("../server");

const newUser = {};

newUser.createUser = async (request, response, next) => {

  // console.log('Here is a body, and hopefully its here ', req.body);
  
  const username = request.body.username;
  const password = request.body.password;
  const rounds = 10;

// let hspw;
bcrypt.genSalt(rounds, async (err, salt) => {
  if (err){
    //console.log('prehash error');
    throw err
  } else {
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        //console.log('hash error');
        throw err
      } else {
        //console.log('prequery');
        const randomNum = Math.floor(Math.random() * 11235813);
        const values = [request.body.username, hash, request.body.name, request.body.phone, randomNum]
        const queryString = `
          INSERT INTO users (username, password, name, phone, secret)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING user_id;
        `
        // const queryString = `
        //   WITH user_key AS (INSERT INTO users (username, password, name, phone, secret) VALUES ($1, $2, $3, $4, $5) RETURNING user_id)
        //   INSERT INTO em_contacts (user_id, em_name, em_phone) VALUES (user_key, $6, $7) RETURNING *;
        // `
        db.query(queryString, values)
          .then((data) => {
            response.locals.user_id = data.rows[0].user_id;
            response.cookie('loggedIn', randomNum, {
              maxAge: 10000,
              httpOnly: true
            })
            return next();
          })
          .catch((err) => {
            console.log(err)
            return next({
              log: ' Error in createUser middleware',
              status: 500,
              message: { err: 'Error in createUser middleware' },
            });
          });
        }
      })
    }
  });
}

newUser.createEm1 = (req, res, next) => {
  // if (req.body.em1_name !== undefined && req.body.em1_phone !== undefined) {
    console.log('pre-query call')
    
    const values = [res.locals.user_id, req.body.em1_name, req.body.em1_phone];
    const query = `
      INSERT INTO em_contacts (user_id, em_name, em_phone)
      VALUES ($1, $2, $3);
    `

    db.query(query, values)
      .then(() => {
        return next()
      })
      .catch((err) => {
        console.log(err)
        return next({
          log: ' Error in createEm1 middleware',
          status: 500,
          message: { err: 'An error occurred EM1' },
        });
      });
  // }
}

newUser.createEm2 = (req, res, next) => {
  // if (req.body.em2_name !== undefined && req.body.em2_phone !== undefined) {
    const query = `
      INSERT INTO em_contacts (user_id, em_name, em_phone)
      VALUES ($1, $2, $3);
    `
    const values = [res.locals.user_id, req.body.em2_name, req.body.em2_phone];

    db.query(query, values)
      .then(() => {
        return next()
      })
      .catch((err) => {
        console.log(err)
        return next({
          log: ' Error in createEm2 middleware',
          status: 500,
          message: { err: 'An error occurred EM2' },
        });
      });
  // }
}

newUser.createEm3 = (req, res, next) => {
  // if (req.body.em3_name !== undefined && req.body.em3_phone !== undefined) {
    const query = `
      INSERT INTO em_contacts (user_id, em_name, em_phone)
      VALUES ($1, $2, $3);
    `
    const values = [res.locals.user_id, req.body.em1_name, req.body.em1_phone];

    db.query(query, values)
      .then(() => {
        return next()
      })
      .catch((err) => {
        console.log(err);
        return next({
          log: ' Error in createEm3 middleware',
          status: 500,
          message: { err: 'An error occurred EM3' },
        });
      });
  // }
}

module.exports = newUser;