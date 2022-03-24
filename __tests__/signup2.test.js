const signup = require('../server/controllers/newUserController.js')
const { Pool } = require('pg')
// const client = require('pg/lib/native/client')

process.env.mocks = {
    mockRequest: () => {
        const req = {}
        req.body = jest.fn().mockReturnValue(req)
        req.params = jest.fn().mockReturnValue(req)
        return req
    },
    mockResponse: () => {
        const res = {}
        res.send = jest.fn().mockReturnValue(res)
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        return res
    },
}

xdescribe('Check newUserController create method', () => {
  let pgPool;
  beforeAll(() => {
    pgPool = new Pool({
      connectionString: 'postgres://uukfmpcg:aaPysolXzgSV_yRyvtuH5iPpHFMNuZmN@raja.db.elephantsql.com/uukfmpcg'
    })
  })
  afterAll(async () => {
    await pgPool.end();
  })

  it ('should add correct username', () => {
    process.env.client = pgPool.connect()
    .then(() => {
      let req = process.env.mocks.mockRequest();
      req.body = {
        name: 'BillyBill',
        phone: '8585987077',
        password: '11234',
        username: 'billybilly'
      }
      const res = process.env.mocks.mockResponse();
      return signup.create(req, res)
      .then(() => {
        const sqlQuery = `
        SELECT username FROM users WHERE name = 'BillyBill;
        `;
        return process.env.client.query(sqlQuery)
        .then((rows) => {
          console.log(rows);
          expect(rows[0].username).toEqual('billybilly');
          rows = [];
        })
      })
    })
  })

})