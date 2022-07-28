const request = require('supertest')
const app = require('../app')

describe('Status', () => {
  it('stest server reachable', async () => {
    const res = await request(app)
            .get('/api/status')
            .send()
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('ok')
  })
})
