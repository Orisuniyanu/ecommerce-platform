const request = require('supertest');
const app = require('../server');

describe('GET /products', () => {
  it('should return 200 and products list', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(1);
  });
});
