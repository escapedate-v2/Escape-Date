const { query } = require("express");
const db = require("../../database/model");

const date = {};

date.create = (req, res, next) => {
  const { user_id, date_person, location, interval, date } = req.body;
  const active = true;
  values = [user_id, date_person, location, interval, date, active];
  const queryString = `
    INSERT INTO dates (user_id, date_person, location, interval, date, active)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  db.query(queryString, values)
    .then((data) => {
      res.locals.date_id = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err)
      return next(err);
    })
}

date.delete = async (req, res, next) => {
  const {date_id} = req.body;
  const deleteQuery = `
    DELETE FROM dates
    WHERE date_id = $1;
  `;
  try {
    const deleteDate = await db.query(deleteQuery, [date_id])
    return next();
  } catch (err) {
    console.log(err)
    return next(err)
  }
}


module.exports = date;