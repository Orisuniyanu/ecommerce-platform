// __tests__/server.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /api/products', () => {
  it('should return 200 and products list', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('name');
  });
});
