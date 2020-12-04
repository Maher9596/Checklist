const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;
const app = require('../index')

describe('GET /', () => {
    it('it redirects to correct path', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, response) => {
                expect(response.header['location']).to.equal('/login');
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
                expect(response.header['content-type']).to.equal('text/html; charset=utf-8')
                done()
            })
    })
})
