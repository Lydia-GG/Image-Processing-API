import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('test endpoint response', () => {
  it('get response status 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('get response status 200 when we use only filename', async () => {
    const response = await request.get('/images?filename=santamonica');
    expect(response.status).toBe(200);
  });
  it('response text and status when we use filename and width only', async () => {
    const response = await request.get(
      '/images?filename=santamonica&width=100'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('please provide image height!');
  });
  it('response text and status when we use filename and height only', async () => {
    const response = await request.get(
      '/images?filename=santamonica&height=100'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('please provide image width!');
  });
  it('response text and status when we use set width= 0', async () => {
    const response = await request.get(
      '/images?filename=santamonica&width=0&height=100'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('please provide image width!');
  });
  it('response text and status when we use set height= 0', async () => {
    const response = await request.get(
      '/images?filename=santamonica&width=100&height=0'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('please provide image height!');
  });
  it('response text and status when we use set width < 0', async () => {
    const response = await request.get(
      '/images?filename=santamonica&width=-1&height=100'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('please provide positive integer');
  });
  it('response text and status when we use set height < 0', async () => {
    const response = await request.get(
      '/images?filename=santamonica&width=100&height=-1'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('please provide positive integer');
  });
  it('response status 200 when we use right path', async () => {
    const response = await request.get(
      '/images?filename=santamonica&width=100&height=100'
    );
    expect(response.status).toBe(200);
  });
});
