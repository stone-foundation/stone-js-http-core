const { IncomingHttpEvent } = require('../src/IncomingHttpEvent')

describe('IncomingHttpEvent', () => {
  test('has static METHOD_HEAD', () => {
    expect(IncomingHttpEvent.METHOD_HEAD).toEqual('HEAD')
  })
})
