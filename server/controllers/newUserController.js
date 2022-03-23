const { query } = require("express");
const db = require("../../database/model");
const bcrypt = require('bcrypt');

const newUser = {};

newUser.create = (req, res, next) => {

  // console.log('Here is a body, and hopefully its here ', req.body);
  
  const username = req.body.username;
  const password = req.body.password;
  const rounds = 10;

// let hspw;
bcrypt.genSalt(rounds, function(err, salt){
  if (err){
    throw err
  } else {
    bcrypt.hash(password, salt, function(err, hash){
      if (err) {
        throw err
      } else {
        // hspw = hash;
        // console.log(hspw, 'password success?', hash);
        const queryString = `INSERT INTO users 
        (username, password, name, phone, 
        em1_name, em1_phone, em2_name, 
        em2_phone, em3_name, em3_phone)
        VALUES ('${req.body['username']}', 
        '${hash}', 
        '${req.body['name']}', 
        '${req.body['phone']}', 
        '${req.body['em1_name']}', 
        '${req.body['em1_phone']}',
        '${req.body['em2_name']}',
        '${req.body['em2_phone']}', 
        '${req.body['em3_name']}', 
        '${req.body['em3_phone']}')
        RETURNING *;`;

        db.query(queryString)
          .then(() => {
            // console.log('WE MADE IT')
            return next();
          })
          .catch((err) => {
            return next(err);
          });
        }
      })
    }
  });
}

module.exports = newUser;