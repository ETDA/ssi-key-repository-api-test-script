import { Key } from './key'

describe('Generate RSA key', () => {

  test('Generate RSA key', async () => {
    try {
      const genKey = await Key.GenRSAKey()
      console.log('Gen Key: ', JSON.stringify(genKey.data, null, 2))
      expect(genKey.status).toEqual(201)
    } catch (err) {
      console.log(err.response)
      expect(err).not.toBeTruthy()
    }
  })
})
