import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('test endpoint response', () => {
  it('get response status 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
