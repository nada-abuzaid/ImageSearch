/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../src/router');

test('get Home page', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      return done();
    });
});

test('get css files', (done) => {
  supertest(router)
    .get('/style.css')
    .expect(200)
    .expect('Content-Type', /css/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      return done();
    });
});

test('get js files', (done) => {
  supertest(router)
    .get('/js/getData.js')
    .expect(200)
    .expect('Content-Type', /javascript/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      return done();
    });
});

test('get json file', (done) => {
  supertest(router)
    .get('/auto')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      return done();
    });
});

test('get json file', (done) => {
  supertest(router)
    .get('/search')
    .expect(200)
    .expect('Content-Type', /plain/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      return done();
    });
});

test('Test not found case', (done) => {
  supertest(router)
    .get('/zz')
    .expect(404)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(404);
      return done();
    });
});
