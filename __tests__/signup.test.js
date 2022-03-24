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
    let req = mocks.mockRequest(); 
        
    req.body = {
      name: 'TREY ALL DAY',
      phone: 'Random',
      password: '123random',
      username: 'hawaiibro3'
      }
    
    const res = mocks.mockResponse();
    
    const client = await pgPool.connect();
    
    signup.create(req, res)
  });

  afterAll(async () => {
    await pgPool.end();
  })

    
  it('should add correct username', async () => {
    
    try {
      
       // await client.query('BEGIN');

      

      const sqlQuery = `
          SELECT username FROM users
          WHERE name = 'TREY ALL DAY';
          `
      
      let { rows } =  await client.query(sqlQuery);
      console.log(rows);
      expect(rows[rows.length - 1].username).toEqual('hawaiibro3');
      rows = []
      
      // await client.query('ROLLBACK');
    } catch (err) {
        throw err;
    } 
    finally {
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