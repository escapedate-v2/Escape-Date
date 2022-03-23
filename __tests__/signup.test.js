const signup = require('../server/controllers/newUserController.js');
// const { mockRequest, mockResponse } = require('../__utils__/interceptor.js');
const { Pool } = require('pg');

// const req = mockRequest();
// req.body = {
//   username: 'testUsername',
//   password: '1234',
//   name: 'user name',
//   phone: '8585987077',
// }
// const res = mockResponse();

// console.log(signup.create(req));

// make sure request body has correct data

const mocks = {
  mockRequest: () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
  },
  mockResponse: () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res;
  }
};

describe('Check sign newUserController create method', () => {
  let pgPool;

  beforeAll(() => {
    pgPool = new Pool({
      connectionString: 'postgres://uukfmpcg:aaPysolXzgSV_yRyvtuH5iPpHFMNuZmN@raja.db.elephantsql.com/uukfmpcg'
    });
  });

  afterAll(async () => {
    await pgPool.end();
  })


    
  it('should add correct username', async () => {
    const client = await pgPool.connect();
    try {
       // await client.query('BEGIN');

      let req = mocks.mockRequest();
        
      req.body = {
        name: 'BillyBob',
        phone: 'Random',
        password: '123random',
        username: 'billyuser'
        }
      
      const res = mocks.mockResponse();
  
      await signup.create(req, res);
  
      const sqlQuery = `
          SELECT username FROM users
          WHERE name = 'BillyBob';
          `
      setTimeout(async () => {let { rows } = await client.query(sqlQuery);
      console.log(rows);
      expect(rows[0].username).toEqual('billyuser');
      rows = []}, 999)
      // await client.query('ROLLBACK');
    } catch (err) {
        throw err;
    } finally {
      client.release();
    }
    });
})

// make sure request body is in the correct format


// beforeEach(() => {
//   db.startTransaction();
// });

// afterEach(() => {
//   db.rollbackTransaction();
// });