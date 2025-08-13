import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app.js';

describe('Users & Pets', () => {
  it('GET /api/users -> array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('items');
    expect(res.body.items).to.be.an('array');
  });

  it('GET /api/pets -> array', async () => {
    const res = await request(app).get('/api/pets');
    expect(res.status).to.equal(200);
    expect(res.body.items).to.be.an('array');
  });
});
