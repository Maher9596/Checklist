const request = require('supertest');
const assert = require('assert')
const express = require('express');

const app = express()

describe('GET /', () => {
    it('it responds with text/html', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, response) => {
                assert.equal(response.header['content-type'], 'text/html; charset=utf-8');
                done()
            })
    })
    it('it redirects to correct path', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Location', '/login')
            .end((err, response) => {
                assert.equal(response.header['content-type'], 'text/html; charset=utf-8');
                done()
            })
    })
})

describe('GET /login', () => {
    it('it responds with text/html', (done) => {
        request(app)
            .get('/login')
            .expect(200)
            .end((err, response) => {
                assert.equal(response.header['content-type'], 'text/html; charset=utf-8');
                done()
            })
    })
})