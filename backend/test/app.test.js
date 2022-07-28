const request = require('supertest')
const app = require('../app')

describe('server status', () => {
  it('status ok', async () => {
    const res = await request(app)
            .get('/api/status')
            .send()
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('ok')
  })
})

describe('no location parameter', () => {
  it('bad request returned', async () => {
    const res = await request(app)
            .get('/api/meteo')
            .send()
    expect(res.statusCode).toEqual(400)
  })
})

describe('parse weather response', () => {
  it('response returned', async () => {
    const res = await request(app)
            .get('/api/meteo').query({location: 'rome'})
            .send()
    expect(res.statusCode).toEqual(200)
  })
})
