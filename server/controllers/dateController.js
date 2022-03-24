const { query } = require("express");
const db = require("../../database/model");

const date = {};

date.create = (req, res, next) => {
  const { user_id, date_person, location, interval, date } = req.body;
  const queryString = `
    INSERT INTO dates (user_id, date_person, location, interval, date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING date_id;
  `;
  values = [user_id, date_person, location, interval, date];
  db.query(queryString, values)
    .then((data) => {
      res.locals.date_id = data.rows[0].date_id;
      return next();
    })
    .catch((err) => {
      console.log(err)
      return next(err);
    })
}


module.exports = date;