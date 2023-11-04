const { Request } = require('../src/Request')

describe('Request', () => {
  test('has static METHOD_HEAD', () => {
    expect(Request.METHOD_HEAD).toEqual('HEAD')
  })
})
